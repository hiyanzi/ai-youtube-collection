# n8n 自動更新流程

這個資料夾放的是「AI YouTube 影片收藏網站」的 n8n 自動更新流程。

## 目前 Docker 架構

目前 Docker 版不使用 n8n 的 `Execute Command` 節點，因為目前這套 n8n 版本會回報：

```text
Unrecognized node type: n8n-nodes-base.executeCommand
```

改用兩個 container：

- `n8n`：負責排程，每 12 小時觸發一次。
- `youtube-updater`：Flask 服務，接收 n8n 的 HTTP POST，實際執行 YouTube 抓取、Gemini 摘要、git commit、git push。

n8n workflow 會呼叫：

```text
http://youtube-updater:5000/trigger-update
```

## Workflow 檔案

- `n8n-youtube-auto-update-docker.json`：目前 Docker 版 workflow，使用 HTTP Request node。
- `n8n-youtube-auto-update.json`：舊 Windows/本機版，仍含 Execute Command node，不適合目前這台 Docker n8n。

## 更新流程

每 12 小時會：

1. n8n 觸發 HTTP Request。
2. `youtube-updater` 執行 `git pull --ff-only`。
3. 執行 `scripts/fetch_playlists.py`。
4. 執行 `scripts/summarize.py`。
5. 如果只有 `generated_at` 或行尾差異，回傳 `NO_CHANGES`，不 commit。
6. 如果影片資料真的有更新，commit 並 push 到 GitHub。
7. GitHub push 後由 Vercel 自動部署。

## Docker Compose 重點

`docker-compose.yml` 需要有兩個 service：

```yaml
services:
  n8n:
    build: .
    container_name: n8n
    ports:
      - "5678:5678"
    volumes:
      - n8n_data:/home/node/.n8n
      - "C:/Claude專案/AI影片收藏網站/AI Youtube影片收藏網站:/workspace/ai-youtube-collection"

  youtube-updater:
    build: .
    container_name: youtube-updater
    working_dir: /workspace/ai-youtube-collection
    entrypoint: ["/usr/local/bin/python3"]
    command: ["/workspace/ai-youtube-collection/server.py"]
    volumes:
      - n8n_data:/home/node/.n8n
      - "C:/Claude專案/AI影片收藏網站/AI Youtube影片收藏網站:/workspace/ai-youtube-collection"
```

`youtube-updater` 不需要對外開 port，只需要讓 n8n 在 Docker 內網呼叫。

## 必要檢查

確認 container：

```sh
docker ps
```

確認 n8n 可以呼叫 updater：

```sh
docker exec n8n wget -q -O - http://youtube-updater:5000/healthz
```

手動測試更新：

```sh
docker exec n8n wget -S -O - --timeout=300 --post-data= http://youtube-updater:5000/trigger-update
```

成功時會回：

```json
{"status":"success","stdout":"NO_CHANGES"}
```

或：

```json
{"status":"success","stdout":"UPDATED"}
```

## 常見錯誤

### `Unrecognized node type: n8n-nodes-base.executeCommand`

表示 workflow 仍使用舊的 Execute Command node。請匯入目前的 `n8n-youtube-auto-update-docker.json`，或確認 n8n 內的 HTTP Request URL 是：

```text
http://youtube-updater:5000/trigger-update
```

### `Connection refused`

表示 `youtube-updater` 沒有啟動，或 n8n workflow 還在打舊 URL：

```text
http://host.docker.internal:5000/trigger-update
```

目前正確 URL 是：

```text
http://youtube-updater:5000/trigger-update
```

### YouTube 播放清單找不到

通常是播放清單是私人、已刪除，或 API key 無法讀取。請確認 `config.json` 內的 playlist 是公開或不公開但可讀取。
