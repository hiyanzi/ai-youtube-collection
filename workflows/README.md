# n8n 自動更新流程

這個資料夾放的是可以匯入 n8n 的自動化流程，用來自動更新「AI YouTube 影片收藏網站」。

## 檔案說明

- `n8n-youtube-auto-update.json`：Windows 本機版 n8n 使用。
- `n8n-youtube-auto-update-docker.json`：Docker 版 n8n 使用。你的 n8n 架在本機 Docker，所以請用這個。

## 這個流程會做什麼

每 6 小時自動執行一次：

1. 進入網站專案資料夾。
2. 執行 `git pull --ff-only`，先同步 GitHub 最新版本。
3. 安裝或確認 Python 套件。
4. 執行 `scripts/fetch_playlists.py`，重新抓 YouTube 播放清單。
5. 執行 `scripts/summarize.py`，替新影片產生 AI 摘要與標籤。
6. 如果 `config.json` 或 `data/videos.js` 有變更，就自動 commit 並 push 到 GitHub。
7. GitHub 更新後，Vercel 會自動重新部署網站。

## Docker 版 n8n 設定方式

Docker 裡的 n8n 看不到 Windows 這種路徑：

```text
C:\Claude專案\AI影片收藏網站\AI Youtube影片收藏網站
```

所以你要把 Windows 的專案資料夾掛載到 n8n container 裡。

請在 n8n 匯入這個檔案：

```text
workflows/n8n-youtube-auto-update-docker.json
```

`docker-compose.yml` 範例：

```yaml
services:
  n8n:
    image: n8nio/n8n:latest
    ports:
      - "5678:5678"
    environment:
      - TZ=Asia/Taipei
      - PROJECT_DIR=/workspace/ai-youtube-collection
    volumes:
      - n8n_data:/home/node/.n8n
      - "C:/Claude專案/AI影片收藏網站/AI Youtube影片收藏網站:/workspace/ai-youtube-collection"

volumes:
  n8n_data:
```

掛載後，Windows 裡的：

```text
C:\Claude專案\AI影片收藏網站\AI Youtube影片收藏網站
```

在 n8n container 裡會變成：

```text
/workspace/ai-youtube-collection
```

匯入 workflow 後，打開 `Fetch, Summarize, Commit, Push` 節點，確認裡面的專案路徑是：

```sh
PROJECT_DIR="${PROJECT_DIR:-/workspace/ai-youtube-collection}"
```

## Docker 容器需要有的工具

這個流程需要 n8n container 裡有以下指令：

- `git`
- `python3`
- `pip`

如果執行 workflow 時出現這些錯誤：

```text
git: not found
python3: not found
pip: not found
```

代表官方 n8n Docker image 裡缺少工具。建議建立自訂 Docker image。

新增一個 `Dockerfile`：

```dockerfile
FROM n8nio/n8n:latest

USER root
RUN apk add --no-cache git python3 py3-pip
USER node
```

然後把 `docker-compose.yml` 改成：

```yaml
services:
  n8n:
    build: .
    ports:
      - "5678:5678"
    environment:
      - TZ=Asia/Taipei
      - PROJECT_DIR=/workspace/ai-youtube-collection
    volumes:
      - n8n_data:/home/node/.n8n
      - "C:/Claude專案/AI影片收藏網站/AI Youtube影片收藏網站:/workspace/ai-youtube-collection"

volumes:
  n8n_data:
```

接著重新啟動 n8n：

```sh
docker compose up -d --build
```

## GitHub 推送權限

n8n container 裡也需要能夠 push 到 GitHub。

最簡單的方式是用 HTTPS 加 GitHub Personal Access Token，或是把 SSH key 掛進 container。

正式啟用 workflow 前，建議先進入 n8n container 測試：

```sh
cd /workspace/ai-youtube-collection
git status
git pull --ff-only
git push
```

如果這三個指令都能成功，n8n 自動更新就比較穩。

## 專案 `.env` 設定

專案根目錄需要有 `.env`，裡面至少要有：

```env
YOUTUBE_API_KEY=你的 YouTube API Key
GEMINI_API_KEY=你的 Gemini API Key
```

`YOUTUBE_API_KEY` 是抓 YouTube 播放清單必要的。

`GEMINI_API_KEY` 是產生 AI 摘要與標籤用的。如果你暫時不想自動產生摘要，可以把 workflow 裡的這一行刪掉：

```sh
python3 scripts/summarize.py
```

## YouTube 收藏限制

YouTube 私人的「喜歡的影片」或「稍後觀看」通常不能只靠 API key 自動讀取。

建議做法是：

1. 建立一個公開或不公開的 YouTube 播放清單。
2. 把想放到網站的新影片加入那個播放清單。
3. 確認該播放清單網址有放在 `config.json` 的 `playlists` 裡。
4. n8n workflow 就會定時抓取，並自動更新網站。
