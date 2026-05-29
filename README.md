# 🎬 AI YouTube 影片收藏

> 用 AI 解決「**收藏了 100+ 支 AI 影片，但根本沒時間看**」的循環矛盾。

🌐 **線上版**：[ai-youtube-collection.vercel.app](https://ai-youtube-collection.vercel.app/)

---

## 💡 為什麼做這個

我在 YouTube 收藏了上百支 AI 教學影片，分散在 13 個播放清單裡。每天工作下班後想學習，打開列表卻不知道該從哪一支開始 —— 這支講 RAG 是入門還是進階？這支講公司案例還是純概念？哪支真的有 code？哪支只是「AI 改變世界」的雜談？

最後的結果通常是：滑了 10 分鐘清單後乾脆滑 Threads。

**這個專案是我的解法 — 用 AI 來幫我「整理 AI 影片」，把不可控的學習負擔，變成一個可篩選、可排序、可量化的個人知識庫。**

對我來說它有兩層意義：
1. **實用性**：解決真實困擾，每天看影片前能快速判斷「這支值不值得花 30 分鐘」
2. **練習性**：作為從石化產業轉 AI 工程的第一個 end-to-end 專案，把 LLM API、Prompt Engineering、靜態前端、CI/CD 都串起來

---

## ✨ 它做什麼

打開網站，每支影片你會看到：

```
[縮圖 + 時長]
[📚 實戰教學] [🔧 落地 8/10] [💻 有 code] [🏢 公司案例]

【影片標題】
頻道 · 上架日期

3-5 句繁中摘要，告訴你影片實際做了什麼、用了什麼技術、得到什麼結論。
不是「探討 RAG 的概念」這種空話，而是「示範用 LangChain + Pinecone 建 RAG，並比較 BM25 vs vector」。

[RAG] [LangChain] [Vector DB] [+2 個技術 tag]

💰 ⚡ 🛡 📊 🔥   ← 5 個生產考量面向：影片有明確討論的會亮起來

[👁 看過] [ⓘ 詳細] [📝 筆記] [🧠 NotebookLM]
```

**主要功能**：
- 🎯 **落地度評分 (0-10)** — 純概念分享 vs 完全照做能複製
- 🏷 **內容類型分類** — 公司案例 / 實戰教學 / 工具展示 / 理論講解 / 新聞 / 討論
- ⚙️ **生產考量檢查** — 影片是否討論成本、延遲、可靠性、評估方法、失敗案例
- 🔍 **跨欄位搜尋** — 搜得到摘要內容和技術 tag
- 📊 **三層篩選** — 資料夾 + 內容類型 + 看過/未看
- 💾 **本機看過/筆記** — localStorage 持久化

---

## 🏗 系統架構

```
                ┌─────────────────────────┐
                │  YouTube 我的播放清單     │
                └────────────┬────────────┘
                             │
                  ┌──────────▼──────────┐
                  │ discover_playlists  │  YouTube Data API v3
                  │     (一次性)         │  自動列出所有公開清單
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │  fetch_playlists    │  抓 metadata (title, channel,
                  │  (每次新增影片時)    │  duration, thumbnail, ...)
                  └──────────┬──────────┘
                             │
                             ▼
                       videos_raw.json
                             │
                  ┌──────────▼──────────┐
                  │     summarize       │  Gemini 2.5 Flash
                  │ (新影片才需要打)     │  直接吃 YouTube URL
                  └──────────┬──────────┘  產出結構化 JSON
                             │
                             ▼
                        videos.js
                             │
                  ┌──────────▼──────────┐
                  │  preview.html       │  React + Tailwind
                  │  毛玻璃卡片牆 UI     │  (單檔，透過 CDN 載入依賴)
                  └──────────┬──────────┘
                             │
                  ┌──────────▼──────────┐
                  │  GitHub → Vercel    │  自動部署
                  └─────────────────────┘
```

---

## 🛠 技術棧

| 層次 | 工具 | 為什麼選它 |
|---|---|---|
| 資料來源 | **YouTube Data API v3** | 公開、免費、配額充足 |
| AI 摘要 | **Gemini 2.5 Flash** | **直接吃 YouTube URL**（不用抓字幕、無字幕影片也能處理）成本只要 ~$0.03/支 |
| 後端腳本 | **Python** + `requests` + `google-genai` | 簡單到 ~150 行就完成 fetch+summarize 管線 |
| 前端 | **React + Tailwind** (單一 HTML，CDN 載入) | 沒有 build step，真正零摩擦 |
| 部署 | **Vercel** | Git push 自動部署，免費 tier 完全夠用 |
| 狀態保存 | **localStorage** | 個人專案不用後端 |

---

## 💰 成本透明

| 項目 | 用量 | 成本 |
|---|---|---|
| YouTube Data API | ~50 units 抓 49 支影片 metadata | $0（每天 10K 免費 quota）|
| Gemini 2.5 Flash | 47 支影片摘要（平均 25 分鐘長）| **~$1.27 美金** |
| Vercel 部署 | 免費 hobby tier | $0 |
| **總計** | | **約 $1.27** |

之後新增影片邊際成本約 $0.02-0.05/支。

---

## 🎓 我學到的事

1. **Prompt 設計要保守**  
   第一版 prompt 給 Gemini 太多自由，產出「production_signals 5/5 全 true」這種明顯虛灌的結果。第二版加上嚴格規則（**「必須影片明確花 30 秒以上專門討論才算 true」**、各 content_type 的分數上限）後，輸出立刻穩定。**LLM 的「客觀」需要被工程化**。

2. **Schema 先行，UI 後設計**  
   花了一個下午先把 `videos.json` 的 schema 想清楚才動手做 UI。事後證明所有 UI 元素都對應到一個確切欄位，沒有 hardcoded 的東西。對應到後端設計：**資料模型穩定，前端才能輕**。

3. **Gemini 直接吃 URL 是 game changer**  
   原本以為要先抓字幕、處理沒字幕的 fallback、跑 OCR…。改用 Gemini 後，整個 Phase 3 從「3 天工程」變成「150 行腳本」。**選對工具能讓複雜度消失**。

4. **配額限制要在 prompt 之前規劃**  
   免費 tier 的 RPM/TPM 限制比想像中嚴。第一次跑 5 支試跑模式時，2 支就把當日 quota 用光。後來付費 tier 才順利跑完，但花費也才 $1.27。**對正式專案，付費 tier 幾乎都比省那點錢值得**。

5. **斷點續傳是必要設計**  
   `summarize.py` 每處理完一支就寫檔，因此中途網路斷、quota 爆、Ctrl+C 都不會掉資料。再跑時自動從沒摘要的那支接續。**對長時間任務，「失敗能重來」比「不會失敗」重要**。

---

## 🚀 自己跑一份

### 前置

- Python 3.10+
- [YouTube Data API v3 Key](https://console.cloud.google.com/)
- [Gemini API Key](https://aistudio.google.com/app/apikey)（免費 tier 也能跑，慢一點）

### 步驟

```bash
# 1. clone
git clone https://github.com/<your-username>/ai-youtube-collection.git
cd ai-youtube-collection

# 2. 裝套件
pip install -r requirements.txt

# 3. 設定環境變數
cp .env.example .env
# 編輯 .env 填入兩把 API Key

# 4. 自動列出你頻道的所有公開清單
python scripts/discover_playlists.py @YourChannelHandle

# 5. 抓影片 metadata
python scripts/fetch_playlists.py

# 6. AI 摘要（先試跑 5 支看看品質）
python scripts/summarize.py --limit 5

# 7. 確認 OK 後跑完整批次
python scripts/summarize.py

# 8. 開瀏覽器看
# 直接雙擊 preview.html 即可
```

部署到 Vercel：把整個 repo push 上 GitHub → 在 Vercel 選 Import → 設定 root directory，完成。

---

## 📁 專案結構

```
ai-youtube-collection/
├── scripts/
│   ├── discover_playlists.py    # 自動列出頻道所有公開播放清單
│   ├── fetch_playlists.py       # 抓影片 metadata
│   ├── summarize.py             # Gemini AI 摘要
│   └── fetch_playlists_mock.py  # 測試用假資料
├── data/
│   ├── videos_raw.json          # 完整資料（含 description）
│   └── videos.js                # 前端用的精簡版
├── preview.html                 # 主介面（單檔 React app）
├── config.json                  # 播放清單列表
├── requirements.txt
├── .env.example
└── README.md
```

---

## 🎯 路線圖

- [x] Phase 0: YouTube 抓取管線
- [x] Phase 1: React + Tailwind 卡片牆 UI
- [x] Phase 1.5: GitHub + Vercel 部署
- [x] Phase 3: Gemini AI 摘要 + 落地度評分
- [ ] Phase 2: n8n 自動同步（每週掃描 + 自動更新）
- [ ] Phase 4: 影片 embedding + 語意搜尋（"我想找 RAG eval 相關的"）
- [ ] Phase 5: 跨裝置筆記同步（Supabase）

---

## 👤 關於作者

**Heary Lin** ([@HearyLin](https://www.youtube.com/@HearyLin))

從石化產業跨到 AI 工程的學習者。這個專案是我學習過程的副產品 —— 既解決自己的痛點，也是把學到的 LLM API、Prompt Engineering、靜態前端串起來的試煉場。

---

## 📜 License

MIT — 歡迎拿去改成你自己的版本。
