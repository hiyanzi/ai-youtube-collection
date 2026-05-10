// Auto-generated — do not edit manually
window.VIDEOS_DATA = {
  "generated_at": "2026-05-10T09:49:49",
  "total": 49,
  "available": 48,
  "unavailable": 1,
  "videos": [
    {
      "id": "OYv5wY1qbFs",
      "url": "https://www.youtube.com/watch?v=OYv5wY1qbFs",
      "thumbnail": "https://img.youtube.com/vi/OYv5wY1qbFs/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/OYv5wY1qbFs/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Tokenization",
        "Latent Space",
        "LLM Architecture",
        "Mechanistic Interpretability",
        "Chain of Thought",
        "Sparse Autoencoder"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片深入探討大型語言模型 (LLM) 如何在離散的 Token 空間與連續的 Latent 空間之間進行運作，強調 Tokenization 對模型內部表徵與行為的關鍵影響。影片比較了 Token-based 推理與 Latent-based 推理的優缺點，並預測未來 LLM 架構將朝向結合兩者優勢的混合模式發展。",
      "key_points": [
        "LLM 的核心運作機制是「Token -> Latent -> Token」的轉換與處理系統。",
        "Tokenization 方式（如分詞粒度）會顯著影響 LLM 內部對語義的理解及模型表現。",
        "Latent Space 並非神秘空間，而是模型內部用於表示多種壓縮信息的連續向量空間。",
        "Latent Reasoning 透過在隱藏狀態中保留中間推理，相較於傳統 Chain of Thought，能更有效率地探索多個推理路徑。",
        "未來 LLM 架構將是 Token 與 Latent 空間的混合體，兩者將分工合作而非互相取代。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "大模型到底是怎么思考的？是在读文字，还是在算向量？一期讲透 Token Space 和 Latent Space",
      "channel": "唐国梁Tommy",
      "channelUrl": "https://www.youtube.com/channel/UCVezb06mOvkXDwB8ibaOlYQ",
      "duration": "20:42",
      "durationSeconds": 1242,
      "publishedAt": "2026-05-05",
      "description": "大模型到底是怎么“思考”的？\n\n很多人都听过一句话：LLM 的本质是“预测下一个 token”。  \n但问题是：模型真的只是在处理文字吗？它是在读 token，还是在隐藏空间里计算向量？所谓的 latent space，是否意味着模型拥有某种“不可见的思考过程”？\n\n本期视频我们将系统拆解大语言模型从输入到输出的完整底层路径：\n\n文本 → Token → Embedding → Hidden State → Logits → 下一个 Token\n\n你将理解：\n\n- Token 与 Latent Space 到底是什么，二者如何分工\n- Tokenizer 如何改变模型“看到的世界”\n- 中文分词、leading space、数字切分为什么会影响模型表现\n- Embedding、Attention、MLP、Residual Stream、KV Cache 分别在什么位置发挥作用\n- SAE 稀疏自编码器、Superposition 与机制可解释性研究在解决什么问题\n- Coconut、Soft Thinking 等 Latent Reasoning 方法，如何让模型在隐藏状态中进行推理\n",
      "status": "available"
    },
    {
      "id": "eKW9ITaltWw",
      "url": "https://www.youtube.com/watch?v=eKW9ITaltWw",
      "thumbnail": "https://img.youtube.com/vi/eKW9ITaltWw/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/eKW9ITaltWw/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "LLM",
        "Prompt Engineering",
        "Fine-tuning",
        "RAG",
        "Agentic Workflow",
        "AI System Evaluation"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片總結史丹佛大學「超越大型語言模型」課程，詳述基礎大型語言模型（LLM）的限制，並介紹強化其能力的工程技術。內容涵蓋提示詞工程（包含鏈式提示）、微調（及其適用情境）、檢索增強生成（RAG）的流程與痛點。此外，影片也探討了代理工作流（Agentic Workflow）的系統設計思維，並提出多維度的評估框架（如端到端、基於組件、客觀、主觀、量化、質化）及LLM作為評審的方法，最後簡述多代理系統的平行處理與可重用性優勢。",
      "key_points": [
        "基礎大型語言模型存在固有限制（如缺乏領域知識、資訊落後、難以控制、長上下文遺失），不適合直接用於生產環境。",
        "提示詞工程（包含鏈式提示）、微調（針對特定高精度領域）和檢索增強生成（RAG，利用向量資料庫）是增強大型語言模型能力的關鍵技術。",
        "代理工作流（Agentic Workflow）強調將複雜任務拆解為小任務，透過結構化提示詞、上下文管理（記憶體、RAG）和外部工具整合，實現更複雜的AI系統設計。",
        "AI系統的評估需採用多維度框架（如端到端與基於組件、客觀與主觀、量化與質化），並可利用LLM作為評審（LLM-as-Judge）來處理主觀性評分。",
        "多代理系統（Multi-Agent）透過平行處理和代理間的協作（Model Context Protocol），能有效提升處理速度和可重用性，適用於需要多步驟、多工具協調的複雜任務。"
      ],
      "content_type": "tutorial",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 6,
      "abstraction_level": "conceptual",
      "title": "一部影片看完 Stanford AI 系統課程，從 LLM 到 Agentic Workflow",
      "channel": "Gary Chen",
      "channelUrl": "https://www.youtube.com/channel/UC9C3t-3ocL0LiwGRD0gBJ8A",
      "duration": "27:24",
      "durationSeconds": 1644,
      "publishedAt": "2026-05-04",
      "description": "加入我的 Patreon，查看完整文章還有提示詞模板：https://www.patreon.com/posts/157335306\n--\n史丹佛兩小時的「Beyond LLM」課程，我用一支影片把核心整理給你。從 base model 的限制講起，一路到 Prompt Engineering、Fine-Tuning、RAG、Agentic Workflow 與 Multi-Agent，把 AI Builder 該懂的技術地圖一次攤開。看完你會知道每個技術解什麼痛點、什麼時候該用，下一步該往哪走。\n\n📌 時間戳\n0:00 開場：AI Builder 學習困境\n0:50 LLM 的限制與縱軸思維\n3:30 強化單一 LLM 的三大工具\n11:40 Agentic Workflow 系統設計\n17:30 評估系統與客服 Agent 實作\n22:15 Multi-Agent 與學習路線總結\n\n📢 追蹤我的頻道\n👍 覺得有幫助請按讚、訂閱、開小鈴鐺！\n\n史丹佛課程原始影片：https://youtu.be/k1njvbBmfsw?si=qhDgQ-W_CrDE1k0H\n\n#AI #AIBuil",
      "status": "available"
    },
    {
      "id": "dlnqJIgsiAg",
      "url": "https://www.youtube.com/watch?v=dlnqJIgsiAg",
      "thumbnail": "https://img.youtube.com/vi/dlnqJIgsiAg/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/dlnqJIgsiAg/maxresdefault.jpg",
      "primaryFolder": "LLM wiki",
      "allFolders": [
        "LLM wiki"
      ],
      "tags": [
        "Personal Knowledge Management",
        "LLM",
        "RAG",
        "Obsidian",
        "Claude Code",
        "Prompt Engineering"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片展示如何利用 Obsidian 搭配 Claude Code 實作 Andrej Karpathy 提出的四層知識庫架構，包含 raw、wiki、index 和 log 資料夾。透過將 YouTube 影片逐字稿等內容 ingest 進知識庫，AI 能建立關聯性網絡，進而實現更精準的資訊檢索，並聲稱可節省 95% 的 token 用量。影片詳細示範了 Obsidian 的設定、Claude Code 的指令操作，並比較了此方法與傳統 RAG 的差異。",
      "key_points": [
        "利用 Obsidian 實作 Karpathy 的四層知識庫架構 (raw, wiki, index, log)。",
        "透過 Claude Code 搭配特定 CLAUDE.md 指令，自動化知識庫的建立與內容整合。",
        "LLM Wiki 模式透過建立知識網絡和頁面連結，相較於傳統 RAG 查找片段，能更精準地檢索資訊並節省 95% 的 token 用量。",
        "強調將知識庫按主題劃分為獨立的 Vaults，以提高 AI 查詢的準確性並降低 token 成本。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Claude Code + Obsidian 個人知識庫，token 用量直接節省 95%",
      "channel": "JayLuxAI | AI 自動化",
      "channelUrl": "https://www.youtube.com/channel/UCKxp_qMkhBTVftkhTwKJFvw",
      "duration": "14:06",
      "durationSeconds": 846,
      "publishedAt": "2026-05-03",
      "description": "你有沒有這種感覺, 跟 AI 聊了一小時，隔天開新對話，它什麼都不記得了。\n\nAndrej Karpathy 提出了一個解法：不需要 RAG，不需要 vector database，就只是一個資料夾，讓 Claude Code 幫你自動整理成可查詢的 AI 知識庫。\n\n在這支影片裡，你會學到：\n• Karpathy LLM Wiki 的完整架構：raw / wiki / index / log 四層設計\n• LLM Wiki Prompt 怎麼運作——它不是一個 prompt，是一份給 AI 的工作說明書\n• Ingest 是什麼意思，以及它如何讓知識庫每次都長大一張網\n• 五個你可以馬上開始建的知識庫（YouTube 逐字稿、會議記錄、AI 工具研究等）\n• LLM Wiki vs RAG：什麼情況下用哪個\n• 用 CLAUDE.md 把知識庫接進任何 Claude Code 專案\n• 為什麼一個主題要建一個獨立 vault，而不是全部混在一起\n\n如果你正在：\n• 用 Claude Code 處理日常工作或內容創作\n• 想讓 AI 真正「記住」你的知識和脈絡\n• 或想把學習筆記、研究",
      "status": "available"
    },
    {
      "id": "1xm4IhcVWqc",
      "url": "https://www.youtube.com/watch?v=1xm4IhcVWqc",
      "thumbnail": "https://img.youtube.com/vi/1xm4IhcVWqc/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/1xm4IhcVWqc/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "LLM",
        "AI Coding Assistants",
        "Prompt Engineering",
        "Software Engineering Principles",
        "Open Source Project",
        "Code Generation"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片介紹了一個名為「andrej-karpathy-skills」的開源專案，該專案提供一份僅 65 行的 Markdown 指南（CLAUDE.md），旨在改善 Claude 等 AI 編碼助手的行為。這份指南源於 Andrej Karpathy 對 LLM 編碼助手的痛點觀察，並提煉出「編碼前思考」、「簡潔優先」、「精準修改」和「目標驅動執行」四項核心原則，以提升 AI 生成程式碼的品質與可靠性。",
      "key_points": [
        "Andrej Karpathy 觀察到 LLM 編碼助手常有猜測需求、程式碼冗長、修改不精準等問題。",
        "「andrej-karpathy-skills」專案提供一份 65 行的 CLAUDE.md 文件，作為改善 AI 編碼行為的指南。",
        "指南包含四大原則：編碼前需思考、優先追求簡潔、修改應精準、以及以可驗證的目標驅動執行。",
        "使用者可透過複製 CLAUDE.md 文件至專案根目錄或安裝插件，將這些原則應用於 Claude Code。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 7,
      "abstraction_level": "mixed",
      "title": "Claude Code必装这个skill，Github超10万人Star，非常火～ #claudecode #github #chatgpt #vibecoding",
      "channel": "我是阿众",
      "channelUrl": "https://www.youtube.com/channel/UC4GFL56UB1AmyCEvzqpvSAw",
      "duration": "1:01",
      "durationSeconds": 61,
      "publishedAt": "2026-05-03",
      "description": "这是一个可以让你的Claude Code，变得更好用的开源项目，它的名字叫做andrej-karpathy-skills，短短一个月就涨到了10万 Star，但离谱的是，这个项目里只有一个65行markdown文档，为什么这么短的内容却有这么大的影响力呢？",
      "status": "available"
    },
    {
      "id": "T_GuZBHJ2mc",
      "url": "https://www.youtube.com/watch?v=T_GuZBHJ2mc",
      "thumbnail": "https://img.youtube.com/vi/T_GuZBHJ2mc/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/T_GuZBHJ2mc/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Harness Engineering",
        "AI Agent",
        "Large Language Model (LLM)",
        "Prompt Engineering",
        "System Design",
        "Replit"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片深入解析「Harness Engineering」概念，將大型語言模型（LLM）比喻為無手腳的大腦，而 Harness 則是賦予其記憶、工具使用、規劃執行與評估能力的「身體」。影片詳細介紹了 Harness 的四大核心功能，並透過在 Replit 平台上實際建構一個 PR Code Review Agent 的過程，展示如何整合記憶模組、GitHub API 工具、規劃迴圈及評估機制，讓 AI Agent 能自動執行程式碼審查任務。",
      "key_points": [
        "Harness Engineering 旨在為 LLM 建立外部工程系統，使其從單純對話的 AI 轉變為能實際執行任務的 AI Agent。",
        "Harness 的四大核心功能包括：管理 LLM 的長期記憶、提供外部工具（如 API 呼叫、檔案讀寫）、建立任務規劃與執行迴圈，以及實施自動化評估機制。",
        "影片比較了兩種 AI Agent 架構：OpenClaw 的 Gateway-First (廣泛連接外部世界) 和 Hermes Agent 的 Agent-First (深度內部記憶與學習迴圈)。",
        "透過 Replit 平台，影片實作了一個 PR Code Review Agent，展示如何整合記憶、工具 (GitHub API)、規劃與評估模組，以自動化程式碼審查流程。",
        "Harness Engineering 領域仍處早期，需要結合系統設計、LLM 特性理解、分散式系統和評估方法論的工程師。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 7,
      "abstraction_level": "mixed",
      "title": "矽谷最近瘋談的新詞，到底是什麼？AI下一個高薪職缺是它？只知道Prompt Engineering就落伍了！｜Kelly Tsai",
      "channel": "Kelly Tsai",
      "channelUrl": "https://www.youtube.com/channel/UCfbMslS3NmcGO4WIikSoYSA",
      "duration": "22:46",
      "durationSeconds": 1366,
      "publishedAt": "2026-05-01",
      "description": "用這個連結訂閱Replit Core就能獲得$10美金的credit喔！https://replit.com/refer/kellytsaii\n\n====================================================\n\n更多連結整理在這裡～👇🏻\n\n🌟 幣安Binance交易所：https://www.binance.com/join?ref=KELLYTSAI\n\n🌟 OKX交易所：https://okx.com/join/KELLYTSAI\n\n🌟 Bitget交易所：https://partner.bitget.com/bg/D04EVG\n\n🌟 派網Pionex交易所：https://partner.pionex.com/p/kelly\n\n🌟 Nexo數位資產平台：https://nexo.sjv.io/k4azm3\n\n🌟 Mitrade交易平台：https://mytd.cc/qZf8\n\n🌟 eToro交易平台：https://www.etoro.com/zh-tw/accounts/sign-up?utm_medium=Affiliate&utm_",
      "status": "available"
    },
    {
      "id": "g1Y7Rrz7u4k",
      "url": "https://www.youtube.com/watch?v=g1Y7Rrz7u4k",
      "thumbnail": "https://img.youtube.com/vi/g1Y7Rrz7u4k/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/g1Y7Rrz7u4k/maxresdefault.jpg",
      "primaryFolder": "LLM wiki",
      "allFolders": [
        "LLM wiki"
      ],
      "tags": [
        "LLM Wiki",
        "RAG",
        "知識工程",
        "Agent",
        "知識圖譜",
        "Incremental Compilation"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片深入剖析 Karpathy 提出的「LLM Wiki」概念，將其定位為一種知識工程系統，旨在解決傳統 RAG 應用中知識無法沉澱、筆記維護成本高昂及重複發現等問題。影片詳細闡述了 LLM Wiki 的三層架構（原始資料、派生知識、行為約束）及運行控制面，並介紹了 Ingest Pipeline 的八個步驟與 Query、Save、Lint、Research 四大核心動作。同時，影片也探討了幻覺寫回閉環、確認偏差等風險，並提出透過人為審核來確保高風險聲明的可靠性，強調維護成本並非消失而是轉移，且 LLM Wiki 更適合長期沉澱與重複利用的知識場景。",
      "key_points": [
        "LLM Wiki 是一種以開放文件為載體、Schema 為約束、增量編譯為機制的知識工程系統，旨在將知識資產化。",
        "其核心思想是將 RAG 的「綜合」步驟前移至「攝取」階段，將一次性查詢時合成轉變為攝取時編譯，以實現知識的長期沉澱與重複利用。",
        "LLM Wiki 採用三層架構（原始資料、派生知識、Schema）及運行控制面，並定義了 Query、Save、Lint、Research 四大核心動作，以確保知識的結構化、可維護性與可追溯性。",
        "影片揭示了幻覺寫回閉環的風險，即 LLM 可能將幻覺內容寫入 Wiki 並自我強化，導致錯誤傳播。",
        "強調 RAG、GraphRAG 與 LLM Wiki 並非互斥，而是疊加關係，應根據查詢類型選擇對應的檢索管線（Adaptive RAG）。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "LLM Wiki 深度解析：从 RAG、GraphRAG 到大模型知识运行时",
      "channel": "唐国梁Tommy",
      "channelUrl": "https://www.youtube.com/channel/UCVezb06mOvkXDwB8ibaOlYQ",
      "duration": "20:26",
      "durationSeconds": 1226,
      "publishedAt": "2026-04-30",
      "description": "这期视频我们系统解析一个非常值得关注的新范式：LLM Wiki。\n\n很多人以为 LLM Wiki 只是 RAG 的一个新变种，但它真正重要的地方在于：它把知识综合从“查询阶段”前移到了“摄取阶段”，让每一次 ingest、query、research 都变成对长期知识资产的增量投资。\n\n本期你将系统理解：\n\n1. LLM Wiki 到底是什么，为什么它不是简单的 RAG 变种\n2. LLM Wiki 与 RAG、GraphRAG、AI 笔记系统的区别\n3. Raw Sources、Wiki、Schema 三层架构如何构成知识运行时\n4. Ingest、Query、Save、Lint、Research 如何形成完整工作流\n5. 为什么 Confidence、Supersession、Review Queue 是长期知识库治理的关键\n6. LLM Wiki 最大的风险：幻觉回写与错误自我强化\n7. 哪些场景适合使用 LLM Wiki，哪些场景并不适合\n\n如果你正在学习大模型应用、RAG、Agentic RAG、AI Agent、多模态、知识图谱或 AI 知识管理，这期内容可以帮助你从更高层",
      "status": "available"
    },
    {
      "id": "H9vzXHffQ8U",
      "url": "https://www.youtube.com/watch?v=H9vzXHffQ8U",
      "thumbnail": "https://img.youtube.com/vi/H9vzXHffQ8U/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/H9vzXHffQ8U/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "Claude Code CLI",
        "Large Language Models (LLM)",
        "Context Management",
        "AI Model Selection",
        "Terminal Commands",
        "Keyboard Shortcuts"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片為 Claude Code CLI 的操作教學，詳細介紹了 6 個核心指令與 8 個快捷鍵。內容涵蓋如何啟動 CLI、管理對話歷史（如清除、回溯、恢復）、切換 AI 模型及其思考努力程度，以及壓縮上下文以維持模型表現。影片透過實際操作示範，幫助使用者掌握與 Claude Code 終端機無縫協作的基本技巧。",
      "key_points": [
        "介紹並實作 Claude Code CLI 的 6 個核心指令：/clear, /resume, /rewind, /model, /compact, /config。",
        "示範 8 個終端機快捷鍵，提升與 Claude Code 互動的效率，例如換行、刪除、中斷及退出。",
        "說明如何切換 Claude AI 模型（Opus, Sonnet, Haiku）及調整其「思考努力程度」，影響回應品質與成本。",
        "展示 /compact 指令如何壓縮對話上下文，以維持模型在長對話中的回答品質並釋放 token 空間。",
        "透過 /config 指令檢視帳戶狀態、使用量統計，並調整 CLI 介面風格與溝通語言。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "你還在 Claude Code 慢慢打指令？這 6 個快捷鍵讓操作快 3 倍",
      "channel": "AgentCrew Academy",
      "channelUrl": "https://www.youtube.com/channel/UCAQFESUI6Mgt6V0hmw4LuSw",
      "duration": "11:58",
      "durationSeconds": 718,
      "publishedAt": "2026-04-30",
      "description": "你還在 Claude Code 裡慢慢打每個指令嗎？這集整理 6 個最常用 slash 指令與 8 個鍵盤快捷鍵，讓你的操作速度快 3 倍。從啟動、清除上下文、多行輸入到中斷繼續，每個動作都有示範。\n\n關鍵字：Claude Code 快捷鍵 CLI 指令 slash command 鍵盤快捷鍵 操作技巧\n\n章節\n0:00 六大指令與快捷鍵簡介\n1:57 終端機基本操作與啟動\n4:12 實用快捷鍵操作示範\n6:48 上下文管理與對話切換\n8:58 模型選擇與思考預算設定\n10:31 系統設定與使用量檢視\n\n裝好 Claude Code CLI 之後，下一步怎麼開始用？\n\n這集整理 CLI 版本最常用的基本指令與鍵盤快捷鍵：\n• 啟動與退出 Claude Code\n• 常用 slash 指令（/clear、/compact、/help）\n• 多行輸入技巧\n• 任務中斷與繼續的操作方式\n\n跟著操作，從零開始到能真正執行任務。\n\n▶ 還沒安裝？先看安裝教學：https://www.agentcrew.cc/l0\n\n#ClaudeCode #ClaudeCodeCLI #終端機 #AI工具\n--",
      "status": "available"
    },
    {
      "id": "cD0KgSDfRWI",
      "url": "https://www.youtube.com/watch?v=cD0KgSDfRWI",
      "thumbnail": "https://img.youtube.com/vi/cD0KgSDfRWI/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/cD0KgSDfRWI/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "AI Agent",
        "Prompt Engineering",
        "Function Calling",
        "ReAct",
        "Memory Management",
        "Tool Management"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片提供從零開始建構 AI Agent 框架的實作教學，不依賴現有框架。內容涵蓋工具管理（包含本地函數與遠端 MCP 服務的整合）、多輪對話的記憶體管理，以及基於 ReAct 機制的推理決策迴圈。講者詳細展示如何將 Python 函數的 docstring 自動轉換為 LLM 可理解的 JSON Schema，並透過程式碼實作了天氣查詢與新聞搜尋等工具調用功能。",
      "key_points": [
        "從零手寫 Python 程式碼建構 AI Agent 核心組件，不使用 LangChain 等框架。",
        "實現工具管理，將本地函數與遠端 MCP 服務（如阿里雲天氣 API）統一為可供 LLM 調用的工具。",
        "利用函數的 docstring 自動生成 JSON Schema，引導 LLM 進行工具選擇與參數提取。",
        "設計 ReAct 推理與記憶系統，使 Agent 能夠進行多輪對話並根據需求調用工具。",
        "探討 Prompt Engineering 的脆弱性、擴展性、用戶負擔及無狀態性等局限，並透過 Context Engineering 解決部分問題。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "手撸agent智能体【从零手撸 Agent 框架】多智能体agent + MCP+A2A +ReAct方法全套代码实战！ai agent智能体开发！#人工智能 #agent #ai 卢菁博士",
      "channel": "Dr.LuAIclass 卢菁 北大博士后 AI 专家",
      "channelUrl": "https://www.youtube.com/channel/UCn90m41gSBZcpdCcMdvd4FA",
      "duration": "31:39",
      "durationSeconds": 1899,
      "publishedAt": "2026-04-30",
      "description": "添加微信: AITalkandClass，免费领取课程相关资料，速通人工智能，零基础转型AI。\n卢菁博士，北京大学博士后。 12年人工智能领域的一线开发经验，实战经验丰富。曾担任腾讯技术专家及AI带头人，负责千万级日活推荐系统研发。\n课程亮点：\n 速通精学人工智能与机器学习，深入底层逻辑，沿着技术脉络系统学习\n 实战项目讲解：从企业真实项目需求出发，有极高实用价值\n 课程内容囊括90%AI岗位需求：自然语言处理，推荐系统，计算机视觉，深度学习",
      "status": "available"
    },
    {
      "id": "zUnWZMiOVBs",
      "url": "https://www.youtube.com/watch?v=zUnWZMiOVBs",
      "thumbnail": "https://img.youtube.com/vi/zUnWZMiOVBs/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/zUnWZMiOVBs/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "AI Agent",
        "Code Generation",
        "Prompt Engineering",
        "Workflow Automation",
        "LLM Plugins",
        "Software Development Methodology"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片介紹了開源的 Superpowers 外掛，它為 Claude Code 引入了「釐清、設計、規劃、編碼、驗證」的開發流程。影片透過將 YouTube 影片轉換為簡報的實作案例，展示了 Superpowers 如何引導 Claude Code 提問澄清需求、整合品牌規範，並最終生成高品質的程式碼。實驗結果顯示，對於中等至複雜任務，Superpowers 能節省 14% 的 Token 用量並全面提升程式碼品質，而簡單任務則建議直接下指令。",
      "key_points": [
        "Superpowers 外掛為 Claude Code 導入了結構化的開發流程，包含需求釐清、設計、規劃、編碼與驗證。",
        "透過引導 Claude Code 提問並確認方向，Superpowers 能顯著降低中等至複雜任務的 Token 用量達 14%，並提升程式碼品質與穩定性。",
        "外掛具備 Brainstorming (提問澄清) 和 Executing Plans (分步執行與檢查點) 等核心技能，能有效減少重複嘗試與資源浪費。",
        "影片提供了詳細的安裝教學和實際操作示範，展示了如何利用 Superpowers 根據 YouTube 影片內容和個人品牌規範自動生成簡報。",
        "針對不同複雜度的任務，影片明確建議了何時啟用或跳過 Superpowers 外掛，以達到最佳效率和成本效益。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Claude Code + 這個免費 Plugin = 效能直接提升10 倍",
      "channel": "JayLuxAI | AI 自動化",
      "channelUrl": "https://www.youtube.com/channel/UCKxp_qMkhBTVftkhTwKJFvw",
      "duration": "10:56",
      "durationSeconds": 656,
      "publishedAt": "2026-04-26",
      "description": "你給 Claude Code 一個任務，它馬上動手，跑完才發現方向整個錯掉——然後你開始 retry，tokens 就這樣一直燒。\n\n這個問題不是 Claude 不夠強，是它沒有先問清楚。\n\n在這支影片裡，你會學到：\n• Superpowers plugin 是什麼、它怎麼改變 Claude Code 的工作方式\n• 14 個 skills 裡你最常用到的 3 個\n• Brainstorming skill 如何在 localhost 呈現設計選項，讓你確認方向再燒 tokens\n• 一行指令安裝，為什麼要裝在 user level\n• 我跑的 12 次實驗：開 Superpowers vs 不開，token 用量和程式碼品質對比\n• 什麼類型的任務值得開，什麼時候直接跳過\n\n實作部分，我會示範 brainstorming dashboard 實際長什麼樣子，以及它如何問出你腦袋裡沒說清楚的需求。\n\n如果你正在：\n• 用 Claude Code 做複雜的 automation 或開發任務\n• 常常需要 retry 才能得到你要的結果\n• 或想讓 AI 在動手之前先真正搞清楚你要什麼\n\n",
      "status": "available"
    },
    {
      "id": "sIjrti6LIGI",
      "url": "https://www.youtube.com/watch?v=sIjrti6LIGI",
      "thumbnail": "https://img.youtube.com/vi/sIjrti6LIGI/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/sIjrti6LIGI/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "Claude Desktop",
        "大型語言模型 (LLM)",
        "API 整合",
        "OpenRouter.ai",
        "API 金鑰管理",
        "第三方服務"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片示範如何透過 Claude Desktop 整合第三方大型語言模型 (LLM) API，以避免使用 Claude 官方的付費 API。教學內容涵蓋下載安裝 Claude Desktop、啟用開發者模式、從 OpenRouter.ai 平台獲取免費或付費 LLM 的 API 金鑰，並將其配置到 Claude Desktop 中，最終成功與第三方模型進行對話。",
      "key_points": [
        "Claude Desktop 支援透過第三方 API 整合多種大型語言模型。",
        "OpenRouter.ai 平台提供多個 LLM 的 API 服務，包含免費選項。",
        "需在 Claude Desktop 中啟用開發者模式以配置第三方 API 端點與金鑰。",
        "影片詳細展示了從 OpenRouter.ai 獲取 API 金鑰並在 Claude Desktop 中設定的步驟。",
        "成功使用第三方免費模型進行對話，並提及模型過於熱門可能導致 API 請求被拒絕。"
      ],
      "content_type": "tutorial",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 6,
      "abstraction_level": "hands_on",
      "title": "Claude 免费用了！Claude Desktop 对接第三方API，免费用主流 AI 大模型",
      "channel": "X超哥",
      "channelUrl": "https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA",
      "duration": "6:57",
      "durationSeconds": 417,
      "publishedAt": "2026-04-24",
      "description": "【X超哥推特】👉https://x.com/xchaoge\n【X超哥博客】👉https://blog.xgdn.com\n【视频图文教程】👉https://blog.xgdn.com/27.html\n【加入会员】👉https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA/join\n-------------------------------------\nClaude Desktop 对接第三方 API 必备：https://blog.xgdn.com/27.html\n\n一、下载安装 Claude Desktop 软件\n下载地址：https://claude.com/download\n\n\n二、配置ClaudeDesktop\n1. 开启开发者模式：Help → Troubleshooting → Enable Developer Mode\n\n2.配置第三方推理：Developer → Configure third-party inference\n\n3. 配置第三方API接口，免费模型API平台：https://openrouter.",
      "status": "available"
    },
    {
      "id": "LRaYTK_mVGw",
      "url": "https://www.youtube.com/watch?v=LRaYTK_mVGw",
      "thumbnail": "https://img.youtube.com/vi/LRaYTK_mVGw/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/LRaYTK_mVGw/maxresdefault.jpg",
      "primaryFolder": "Hermes Agent",
      "allFolders": [
        "Hermes Agent"
      ],
      "tags": [
        "NVIDIA NIM",
        "API Key Management",
        "Hermes Agent",
        "WSL",
        "Telegram Bot",
        "Large Language Models"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片提供詳細教學，指導使用者如何免費獲取 NVIDIA API Key 並使用長達六個月，接著在 Windows Subsystem for Linux (WSL) 環境下安裝及配置 Hermes Agent。影片中示範如何將 Hermes Agent 與 Telegram 機器人整合，並解決了在模型選擇及 API 連線時可能遇到的超時錯誤，成功切換模型後實現了與 AI 助手的對話。",
      "key_points": [
        "免費獲取 NVIDIA 大模型 API Key (有效期六個月)",
        "在 Windows 環境下安裝及配置 WSL 和 Ubuntu",
        "安裝 Hermes Agent 並進行基本環境設定",
        "將 Hermes Agent 與 Telegram 機器人進行整合",
        "示範 LLM 模型選擇與 API 連線錯誤的排除"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": "NVIDIA",
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "NVIDIA API Key 免费了！白嫖一年英伟达 API 接口，200+ AI 大模型随便用｜Hermes Agent + Telegram 接入",
      "channel": "X超哥",
      "channelUrl": "https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA",
      "duration": "14:31",
      "durationSeconds": 871,
      "publishedAt": "2026-04-21",
      "description": "【X超哥推特】👉https://x.com/xchaoge\n【X超哥博客】👉https://blog.xgdn.com\n【视频图文教程】👉https://blog.xgdn.com/25.html\n【加入会员】👉https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA/join\n-------------------------------------\n零、申请免费Nvidia的API KEY\nNVIDIA API Key 官方申请地址：https://build.nvidia.com\n\n一、安装Windows Terminal\n下载地址：https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN\n\n\n二、安装 WSL\n在 PowerShell(管理员)执行安装WSL命令：\nwsl --install\n\n安装完成后重启电脑，然后安装Ubuntu命令：\nwsl --install -d Ubuntu\n\n打开Windows Terminal，来到ubuntu\n\n\n三、更新",
      "status": "available"
    },
    {
      "id": "k8ZBJSo8aIE",
      "url": "https://www.youtube.com/watch?v=k8ZBJSo8aIE",
      "thumbnail": "https://img.youtube.com/vi/k8ZBJSo8aIE/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/k8ZBJSo8aIE/maxresdefault.jpg",
      "primaryFolder": "Hermes Agent",
      "allFolders": [
        "Hermes Agent"
      ],
      "tags": [
        "Large Language Models (LLM)",
        "Local LLM Deployment",
        "Web UI",
        "WSL",
        "GPU Memory Management",
        "Phishing"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片展示如何在本地端部署「越獄版」Gemma 4 大型語言模型，並透過 Ollama 與 Open WebUI 建立互動介面。教學內容涵蓋 Windows Terminal、WSL、Ubuntu、Python、Node.js 及 Git 的環境建置。影片中實測了越獄版模型生成釣魚網站的 HTML/PHP 程式碼及色情小說，並對比了官方模型的內容過濾限制。",
      "key_points": [
        "詳細教學如何在 Windows 環境下透過 WSL 部署 Ubuntu 及相關開發工具。",
        "示範安裝 Ollama 平台以運行本地大型語言模型。",
        "指導如何下載並部署「越獄版」Gemma 4 模型，並說明不同模型大小對 GPU 顯存的需求。",
        "展示安裝與配置 Open WebUI 作為本地 LLM 的圖形化聊天介面。",
        "實測越獄版 Gemma 4 成功生成釣魚網站程式碼及敏感內容，突顯其內容過濾機制被繞過。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "强到可怕！Gemma 4 越狱版开源大模型，本地部署教程｜免费无限制 · 无需Token",
      "channel": "X超哥",
      "channelUrl": "https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA",
      "duration": "8:52",
      "durationSeconds": 532,
      "publishedAt": "2026-04-17",
      "description": "【X超哥推特】👉https://x.com/xchaoge\n【X超哥博客】👉https://blog.xgdn.com\n【视频图文教程】👉https://blog.xgdn.com/23.html\n【加入会员】👉https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA/join\n-------------------------------------\n一、安装Windows Terminal\n下载地址：https://apps.microsoft.com/detail/9n0dx20hk701?hl=zh-CN&gl=CN\n\n\n二、安装 WSL\n在 PowerShell(管理员)执行安装WSL命令：\nwsl --install\n\n安装完成后重启电脑，然后安装Ubuntu命令：\nwsl --install -d Ubuntu\n\n打开Windows Terminal，来到ubuntu\n\n\n三、更新Ubuntu系统\n更新Ubuntu系统命令：\nsudo apt update\nsudo apt upgrade -y\nsudo apt i",
      "status": "available"
    },
    {
      "id": "0dztupxdseE",
      "url": "https://www.youtube.com/watch?v=0dztupxdseE",
      "thumbnail": "https://img.youtube.com/vi/0dztupxdseE/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/0dztupxdseE/maxresdefault.jpg",
      "primaryFolder": "Hermes Agent",
      "allFolders": [
        "Hermes Agent"
      ],
      "tags": [
        "AI Agent",
        "本地LLM部署",
        "WSL2",
        "Ollama",
        "Gemma 4",
        "微信整合"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片提供了一個手把手教學，展示如何在 Windows 系統上透過 WSL2 部署 Hermes Agent，並整合視覺化 Web UI。它詳細說明了如何使用 Ollama 載入 Google Gemma 4 本地大型語言模型，並將其與 Hermes Agent 連結，最終實現與微信的實際應用整合，讓使用者能透過聊天介面生成程式碼和管理任務。",
      "key_points": [
        "在 Windows 環境下透過 WSL2 部署 Linux 子系統以運行 AI Agent。",
        "使用 Ollama 工具下載並運行 Google Gemma 4 等本地大型語言模型。",
        "安裝並配置 Hermes Agent，使其能與本地 LLM 進行互動。",
        "部署 Hermes Agent 的 Web UI，提供圖形化操作介面，取代傳統命令列。",
        "將 Hermes Agent 整合至微信平台，實現零成本、無需 Token 的本地化 AI 助手。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "太爽了！Hermes Agent 发布UI了，本地对接最强开源 Gemma 4 模型+ 微信（免费无需Token）| 零度解说",
      "channel": "零度解说",
      "channelUrl": "https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w",
      "duration": "13:10",
      "durationSeconds": 790,
      "publishedAt": "2026-04-15",
      "description": "【更多资源】▶https://bittly.cc/lingdu\n【零度博客】▶https://www.freedidi.com\n【加入会员】▶https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w/join\n【高级会员】▶https://bittly.cc/JsLAn\n-------------------------------------\n🔔\n\nHermes Agent 部署 及本地模型下载：https://www.freedidi.com/23749.html\n\n\n🪶🥇🥈🥉🏅🎖️ \n付费咨询 / 一对一（限量开放）：🔗https://ask.tuio.cc\n\n\n🔰 安全VPN推荐（最高优惠链接）：\n\n1.SurfsharkVPN：https://get.surfshark.net/aff_c?offer_id=390&aff_id=4890\n2.ProtonVPN：https://go.getproton.me/aff_c?offer_id=26&aff_id=1905&source=youtube\n3.ExpressVP",
      "status": "available"
    },
    {
      "id": "ZzumjltQg30",
      "url": "https://www.youtube.com/watch?v=ZzumjltQg30",
      "thumbnail": "https://img.youtube.com/vi/ZzumjltQg30/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/ZzumjltQg30/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "AI Agent",
        "大型語言模型 (LLM)",
        "上下文管理",
        "全局記憶",
        "Prompt Engineering",
        "程式碼生成"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片探討了 AI Agent 在處理長對話時，因上下文長度限制導致資訊丟失的問題，並介紹 Claude.md 作為解決方案，提供全局記憶功能。影片引用 ETH Zurich 研究報告指出，若 Claude.md 使用不當，可能反而降低任務成功率並增加 20% 推理成本。講者建議在 Claude.md 中應撰寫具體約束、長期有效的流程資訊，避免寫入通用常識或臨時性任務。影片最後示範了如何使用 `/init` 命令初始化 Claude.md 檔案，以自動生成項目配置、技能和鉤子。",
      "key_points": [
        "大型語言模型存在上下文長度限制，導致對話資訊可能被壓縮或丟失，影響 AI Agent 性能。",
        "Claude.md 作為一種全局記憶文件，旨在為 AI Agent 提供持久且不會被壓縮的上下文資訊。",
        "ETH Zurich 研究報告顯示，不當使用 Claude.md 會降低 AI Agent 任務成功率並增加推理成本。",
        "撰寫 Claude.md 應專注於項目特有的約束、團隊習慣及程式碼本身無法推導的規則，避免寫入通用常識或臨時性任務。",
        "Claude Code 的 `/init` 命令可自動生成包含項目配置、技能 (skills) 和鉤子 (hooks) 的 Claude.md 檔案，以優化 AI Agent 的行為。"
      ],
      "content_type": "discussion",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 3,
      "abstraction_level": "mixed",
      "title": "Claude.md:AI 编程的 “宪法”，如何编写 Claude.md 新手指南",
      "channel": "AI随风",
      "channelUrl": "https://www.youtube.com/channel/UCZw5CQMEVTXaA-5QLf0Mr4Q",
      "duration": "16:30",
      "durationSeconds": 990,
      "publishedAt": "2026-04-15",
      "description": "本视频介绍了 claude.md 的编写指南：\n1、了解 Claude.md\n2、如何编写 Claude.md\n3、使用/init 命令初始化 claude.md\n本视频文档：https://my.feishu.cn/wiki/IQN1wMxixivvaKkqELlc1lmrnec?from=from_copylink\n更多 AI 编程相关的知识、工作流、新手入门课程、实战项目，请加入我的知识星球：https://t.zsxq.com/eUh7z\n\n00:00 研究报告\n01:17 什么是 Claude.md\n04:11 Claude.md 三种影响\n07:08 Claude.md 怎么写\n11:31 /init 命令\n15:10 总结",
      "status": "available"
    },
    {
      "id": "oW6DOhGaVTs",
      "url": "https://www.youtube.com/watch?v=oW6DOhGaVTs",
      "thumbnail": "https://img.youtube.com/vi/oW6DOhGaVTs/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/oW6DOhGaVTs/maxresdefault.jpg",
      "primaryFolder": "Hermes Agent",
      "allFolders": [
        "Hermes Agent"
      ],
      "tags": [
        "LLM Jailbreaking",
        "Gemma 4",
        "Local LLM Deployment",
        "Unsloth Studio",
        "Growth Hacking",
        "AI Ethics"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片比較了 Google 官方 Gemma 4 模型與一個「越獄版」Gemma 4 模型在生成內容上的差異。影片展示了官方模型會拒絕生成惡意程式碼，而越獄版則能提供完整的解決方案，並能生成更具攻擊性的行銷文案和成長駭客策略。此外，影片也提供了在 Windows 環境下使用 Unsloth Studio 本地部署並運行越獄版 Gemma 4 的詳細教學。",
      "key_points": [
        "比較 Google 官方 Gemma 4 與「越獄版」Gemma 4 在內容生成限制上的顯著差異。",
        "越獄版 Gemma 4 能夠生成官方模型拒絕的內容，例如惡意程式碼（1433 端口漏洞掃描工具）和激進的行銷/成長駭客策略。",
        "影片展示了如何使用 Unsloth Studio 在本地環境（如 Windows）安裝並運行越獄版 Gemma 4 模型。",
        "越獄版模型在模擬特定人物（如 Elon Musk）的寫作風格時，能提供更具深度和符合其個人特質的分析與建議。",
        "影片強調越獄版模型在某些「灰色地帶」應用上具有更高的實用性，但伴隨潛在風險。"
      ],
      "content_type": "demo",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 6,
      "abstraction_level": "hands_on",
      "title": "Gemma 4 被越狱了！谷歌最强开源模型，这才是普通人真正需要的本地AI！| 零度解说",
      "channel": "零度解说",
      "channelUrl": "https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w",
      "duration": "8:30",
      "durationSeconds": 510,
      "publishedAt": "2026-04-13",
      "description": "【更多资源】▶https://bittly.cc/lingdu\n【零度博客】▶https://www.freedidi.com\n【加入会员】▶https://www.youtube.com/channel/UCvijahEyGtvMpmMHBu4FS2w/join\n【高级会员】▶https://bittly.cc/JsLAn\n-------------------------------------\n🔔\n\nGemma 4 被越狱：https://www.freedidi.com/23720.html\n\n🪶🥇🥈🥉🏅🎖️ \n付费咨询 / 一对一（限量开放）：🔗https://ask.tuio.cc\n\n🔰 安全VPN推荐（最高优惠链接）：\n\n1.SurfsharkVPN：https://get.surfshark.net/aff_c?offer_id=390&aff_id=4890\n2.ProtonVPN：https://go.getproton.me/aff_c?offer_id=26&aff_id=1905&source=youtube\n3.ExpressVPN：https://go.e",
      "status": "available"
    },
    {
      "id": "rnF-opoNr8w",
      "url": "https://www.youtube.com/watch?v=rnF-opoNr8w",
      "thumbnail": "https://img.youtube.com/vi/rnF-opoNr8w/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/rnF-opoNr8w/maxresdefault.jpg",
      "primaryFolder": "Hermes Agent",
      "allFolders": [
        "Hermes Agent"
      ],
      "tags": [
        "AI Agent",
        "Local LLM",
        "Ollama",
        "WSL",
        "Messaging Integration",
        "Deployment"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片詳細教學如何在 Windows 環境下，透過 WSL 和 Ubuntu 本地部署開源 AI 代理 Hermes Agent。內容涵蓋了安裝 Python、Node.js、Git 等必要環境，並整合 Ollama 平台以運行 Gemma 4 等本地大型語言模型。最終展示了如何將配置好的 Hermes Agent 對接到 Telegram 和微信等通訊平台，實現無需外部 API 的對話式 AI 應用。",
      "key_points": [
        "在 Windows 上使用 WSL 和 Ubuntu 進行本地 AI Agent 部署。",
        "安裝並配置 Ollama 平台以運行 Google Gemma 4 等本地大型語言模型。",
        "詳細示範 Hermes Agent 的安裝與初始化設定流程。",
        "逐步指導如何將 Hermes Agent 與 Telegram 聊天機器人整合。",
        "逐步指導如何將 Hermes Agent 與微信聊天機器人整合。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "太简单了！Hermes Agent 本地部署（无需API）接入 Telegram + 微信",
      "channel": "X超哥",
      "channelUrl": "https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA",
      "duration": "13:39",
      "durationSeconds": 819,
      "publishedAt": "2026-04-13",
      "description": "【X超哥推特】👉https://x.com/xchaoge\n【X超哥博客】👉https://blog.xgdn.com\n【视频图文教程】👉https://blog.xgdn.com/21.html\n\n【请我喝咖啡】👉https://ko-fi.com/xchaoge\n【加入会员支持】👉https://www.youtube.com/channel/UC8W30ksSdTYyV8v5JcYznQA/join\n【超哥电报群】👉https://t.me/xchaoge\n-------------------------------------\n💰比特币交易平台\n1. 币安：https://www.bsmkweb.cc/join?ref=XCHAOGE\n2. 欧易：https://okx.com/join/6764909\n3. 火币：https://www.htx.com/invite/zh-cn/1f?invite_code=3dga9223\n-------------------------------------\n🔰 安全VPN推荐（最高优惠链接）：\nExpressVPN：https:/",
      "status": "available"
    },
    {
      "id": "VO-MBbe-PjI",
      "url": "https://www.youtube.com/watch?v=VO-MBbe-PjI",
      "thumbnail": "https://img.youtube.com/vi/VO-MBbe-PjI/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/VO-MBbe-PjI/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Harness Engineering",
        "AI Agent",
        "Prompt Engineering",
        "Context Engineering",
        "系統設計",
        "多代理人系統"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片深入解析了 AI Agent 應用落地的新範式「Harness Engineering」，闡述其為 AI 時代的系統架構設計核心。影片透過馬匹與馬具的隱喻，解釋 Harness Engineering 如何透過六大核心模組（上下文工程、工具編排、驗證機制、狀態管理、可觀測性、人類接管）提升 AI Agent 的可靠性與持續性。同時，影片也剖析了 Anthropic、OpenAI 及 Google DeepMind 等頂尖公司在實戰中應用這些原則的案例，並探討了概念膨脹、過度工程化、證據局限性及可復用性等風險挑戰。最後，影片提供了實踐建議，指導工程師如何逐步導入 Harness Engineering 的方法論。",
      "key_points": [
        "Harness Engineering 旨在為 AI 模型建構一套邏輯嚴密的運行系統，以解決單純 Prompt Engineering 無法處理的複雜業務問題。",
        "其核心包含六大模組：上下文工程、工具編排、驗證機制、狀態管理、可觀測性與人類接管，強調系統設計而非單純模型調優。",
        "Anthropic 透過雙/三 Agent 架構實現記憶持久化與評估器分離，OpenAI 則利用上下文工程、架構約束及垃圾回收機制提升 Codex Agent 產出。",
        "Harness Engineering 的創新價值在於約束對象的根本變化、約束以提升的效應原則、生成-評估分離模式，以及將程式碼庫視為 Harness 的一部分。",
        "實踐建議包括從建立 Agents.md 檔案開始，逐步導入確定性驗證層與可觀測性系統，並長期規劃模組化設計與平滑遷移。"
      ],
      "content_type": "production_case",
      "has_code": false,
      "has_real_company_case": true,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "mixed",
      "title": "Harness enginerring方法论与落地指南！深度详解，全程干货，通俗易懂！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "20:59",
      "durationSeconds": 1259,
      "publishedAt": "2026-04-13",
      "description": "配套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #artificialintelligence #人工智能 #learning #agent",
      "status": "available"
    },
    {
      "id": "orGQR7sNpSk",
      "url": "https://www.youtube.com/watch?v=orGQR7sNpSk",
      "thumbnail": "https://img.youtube.com/vi/orGQR7sNpSk/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/orGQR7sNpSk/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "RAG",
        "LLM",
        "Vector Database",
        "Embedding",
        "Document Processing",
        "Retrieval Optimization"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片深入解析 RAG 技術，闡述其如何解決大型語言模型在處理企業內部資料時面臨的上下文限制、高成本與幻覺問題。影片詳細說明 RAG 的核心工作流程，包括文件分片、嵌入、向量資料庫儲存、檢索與提示詞增強。更重要的是，它揭示了 RAG 商業化落地時的四大實戰痛點（文件解析、顆粒度、檢索準確率、用戶提問模糊性），並提出具體解決方案，如客製化 OCR+RLHF、混合檢索與查詢重寫。最後，影片介紹了 GraphRAG 與 Agentic RAG 等進階方案，強調 AI 落地真正的價值在於工程細節的處理。",
      "key_points": [
        "RAG 技術透過檢索外部知識來克服大型語言模型在上下文限制、推理成本和幻覺方面的固有缺陷。",
        "RAG 的核心工作流程包含文件分片、將文本嵌入為向量、儲存於向量資料庫，並在用戶提問時檢索相關片段來增強提示詞。",
        "商業化落地 RAG 面臨文件解析複雜性、分片粒度選擇、檢索準確率不足及用戶提問模糊性等實戰痛點。",
        "解決這些痛點的方案包括專用版面分析模型結合 OCR 與人工複合反饋 (RLHF)、混合檢索與重排模型，以及透過查詢重寫來處理模糊提問。",
        "進階 RAG 方案如 GraphRAG 旨在解決複雜實體關係，而 Agentic RAG 則透過具備思考與拆解能力的智能體實現更智能的檢索與生成。"
      ],
      "content_type": "discussion",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 3,
      "abstraction_level": "mixed",
      "title": "RAG技术深度解析与商业化落地指南！从原理到工程实战！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "17:58",
      "durationSeconds": 1078,
      "publishedAt": "2026-04-12",
      "description": "配套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #rag #artificialintelligence #chatgpt #人工智能",
      "status": "available"
    },
    {
      "id": "_cVTzXvb7xs",
      "url": "https://www.youtube.com/watch?v=_cVTzXvb7xs",
      "thumbnail": "https://img.youtube.com/vi/_cVTzXvb7xs/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/_cVTzXvb7xs/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "AI Agent",
        "Workflow Automation",
        "Large Language Model (LLM)",
        "Tool Integration",
        "Visual Recognition",
        "Desktop Automation"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片介紹 Anthropic 的 AI 助理工具 Claude Cowork，展示如何透過指定工作區、上傳文件及連接外部工具（如 Canva, Gmail, Google Calendar）來執行文件整理、數據分析和內容生成等任務。影片示範了利用排程任務、子代理平行處理，以及自定義技能來自動化複雜工作流程，甚至能遠端操控電腦執行瀏覽器和應用程式操作。核心理念是讓 AI 不僅提供答案，更能實際執行工作，大幅提升個人生產力。",
      "key_points": [
        "Claude Cowork 桌面應用程式提供 AI 助理功能，可直接操作本地文件及應用程式。",
        "支援外部工具連接 (Connectors) 如 Canva, Gmail, Google Calendar，擴展 AI 應用範圍。",
        "引入排程任務 (Scheduled tasks) 和子代理 (Sub-Agents) 概念，實現複雜工作流程的自動化與平行處理。",
        "可自定義技能 (Skills) 以標準化重複性任務，並透過視覺識別 (Visual Recognition) 處理圖像數據。",
        "具備遠端操控電腦的能力，包括瀏覽器操作和應用程式執行。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": true,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Claude Cowork 最友善的手把手教學！你還在叫 AI 幫你想答案？但高手們都已經在用 AI 交成品了 ~",
      "channel": "PAPAYA 電腦教室",
      "channelUrl": "https://www.youtube.com/channel/UCdEpz2A4DzV__4C1x2quKLw",
      "duration": "18:25",
      "durationSeconds": 1105,
      "publishedAt": "2026-04-06",
      "description": "🔹 內容綱要\n00:00 Claude Cowork 安裝與資料夾設定\n03:02 生成文件、試算表與簡報\n04:19 Dispatch (透過手機控制 Cowork)\n06:15 設定 Cowork 記憶文件\n06:48 新增專案\n08:35 排程設定\n09:43 建立子代理同時執行任務\n10:47 使用連接器連接外部工具\n12:38 建立 Skills (技能)\n15:37 資料夾整理\n16:32 遠端操作瀏覽器和電腦\n\n🔹 網站連結\nClaude Cowork 下載 https://claude.com/download\nClaude in Chrome https://bit.ly/4m2YwUl\n\n🔹 練習檔下載\nhttps://drive.google.com/file/d/1lQJbojL3IEpWQA19WOcYtNrzqObKWkao/view?usp=sharing\nhttps://1drv.ms/u/s!AoXOl3Y39m38iPUyHb26aVFzxcfNCQ?e=6dLy60\n\n🔹 參考提示詞\nhttps://papayaclassroom.notion.s",
      "status": "available"
    },
    {
      "id": "Xq-s_hAjADw",
      "url": "https://www.youtube.com/watch?v=Xq-s_hAjADw",
      "thumbnail": "https://img.youtube.com/vi/Xq-s_hAjADw/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/Xq-s_hAjADw/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Harness Engineering",
        "Agentic Systems",
        "Context Engineering",
        "Prompt Engineering",
        "System Design",
        "AI Agents"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片深入探討了「Harness Engineering」的概念，將其定義為為AI模型設計運行系統，超越了傳統的提示詞工程與上下文工程。影片分析了Harness Engineering興起的原因，包括模型能力提升、長任務的系統性缺陷以及模型商品化趨勢。講者透過Anthropic、OpenAI、Google DeepMind和Vercel等公司的實踐案例，歸納出六大核心模塊，並強調了生成-評估分離、約束Agent解決空間以提升表現等關鍵原則。最後，影片也保守地指出了概念膨脹、過度工程化、證據基礎薄弱及可複現性不足等風險與局限。",
      "key_points": [
        "Harness Engineering旨在為AI模型設計一套完整的運行系統，涵蓋任務管理、上下文處理、工具編排、狀態管理及人機協作，以確保模型能有效且可靠地執行複雜任務。",
        "此概念的興起是因應大型語言模型能力提升後，裸模型在處理長任務時暴露出的系統性缺陷（如上下文耗盡、級聯失敗），以及模型本身趨於商品化，系統設計成為新的競爭焦點。",
        "領先的AI公司（如Anthropic和Google DeepMind）在實踐中獨立演化出「生成-評估分離」的設計模式，強調由獨立的評估器Agent來嚴格驗證生成器Agent的輸出，而非依賴模型自我評估。",
        "Vercel的案例顯示，限制Agent的工具集和解決空間，反而能提升其性能、減少Token消耗並提高成功率，這與傳統軟體開發中追求更多自由度的理念形成反差。",
        "Harness Engineering的成熟涉及將多個成熟的工程實踐（如測試框架、CI/CD、可觀測性、沙箱隔離）與機率性推理系統的特性重新組合與調適，形成一套統一的方法論。"
      ],
      "content_type": "discussion",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 3,
      "abstraction_level": "conceptual",
      "title": "当模型够强，Agent 为什么还是频繁翻车？一文讲透 2026 最火 AI 工程概念：Harness Engineering",
      "channel": "唐国梁Tommy",
      "channelUrl": "https://www.youtube.com/channel/UCVezb06mOvkXDwB8ibaOlYQ",
      "duration": "22:37",
      "durationSeconds": 1357,
      "publishedAt": "2026-03-30",
      "description": "大模型越来越强，为什么很多 Agent 项目还是不稳定、容易翻车、上线效果不理想？\n这期视频，我们系统拆解 2026 年 AI 工程圈快速升温的核心概念：Harness Engineering。\n它讨论的，不再只是“Prompt 怎么写”，而是当模型能力已经足够强之后，我们还应该在模型之外搭建什么，才能让 Agent 真正稳定工作。\n如果你正在做 Agent 开发，或者关注 AI 工程、AI 应用落地、智能体系统设计，这期内容会帮助你建立一套更完整的认知框架。\n\n本期你将看到：\n\n- 什么是 Harness Engineering？为什么用“马具”来做隐喻\n- Prompt、Context、Harness 三层能力是如何一步步演进的\n- 为什么这个概念会在 2025 年底到 2026 年初快速爆发\n- Anthropic 的三 Agent 架构，以及“生成-评估分离”的实践思路\n- OpenAI 7 人团队完成百万行代码任务背后的三大核心支柱\n- Google DeepMind Aletheia 的 Generator-Verifier-Reviser 循环\n- Vercel 为什么提",
      "status": "available"
    },
    {
      "id": "Mr78CQpNmsg",
      "url": "https://www.youtube.com/watch?v=Mr78CQpNmsg",
      "thumbnail": "https://img.youtube.com/vi/Mr78CQpNmsg/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/Mr78CQpNmsg/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "AI Agent",
        "Harness Engineering",
        "控制論",
        "Prompt Engineering",
        "軟體工程",
        "可觀測性"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片深入探討了 AI Agent 在實際生產環境中面臨的挑戰，並提出「駕馭工程 (Harness Engineering)」作為解決方案。它闡述了 AI Agent 從 Demo 到生產環境的百倍落差，以及缺乏控制機制導致的「AI 垃圾」問題。核心概念是將 AI Agent 系統視為一個控制系統，透過目標狀態定義、感測器、執行器與回饋迴路，讓系統具備自我糾錯能力，而非僅依賴提升 Agent 智能。影片也引用了 OpenAI 內部百萬行程式碼的瘋狂實驗，展示 Harness Engineering 如何將工程師的角色從程式碼撰寫者轉變為控制系統設計師。",
      "key_points": [
        "Harness Engineering 旨在將 AI Agent 系統轉變為具備自我糾錯能力的控制系統，以應對生產環境的複雜性與不確定性。",
        "AI Agent 在真實業務中會面臨「AI Slop」（快速產生大量低品質程式碼/文件）及「崩壞四部曲」等問題，凸顯了僅依賴 Prompt Engineering 的局限性。",
        "Harness Engineering 包含三個進化層次：Prompt Engineering (表達)、Context Engineering (資訊供給) 和 Harness Engineering (閉環控制)。",
        "核心控制迴路由目標狀態（定義「對」的標準）、感測器（感知偏差）、執行器（修正偏差）和回饋迴路（持續逼近正確）組成。",
        "工程師的角色從傳統的程式碼執行者，轉變為定義正確標準、設計回饋迴路、編寫架構約束與 Linter 規則的「控制系統設計師」。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": true,
      "company_mentioned": "OpenAI",
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "从Prompt到Harness：Agent生产化三层演化链",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "12:42",
      "durationSeconds": 762,
      "publishedAt": "2026-03-30",
      "description": "#harness #ai #人工智能 #agent #prompt #artificialintelligence",
      "status": "available"
    },
    {
      "id": "ZIltS3Jo5o4",
      "url": "https://www.youtube.com/watch?v=ZIltS3Jo5o4",
      "thumbnail": "https://img.youtube.com/vi/ZIltS3Jo5o4/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/ZIltS3Jo5o4/maxresdefault.jpg",
      "primaryFolder": "Antigravity",
      "allFolders": [
        "Antigravity"
      ],
      "tags": [
        "Antigravity",
        "Claude Code",
        "Gemini",
        "HTML",
        "Web Development",
        "GitHub Pages",
        "VS Code Extensions"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片展示了如何在 VS Code 環境中整合 Google Antigravity (內含 Gemini 模型) 與 Anthropic Claude Code 擴充功能，實現雙 AI 模型協作生成網頁內容。影片詳細教學了如何安裝這兩個工具、進行登入驗證，並透過實際操作示範了 AI 如何根據設計規範生成 HTML 網頁，以及利用 Gemini 生成插圖並將其整合至網頁中。最後，影片也涵蓋了將 AI 生成的靜態網頁免費部署至 GitHub Pages 的完整流程。",
      "key_points": [
        "在 VS Code 中安裝並設定 Antigravity 及 Claude Code 擴充功能。",
        "利用 Antigravity (Gemini) 與 Claude Code 進行雙 AI 模型協作，以生成網頁 HTML 結構與內容。",
        "透過 Gemini 進行圖像生成，並將生成的圖片整合到 AI 產出的 HTML 網頁中。",
        "將 AI 生成的靜態網頁檔案（包含圖片）部署至 GitHub Pages，使其可公開存取。",
        "討論了 Claude 在 HTML 生成上的優勢與 Gemini 在邏輯修正及圖像生成上的互補性。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Claude Code + Antigravity雙開超好用｜AI生成網頁＋GitHub免費部署|在 Gemini的地盤用 Claude，雙重 Buff 配置!",
      "channel": "Jelena 耶萊娜 AIGC",
      "channelUrl": "https://www.youtube.com/channel/UC-_FaZElnJIOVPCyYjLiBuQ",
      "duration": "13:12",
      "durationSeconds": 792,
      "publishedAt": "2026-03-26",
      "description": "📢✨《  AI虛擬主播| 數字人 | 不露臉自媒體| 克隆自己數位分身 | NotebookLM 耶萊娜實戰秘技 》👉https://wfhlifelab.com/vtuber-and-notebooklm/ \n\n分享各種自媒體 、AI 、生產力工具、斜槓課 (付費&免費) 的真實經驗+超值乾貨知識分享\n🧠｜Patreon X Discord 社群 👉 https://www.patreon.com/wfhlifelab\n (AI × 知識 × 創作)\n🌐｜Blog: 👉 https://wfhlifelab.com\n (科技生活 )\n\n00:00 Claude Code + Antigravity 雙搭\n00:55 Claude Code 導入 Antigravity 畫面簡介\n05:37 用Claude Code + Antigravity協作生成一頁式網頁\n09:22 把網頁部署到免費平台GitHub\n12:43 總結\n\n\n🍎 推薦工具: \n✨ FlexClip 超豐富 AI 圖影片工具:➡️  https://tidd.ly/4mf5wg3\n\n🍎 更多乾貨影片: \n🔥 Midj",
      "status": "available"
    },
    {
      "id": "54njOwuacGk",
      "url": "https://www.youtube.com/watch?v=54njOwuacGk",
      "thumbnail": "https://img.youtube.com/vi/54njOwuacGk/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/54njOwuacGk/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "RAG",
        "Prompt Engineering",
        "AI Agent",
        "Fine-tuning",
        "Large Language Models",
        "Vector Database"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片分析了 AI 大模型應用開發學習的三個常見誤區：基礎學太久、方向錯位盲目追求微調、以及只看不練沉迷 Demo。講者強調，對於大多數 AI 應用開發者而言，應專注於 RAG、指令工程 (Prompt Engineering) 和 Agent 等技術，並透過實際專案的完整閉環來解決真實業務問題，而非耗費大量時間在理論或高成本的微調上。",
      "key_points": [
        "AI 大模型應用開發應聚焦於 RAG、指令工程和 Agent，而非過度鑽研基礎理論。",
        "微調 (Fine-tuning) 成本高昂且迭代週期長，不適用於大多數企業級 AI 應用場景，RAG+Prompt+Agent 組合更具靈活性與成本效益。",
        "學習 AI 應以解決實際問題為導向，透過需求分析、技術選型、系統搭建、用戶反饋及迭代優化的完整專案閉環來提升能力。",
        "會跑通 Demo 不等於具備 AI 應用開發能力，企業更看重能將 AI 技術融入真實業務流程並產生可衡量價值的工程師。",
        "提升文檔解析準確率、優化向量化過程、結合多跳檢索與重排序、以及設計 Agent 系統的記憶與任務分解能力，是 AI 應用落地的關鍵技能。"
      ],
      "content_type": "discussion",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 3,
      "abstraction_level": "conceptual",
      "title": "程序员想转行AI应用开发，学习顺序千万别弄反了！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "8:38",
      "durationSeconds": 518,
      "publishedAt": "2026-03-24",
      "description": "配套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #artificialintelligence #人工智能 #chatgpt",
      "status": "available"
    },
    {
      "id": "2pM-7fBXc_M",
      "url": "https://www.youtube.com/watch?v=2pM-7fBXc_M",
      "thumbnail": "https://img.youtube.com/vi/2pM-7fBXc_M/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/2pM-7fBXc_M/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "Claude Code",
        "AI Code Assistant",
        "VS Code Extension",
        "Prompt Engineering",
        "AI Agents",
        "Model Context Protocol (MCP)"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片詳細介紹了 Anthropic 的 AI 程式開發助手 Claude Code，示範如何在 VS Code 中安裝與使用。影片展示了 Claude Code 進行程式碼安全掃描、自動修復漏洞，以及透過自然語言進行創意寫作與文件生成等核心功能。同時，影片也深入探討了 Claude Code 的記憶限制、上下文管理機制，並介紹了 Skills、Hooks 及 Agents 等進階功能，以提升 AI 輔助開發的效率與可靠性。",
      "key_points": [
        "Claude Code 是一款強大的 AI 程式開發助手，可整合於 VS Code 提供程式碼安全掃描、漏洞修復與生成功能。",
        "影片示範了透過自然語言與 Claude Code 互動進行程式開發與內容創作的「Vibe Coding」流程。",
        "介紹了 `CLAUD.md` 文件作為持久化上下文的機制，以及「Skills」模組化技能、「Hooks」自動化觸發器和「Agents」分身助手等擴展功能。",
        "強調了上下文容量限制可能導致的錯誤，並提出透過明確引用文件和使用 `CLAUD.md` 來提升 AI 任務執行可靠性的解決方案。",
        "展示了如何整合 Notion 等外部工具，實現更高效的 AI 輔助工作流程。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding, 動動嘴就能做出 Anything！",
      "channel": "PAPAYA 電腦教室",
      "channelUrl": "https://www.youtube.com/channel/UCdEpz2A4DzV__4C1x2quKLw",
      "duration": "27:03",
      "durationSeconds": 1623,
      "publishedAt": "2026-03-22",
      "description": "🔹 內容綱要\n00:00 Claude Code 安裝\n03:31 Claude Code 基本操作簡介\n07:39 建立 CLAUDE.md 文件\n09:41 還原對話或檔案\n10:25 Skills 簡介\n16:09 Hooks 簡介\n16:57 Subagents 簡介\n19:15 MCP 簡介\n20:42 壓縮對話和用量檢查\n21:30 Vibe Coding 實作範例\n\n🔹 網站連結\nClaude Code 安裝 https://code.claude.com/docs/en/overview\nGitHub Anthropics 官方 Skills https://github.com/anthropics/skills \nNano Banana 2 Skill https://github.com/kingbootoshi/nano-banana-2-skill\nGoogle AI Studio https://aistudio.google.com/\nNotion MCP https://developers.notion.com/guides/mcp/get-start",
      "status": "available"
    },
    {
      "id": "lLLzHnixd_8",
      "url": "https://www.youtube.com/watch?v=lLLzHnixd_8",
      "thumbnail": "https://img.youtube.com/vi/lLLzHnixd_8/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/lLLzHnixd_8/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "RAG Evaluation",
        "Retrieval Metrics",
        "Precision-Recall Trade-off",
        "Automated Evaluation",
        "Ragas",
        "TruLens"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片深入探討了檢索增強生成 (RAG) 系統的評估方法，涵蓋了最終結果準確性、大型模型能力和檢索階段效果三大維度。它詳細解釋了召回率、精確率及 F1 分數等核心檢索指標，並分析了精確率與召回率之間的實戰權衡策略。影片也比較了人工評估與自動化評估的優劣，並推薦了 Ragas、TruLens 和 ARES 等開源評估框架，展示了 Ragas 的程式碼範例。",
      "key_points": [
        "RAG 系統評估應從最終結果準確性、大型模型利用檢索內容的能力及檢索階段效果三個維度進行。",
        "檢索階段的核心指標包含召回率 (Recall)、精確率 (Precision) 及 F1 分數，需平衡召回與精確。",
        "實戰中可選擇追求極致精確（高相似度閾值）或優先優化召回率（擴大檢索範圍，降低閾值），後者更適合複雜問題與智慧型 LLM。",
        "人工評估雖為主觀但為使用者體驗的黃金標準，而自動評估效率高、成本低，適合早期開發與大規模處理。",
        "推薦使用 Ragas 進行 RAG 專屬評估，TruLens 進行多維度 AI 評估，ARES 則專注於模型魯棒性與安全性，並可利用大型模型自動生成測試樣本。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": true,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "mixed",
      "title": "搞定RAG的评估方法：检索增强生成的评估核心与实战！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "16:03",
      "durationSeconds": 963,
      "publishedAt": "2026-03-20",
      "description": "全套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #artificialintelligence #人工智能 #learning",
      "status": "available"
    },
    {
      "id": "7qO8-kx3gW8",
      "url": "https://www.youtube.com/watch?v=7qO8-kx3gW8",
      "thumbnail": "https://img.youtube.com/vi/7qO8-kx3gW8/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/7qO8-kx3gW8/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "LLM",
        "Tokenization",
        "Context",
        "Prompt Engineering",
        "Tools",
        "Agent"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片從工程師視角深入淺出地解析大型語言模型（LLM）的底層概念，涵蓋了Transformer架構、Token化、Context、Prompt Engineering、工具使用、MCP協議以及Agent與Agent Skill的運作原理。影片透過圖示與比喻，闡明了LLM如何處理文本、維持對話上下文、以及透過工具與外部環境互動的機制。",
      "key_points": [
        "大型語言模型（LLM）基於Transformer架構，其核心運作原理是預測下一個Token。",
        "Token化是將文本切分為LLM可理解的最小單元（Token）並轉換為數字ID的過程。",
        "Context（上下文）指LLM每次處理任務時接收到的所有資訊，包含對話歷史、工具列表及系統提示。",
        "Prompt Engineering（提示詞工程）是設計清晰、具體指令（提示詞）以引導LLM行為並提升輸出品質的技術。",
        "工具（Tool）讓LLM能與外部環境互動（如查詢天氣），而MCP（Model Context Protocol）則提供統一的工具整合標準。",
        "Agent（代理）是具備自主規劃與工具調用能力的LLM系統，透過Agent Skill（說明文件）來定義其任務、規則與輸出格式。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "从 LLM 到 Agent Skill，一期视频带你打通底层逻辑！",
      "channel": "马克的技术工作坊",
      "channelUrl": "https://www.youtube.com/channel/UCbIeBdHsfTpHsICZy59ZzhA",
      "duration": "32:31",
      "durationSeconds": 1951,
      "publishedAt": "2026-03-14",
      "description": "📌 AI 核心概念大串联：LLM, Token, Context, Context Window, Prompt, User Prompt, System Prompt, Tool, MCP, Agent, Agent Skill，一期视频带你打通 AI 底层逻辑！\n\n#llm #token #contextengineering #context #contextwindow #prompt #tools #modelcontextprotocol #agent #agentskills #ai \n\n🎥 相关视频：\nhttps://www.youtube.com/watch?v=yjBUnbRgiNs&t=1361s\nhttps://www.youtube.com/watch?v=zrs_HWkZS5w\nhttps://www.youtube.com/watch?v=YyVkXrXxvX8\nhttps://www.youtube.com/watch?v=WWdlme1EAGI&t=8s\nhttps://www.youtube.com/watch?v=GE0pFiFJTKo\nhttps",
      "status": "available"
    },
    {
      "id": "hw87jjCP6dk",
      "url": "https://www.youtube.com/watch?v=hw87jjCP6dk",
      "thumbnail": "https://img.youtube.com/vi/hw87jjCP6dk/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/hw87jjCP6dk/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "卷積神經網路 (CNN)",
        "循環神經網路 (RNN)",
        "Transformer",
        "注意力機制 (Attention Mechanism)",
        "位置編碼 (Positional Encoding)",
        "大型語言模型 (LLM)"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片追溯了AI模型從卷積神經網路（CNN）到循環神經網路（RNN）再到Transformer的演進歷程。它解釋了CNN在圖像特徵提取上的優勢及其在處理文字序列上的缺陷，以及RNN如何透過隱藏狀態處理序列但受限於串行計算和長期依賴問題。最後，影片展示了Transformer如何利用注意力機制和位置編碼克服這些限制，從而催生了BERT和GPT等現代大型語言模型。",
      "key_points": [
        "CNN擅長圖像局部特徵識別，但無法理解文字序列的語義。",
        "RNN透過隱藏狀態處理序列資訊，但存在串行計算效率低和長距離依賴（健忘症）問題。",
        "Transformer引入注意力機制，實現了文字的並行計算，顯著提升了處理速度。",
        "Transformer利用位置編碼解決了並行計算中序列資訊丟失的問題。",
        "BERT（編碼器）採用雙向注意力機制專注於語言理解，而GPT（解碼器）則使用單向注意力機制進行文本生成。",
        "GPT透過預訓練和微調，並隨著參數規模的指數級增長，展現出寫作、編碼、邏輯推理及圖文理解等湧現能力。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": true,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "从CNN到Transformer，让AI学会理解人类！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "14:21",
      "durationSeconds": 861,
      "publishedAt": "2026-03-13",
      "description": "大模型全套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #artificialintelligence #chatgpt #transformer #cnn",
      "status": "available"
    },
    {
      "id": "FeQv7mngg6Q",
      "url": "https://www.youtube.com/watch?v=FeQv7mngg6Q",
      "thumbnail": "https://img.youtube.com/vi/FeQv7mngg6Q/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/FeQv7mngg6Q/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "AI Code Generation",
        "Spec-driven Development",
        "Full-stack Development",
        "Docker",
        "Prompt Engineering",
        "Version Control"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片展示如何利用 Claude Code (VS Code 擴充功能) 與 OpenSpec (規格驅動開發框架) 快速建構一個包含前後端與資料庫的全端出缺勤管理系統。內容涵蓋環境設定、AI 輔助專案規劃、程式碼生成、除錯，以及版本控制等實作步驟。講者強調此方法能讓非技術人員參與原型設計，大幅加速開發流程，並將工程師的重心轉移至架構評估與程式碼審查。",
      "key_points": [
        "Claude Code 與 OpenSpec 組合能讓非技術背景人員透過自然語言提示，生成包含前後端與資料庫的全端應用程式原型。",
        "OpenSpec 透過「Agent Skills」自動化專案管理，能根據需求生成提案、設計、規格與任務清單，並在開發過程中自動調用技能。",
        "Docker 用於統一開發環境，特別是資料庫 (PostgreSQL 與 pgAdmin)，確保團隊協作的一致性。",
        "影片展示了 AI 輔助下的迭代開發流程，包括生成程式碼、解決首次登入密碼錯誤、資料庫連線問題，以及新增補打卡功能等。",
        "強調版本控制 (Git) 的重要性，建議每次功能完成後進行 Commit，並透過 .gitignore 管理敏感資訊與自動生成檔案。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "【Claude Code 實戰】一次搞懂 OpenSpec，讓專案每次迭代都有依據",
      "channel": "工程師下班有約",
      "channelUrl": "https://www.youtube.com/channel/UCPLS1Hyv2vTXvMgjO4SMwDw",
      "duration": "37:25",
      "durationSeconds": 2245,
      "publishedAt": "2026-03-12",
      "description": "❝開發系統的人不用系統，會用系統的人不會開發❞\n\n這句話，是客戶在需求訪談時親口說的。\n\n👉 不管前期規劃多完美，上線後還是收到一堆需求變更\n👉 AI 寫程式越來越快，但專案越改越亂，甚至越改越壞\n👉 關鍵人物缺席，沒有文件，系統知識直接斷層\n\n這支影片將透過實戰，帶你用 Claude Code + OpenSpec  解決以上實務痛點：\n\n① 不會寫程式也能上手，從零建立開發環境\n② 不用背指令，用白話文就能驅動 AI 技能包\n③ 需求說不清？讓 AI 主動提問，幫你釐清每個細節\n④ 不再讓 AI 亂改程式，用規格驅動開發確保品質\n⑤ 資料庫設定卡關？安裝 Docker 搞定環境\n⑥ AI 改壞了怎麼辦？版本控制幫你隨時救回來\n⑦ 每次變更都有文件紀錄，不怕知識斷層\n\nAI 時代下，每個人的角色都在轉變 ——\n工程師不再只是寫程式，PM 與業務也不再只是等開發\n\n📌 參考資源：\n影片指令可以參考部落格: https://medium.com/dean-lin/d8d96db19d05\nAgent Skills 入門影片: https://youtu.be/xe00zJEtuMo\nGi",
      "status": "available"
    },
    {
      "id": "2rcJdFuNbZQ",
      "url": "https://www.youtube.com/watch?v=2rcJdFuNbZQ",
      "thumbnail": "https://img.youtube.com/vi/2rcJdFuNbZQ/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/2rcJdFuNbZQ/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [],
      "addedAt": "2026-05-10",
      "summary": null,
      "key_points": [],
      "content_type": null,
      "has_code": null,
      "has_real_company_case": null,
      "company_mentioned": null,
      "production_signals": null,
      "practicality_score": null,
      "abstraction_level": null,
      "title": "解剖小龍蝦 — 以 OpenClaw 為例介紹 AI Agent 的運作原理",
      "channel": "Hung-yi Lee",
      "channelUrl": "https://www.youtube.com/channel/UC2ggjtuuWvxrHHHiaDH1dlQ",
      "duration": "1:23:17",
      "durationSeconds": 4997,
      "publishedAt": "2026-03-09",
      "description": "教學怪物競賽\nhttps://teaching.monster/\n\n背景知識：語言模型基本原理\nhttps://youtu.be/TigfpYPJk1s?si=Vq73vVihiP67EYdZ\n\n6:15 此處現場用手機跟 \"小金\" (在現場的另外一台筆電上) 傳訊息\n\n過去講過的 AI Agent 相關課程\nhttps://youtu.be/eQNADlR0jSs?si=s3iGxeqSLx5IeTjG (2023 年機器學習)\nhttps://youtu.be/bJZTJ7MjYqg?si=it6o9S3CSZdMBXwz (2024 年生成式AI導論)\nhttps://youtu.be/M2Yg1kwPpts?si=gIXWWvuweqAPskyR (2025年機器學習)\nhttps://youtu.be/lVdajtNpaGI?si=djH7GAMtS1hH2RYe (2025 年生成式人工智慧與機器學習導論)\n\n影片剪輯：李一駿助教",
      "status": "available"
    },
    {
      "id": "QnmW0FC7eN0",
      "url": "https://www.youtube.com/watch?v=QnmW0FC7eN0",
      "thumbnail": "https://img.youtube.com/vi/QnmW0FC7eN0/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/QnmW0FC7eN0/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Agent Skills",
        "Prompt Engineering",
        "System Prompt",
        "Meta Data",
        "Tools/Plugins",
        "Workflow Automation"
      ],
      "addedAt": "2026-05-10",
      "summary": "這支影片深度解析了 Agent Skills 的概念，從提示詞的演進開始，逐步介紹了結構化提示詞、指令、系統提示詞、元數據，最終到結合參考資料與執行腳本的 Agent Skill 完整架構。影片闡述了 Agent Skill 如何將通用型 AI 轉變為具備特定領域專業能力的專家代理，並區分了 Agent Skill 與 Model Context Protocol (MCP) 及固定工作流 (Workflow) 的本質差異，強調其在處理複雜業務時的動態邏輯與擴展能力。",
      "key_points": [
        "Agent Skills 是由系統提示詞、元數據、參考資料和執行腳本組成的動態能力單元。",
        "AI 互動方式從簡單提示詞演進至結構化提示詞、指令、系統提示詞，再到元數據與腳本。",
        "元數據（Metadata）實現了按需加載和節省 Token 成本，提升了系統擴展性。",
        "Agent Skills 透過模型驅動的動態邏輯，能靈活處理複雜任務，而非固定編排的工作流。",
        "Agent Skills 賦予 AI 專業能力，將其從聊天夥伴轉變為具備特定領域經驗的專家代理。"
      ],
      "content_type": "theory",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 4,
      "abstraction_level": "conceptual",
      "title": "10分钟彻底讲透Agent Skills，深度解析Skills、workflow、MCP与Command的演进逻辑！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "15:06",
      "durationSeconds": 906,
      "publishedAt": "2026-03-02",
      "description": "配套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #agent #learning #llm #artificialintelligence",
      "status": "available"
    },
    {
      "id": "M9DYCKov9IM",
      "url": "https://www.youtube.com/watch?v=M9DYCKov9IM",
      "thumbnail": "https://img.youtube.com/vi/M9DYCKov9IM/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/M9DYCKov9IM/maxresdefault.jpg",
      "primaryFolder": "Antigravity",
      "allFolders": [
        "Antigravity"
      ],
      "tags": [
        "AI Agent",
        "Large Language Models",
        "Obsidian",
        "Markdown",
        "Prompt Engineering",
        "Tool Use"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片展示如何透過為 AI 提供 Obsidian Markdown 的「技能文件」，解決 AI 在 Obsidian 中僅能生成基本 Markdown 的問題。透過將 Obsidian 的特殊語法（如 Callouts、任務列表、Frontmatter）以 `SKILL.md` 格式提供給 AI，使其能生成更具結構與互動性的筆記。影片使用 Antigravity IDE 搭配 Claude Sonnet 4.6 進行實作演示，並比較了有/無技能文件時 AI 輸出內容的差異。",
      "key_points": [
        "AI 技能 (Skills) 本質上是工具的語法與功能說明文件，讓 AI 能理解並正確運用特定工具的進階功能。",
        "透過在特定目錄結構下放置 `SKILL.md` 文件，AI 能夠自動偵測並學習工具的特殊語法。",
        "提供技能文件後，AI 產出的 Obsidian 筆記能自動包含 Callouts、互動式任務列表及結構化 Frontmatter，顯著提升筆記的實用性與可管理性。",
        "Agent Skills Marketplace (skillamp.com) 提供大量開源的 AI 技能文件，可供直接使用或參考，簡化了自訂 AI 行為的過程。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Antigravity 實戰：無痛設定 Skills ，直出結構化筆記",
      "channel": "Paula 寶拉",
      "channelUrl": "https://www.youtube.com/channel/UCdgdFhaNsFI2AJXAIiisQgw",
      "duration": "9:41",
      "durationSeconds": 581,
      "publishedAt": "2026-03-01",
      "description": "這集我們來聊聊怎麼用 Skill 讓 AI 學會使用 Obsidian 的功能。\n\nAI 幫你整理的筆記，結構沒問題，但格式就只是最基本的 Markdown，因為它根本不知道你在用什麼工具。Skill 就是一份教學文件，告訴 AI 你的工具有哪些特殊語法跟功能，寫一次、放在固定位置，之後 AI 就會自動按照正確的方式輸出。\n\n從 Skills Marketplace 找到現成的 Obsidian Markdown Skill，到實際安裝設定，再到前後對比，一步步帶你看有 Skill 跟沒有 Skill 的差異。\n\n(00:00) 前情回顧\n(00:27) 問題：AI 不認識你的工具\n(00:42) 什麼是 Skill？\n(02:37) 建立 Obsidian Markdown Skill\n(04:57) 有 Skill 後，AI 整理同一份會議記錄的結果\n(06:07) 差異一：Callout 標示重要提醒\n(07:09) 差異二：可互動的 Task List\n(07:52) 差異三：結構化的 FrontMatter\n(08:46) 重點回顧與自訂 Skill 的方法\n\nSkills ",
      "status": "available"
    },
    {
      "id": "VwIzIu18bjc",
      "url": "https://www.youtube.com/watch?v=VwIzIu18bjc",
      "thumbnail": "https://img.youtube.com/vi/VwIzIu18bjc/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/VwIzIu18bjc/maxresdefault.jpg",
      "primaryFolder": "Notion",
      "allFolders": [
        "Notion"
      ],
      "tags": [
        "Notion AI",
        "Custom Agents",
        "自動化工作流",
        "AI Agents",
        "資料庫整合",
        "跨平台整合"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片詳細介紹 Notion 新推出的 Custom Agents 功能，說明其如何建立自動化工作流，並比較與舊版 Agent 在被動/主動執行、權限範圍、共享方式及計費模式上的差異。影片透過個人收件匣自動整理與團隊會議自動化管理兩個實際案例，逐步示範如何設定 Custom Agent 的觸發條件、指令、權限及儲存測試。",
      "key_points": [
        "Notion Custom Agents 實現基於預設條件的主動式自動化工作流，無需手動輸入提示詞。",
        "Custom Agents 可跨平台整合 Gmail、Slack 等工具，並定時讀取資料庫產出報告。",
        "與舊版 Agent 相比，Custom Agents 提供更精細的權限設定，可指定讀取特定頁面或工具，並支援團隊共享。",
        "Custom Agents 的計費模式預計於 2026 年起改為 Token (Credits) 計費。",
        "影片示範了建立個人收件匣自動整理和團隊會議自動生成紀錄與行動項的 Custom Agents 應用。"
      ],
      "content_type": "tutorial",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 6,
      "abstraction_level": "hands_on",
      "title": "Notion 史詩級更新：代理程式Custom Agents 基礎教學，徹底取代你的重複性工作",
      "channel": "社畜倫森",
      "channelUrl": "https://www.youtube.com/channel/UCfYM-ztfA0YrlFZCLQ0UCUQ",
      "duration": "23:27",
      "durationSeconds": 1407,
      "publishedAt": "2026-02-25",
      "description": "Notion 真的要顛覆自動化了！🔥全新 Custom Agent（自訂代理程式）登場，不只像以前那樣等你指令，現在直接變身24小時AI小幫手，幫你自動收信、整理待辦、還能跨平台串聯 Gmail、Slack，團隊開完會也能自動產出紀錄+行動項目，SOP重複事務全交給它！🦾\n再也不用手動整理雜事，AI 幫你全包，效率大升級！你最想讓 Notion Custom Agent 幫你自動化哪件事？留言告訴我！👇\n#NotionAI #自動化神器\n影片時間軸 \n00:00 影片開場：Notion AI 真正的自動化工作流來了 \n00:13 快速導覽：看完今天的影片你會了解的事項 \n00:48 深度解析：Custom Agent 自訂代理程式能做到什麼？ \n01:13 跨平台應用：串接 Gmail 與 Slack 實現自動化工作流 \n01:22 定時報告：自動讀取資料庫產出工作摘要 \n01:31 智能監控：24小時自動回答通訊頻道常見問題 \n01:51 企業知識庫：打造不「夢遊」的精準客服 Q&A \n02:20 差異對比：Custom Agent vs. 原本 Agent 有什麼不同？ \n02:5",
      "status": "available"
    },
    {
      "id": "El7AM1MfduI",
      "url": "https://www.youtube.com/watch?v=El7AM1MfduI",
      "thumbnail": "https://img.youtube.com/vi/El7AM1MfduI/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/El7AM1MfduI/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "RAG",
        "LLM",
        "Embedding",
        "Vector Database",
        "Retrieval",
        "LLM Agent"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片介紹了 RAG (Retrieval Augmented Generation) 如何解決大型語言模型在知識局限性、即時性及幻覺問題上的挑戰。影片詳細闡述了 RAG 的標準工作流程，包括資料分塊、Embedding、向量資料庫儲存、檢索、重排及生成等步驟。並對 Naive、Advanced 和 Modular 三種 RAG 範式進行了比較，指出其演進邏輯及適用場景。最後，影片推薦了編排框架、向量資料庫、Embedding 模型及大型語言模型等關鍵技術棧與工具，並展望了 RAG 走向智能體的未來。",
      "key_points": [
        "RAG 透過外部知識庫解決大型語言模型在知識局限性、即時性及幻覺問題上的固有缺陷。",
        "RAG 的核心流程包括離線的資料處理（分塊、Embedding、向量儲存）和在線的查詢處理（Embedding、召回、重排、生成）。",
        "RAG 應用分為 Naive、Advanced 和 Modular 三種範式，分別代表了從基礎檢索到追求精準再到智能體驅動的演進。",
        "Embedding 技術是 RAG 實現語義檢索的關鍵，將文本轉化為向量以計算相似度。",
        "Modular RAG 結合 Agent 概念，實現動態路由、自適應檢索及多步推理，將 RAG 從問答系統提升至問題解決方案。"
      ],
      "content_type": "tutorial",
      "has_code": false,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 6,
      "abstraction_level": "conceptual",
      "title": "22分钟彻底讲明白RAG的三大范式和技术演进！！！",
      "channel": "白白说大模型",
      "channelUrl": "https://www.youtube.com/channel/UCHrUrG5wJR1rjKkINFxm8yQ",
      "duration": "22:43",
      "durationSeconds": 1363,
      "publishedAt": "2026-02-18",
      "description": "配套教程籽料可以在我【公眾號：白白說大模型】回復關鍵詞：【2】領取\n或者在我的主頁簡介上自取\n#ai #artificialintelligence #人工智能",
      "status": "available"
    },
    {
      "id": "S0c4bD3daN8",
      "url": "https://www.youtube.com/watch?v=S0c4bD3daN8",
      "thumbnail": "https://img.youtube.com/vi/S0c4bD3daN8/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/S0c4bD3daN8/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Hugging Face",
        "AI 模型",
        "本地部署",
        "雲端推論",
        "Python",
        "Docker"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片全面介紹 Hugging Face 平台，展示如何透過其模型庫、Inference Providers 和 Spaces 體驗及部署 AI 模型。內容涵蓋直接在網頁上使用模型、在 Google Colab 中透過 Python 程式碼執行模型，以及在本地環境利用 VS Code、Python 虛擬環境和 Docker 進行模型部署與操作。影片也提及了 Hugging Face 服務的費用結構和使用限制。",
      "key_points": [
        "Hugging Face 提供龐大的預訓練 AI 模型庫，可依任務類型和熱門程度篩選。",
        "使用者可透過 Inference Providers 或 Spaces 介面直接在雲端體驗模型，並需留意相關費用與免費額度。",
        "影片示範了如何在 Google Colab 中使用 Hugging Face 的 Pipeline 語法進行情感分析。",
        "詳細教學如何在本地環境（VS Code、Python 虛擬環境）安裝並執行 Hugging Face 模型，以及利用 Docker 部署 Spaces 應用。",
        "強調了本地部署可提供完整的控制權，並可利用 AI 助手（如 Gemini）協助程式碼生成。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "開源 AI 模型比付費的更香？Hugging Face 就是你的軍火庫，免費玩頂級開源 AI 還能本地客製化！",
      "channel": "PAPAYA 電腦教室",
      "channelUrl": "https://www.youtube.com/channel/UCdEpz2A4DzV__4C1x2quKLw",
      "duration": "17:03",
      "durationSeconds": 1023,
      "publishedAt": "2026-02-15",
      "description": "🔹 內容綱要\n00:00 搜尋與篩選 AI 模型\n01:50 使用 Inference Providers 服務\n03:09 使用 Spaces AI 應用\n05:41 Hugging Chat 服務\n05:54 在 Google Colab 客製化 AI 模型\n08:58 在本機部署 AI 模型\n13:35 在本機使用 Inference Providers\n15:24 使用 Docker 在本機運行 Spaces\n\n🔹 網站連結\nHugging Face https://huggingface.co/\nGoogle Colab https://colab.research.google.com/\nVisual Studio Code https://code.visualstudio.com\nDocker https://www.docker.com/products/docker-desktop/\n\n🔹 程式碼 & 提示詞\nhttps://bit.ly/4cnI1iN\n\n🔹 請 Papaya 喝咖啡 ☕️\nhttps://buymeacoffee.com/papayaclass\n",
      "status": "available"
    },
    {
      "id": "O9b8tLXCTYU",
      "url": "https://www.youtube.com/watch?v=O9b8tLXCTYU",
      "thumbnail": "https://img.youtube.com/vi/O9b8tLXCTYU/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/O9b8tLXCTYU/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "LLM",
        "Prompt Engineering",
        "Agent",
        "Function Calling",
        "RAG",
        "LangChain"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片透過老闆與員工的類比，解釋了大型語言模型（LLM）應用開發中的核心概念。內容涵蓋如何透過Prompt、Context、Memory提升LLM對話能力，並介紹Agent如何利用Function Calling機制整合外部工具（如搜尋、文件處理）來擴展功能。影片也探討了LangChain、workflow、Skill等框架在任務流程管理中的不同彈性與穩定性，並指出許多新概念本質上是為了解決LLM的固有局限，且將朝向更便利的產品形式發展。",
      "key_points": [
        "LLM本質上是文字接龍，需透過Prompt、Context、Memory機制增強對話能力。",
        "Agent作為LLM與外部工具之間的橋樑，透過Function Calling實現工具調用。",
        "RAG（檢索增強生成）利用向量資料庫提供外部知識，以提高LLM生成內容的可靠性。",
        "LangChain、workflow、Skill等框架提供不同層次的抽象，用於編排複雜的AI任務流程，平衡穩定性與靈活性。",
        "許多新概念是為了解決LLM的固有局限，並將朝向更便利、無腦使用的產品形式發展。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 7,
      "abstraction_level": "mixed",
      "title": "【闪客】名词诈骗！一口气拆穿Skill/MCP/RAG/Agent/OpenClaw底层逻辑",
      "channel": "飞天闪客",
      "channelUrl": "https://www.youtube.com/channel/UCzVif5-LCEfg1QxIzby4ePw",
      "duration": "14:46",
      "durationSeconds": 886,
      "publishedAt": "2026-02-03",
      "description": "",
      "status": "available"
    },
    {
      "id": "xe00zJEtuMo",
      "url": "https://www.youtube.com/watch?v=xe00zJEtuMo",
      "thumbnail": "https://img.youtube.com/vi/xe00zJEtuMo/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/xe00zJEtuMo/maxresdefault.jpg",
      "primaryFolder": "Antigravity",
      "allFolders": [
        "Antigravity"
      ],
      "tags": [
        "AI Agent",
        "Prompt Engineering",
        "Agent Skills",
        "Workflow Automation",
        "Antigravity (Google AI Studio)",
        "Python Scripting"
      ],
      "addedAt": "2026-05-10",
      "summary": "本影片介紹 AI Agent 的「技能包 (Skills)」概念，旨在解決 AI 工具使用中的提示詞重複、額度耗盡等痛點。影片示範如何在 Google Antigravity 中建立客製化 Skill，並透過實例展示將音訊轉字幕及生成個人品牌網頁的過程，比較使用前後的差異。強調 Skill 搭配完善的 Prompt 能穩定品質並獲得更好的結果，並提醒第三方 Skill 的資安風險及優化技巧。",
      "key_points": [
        "AI Agent Skills 概念：將提示詞、程式腳本、參考資料打包成可重複使用的技能包，讓 AI Agent 自行判斷使用時機。",
        "解決痛點：Skills 有效減少重複提示詞輸入、降低 Token 消耗，並提升 AI 執行效率。",
        "客製化 Skill 開發：示範如何在 Antigravity 環境中建立並測試自定義 Skill，例如音訊轉 SRT 字幕。",
        "Workflow 應用：展示如何透過 Workflow 串聯多個 Skills，實現複雜的自動化任務，如生成影片介紹。",
        "第三方 Skills 與資安：提醒從可信任來源安裝 Skills，並檢查腳本是否存在惡意操作或敏感資訊傳送的風險。",
        "Prompt 優化與 Skill 搭配：強調清晰具體的 Prompt 結合適當的 Skill 設計，是獲得穩定高品質結果的關鍵。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "【Antigravity Agent Skills 教學】當別人還在複製貼上，你的 AI 已經自動搞定",
      "channel": "工程師下班有約",
      "channelUrl": "https://www.youtube.com/channel/UCPLS1Hyv2vTXvMgjO4SMwDw",
      "duration": "29:54",
      "durationSeconds": 1794,
      "publishedAt": "2026-02-02",
      "description": "用 AI Agent 一段時間後，你一定遇過這些問題：\n\n👉 AI 回覆品質不穩定\n👉 存了一堆提示詞，結果要用時找不到\n👉 AI 工具的額度一下就燒完\n\n因此這隻影片將透過實戰，讓你了解 Agent Skills 如何解決以上痛點：\n\n① 了解 Rule / Workflow / Skill 使用場景，減少 Token 額度浪費\n② 怎麼安裝別人的 Skill，升級 AI 專業能力\n③ 怎麼做出自己的 Skill，把「一次解決」變成「永久可複用」的能力\n\nAgent Skills 的出現，讓 AI 的價值可以持續累積；只要教會一次，他就永遠記得怎麼做！\n\n📌 參考資源：\n影片指令可以參考部落格: https://dean-lin.medium.com/30590e3c7727\n影片 GitHub 專案: https://github.com/dean9703111/ai-agent-skill-for-video-workflow\nCursor 入門影片: https://youtu.be/kVniOF36GEk\nAntigravity 入門影片: https://youtu.be/",
      "status": "available"
    },
    {
      "id": "n4cgvNKdFxs",
      "url": "https://www.youtube.com/watch?v=n4cgvNKdFxs",
      "thumbnail": "https://img.youtube.com/vi/n4cgvNKdFxs/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/n4cgvNKdFxs/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [
        "Agent Skill",
        "Large Language Model",
        "Prompt Engineering",
        "Metadata",
        "Scripts",
        "Image Generation"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片深入解析 Agent Skill 的概念、結構與實際應用，透過逐步升級的案例，展示如何從基礎的提示詞（prompt）演進到包含元信息、指令、參考資料、腳本和資產的完整技能。影片強調 Agent Skill 透過「按需加載」的三層結構（元信息層、指令層、資源層）來節省 Token 並提高回應精準度。最後，影片介紹了一個技能創建工具，讓使用者能以互動式問答方式快速生成自定義技能，並推薦了多種實用技能應用場景。",
      "key_points": [
        "Agent Skill 是一種將複雜任務分解為可重用模組的機制，包含元信息、指令、參考資料、腳本和資產。",
        "核心機制是「漸進式披露」（Progressive Disclosure），透過三層按需加載結構（元信息、指令、資源）來優化 Token 使用與回應精準度。",
        "元信息層（metadata）提供技能概覽，指令層（instruction）包含具體執行步驟，資源層（resources, scripts, assets）則提供額外資料、可執行腳本和靜態檔案。",
        "腳本（scripts）可被 Agent 直接執行而無需讀取其內容，有效節省 Token 成本並實現複雜功能，如自動生成圖片。",
        "提供互動式技能創建工具，讓非開發者也能透過問答方式快速生成符合需求的 Agent Skill，降低開發門檻。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "手把手彻底学会 Agent Skills！【小白教程】",
      "channel": "秋芝2046",
      "channelUrl": "https://www.youtube.com/channel/UCH8AdQo3NtLPhDSe-By5JwQ",
      "duration": "19:19",
      "durationSeconds": 1159,
      "publishedAt": "2026-02-02",
      "description": "Agent 火了，但很多人一上手就懵。\n到底什么是 Agent Skills？要怎么用？从哪开始学？\n\n这期视频就是一套 真正给小白准备的入门教程。\n不假设任何基础，\n从概念讲起，到实际操作，\n一步一步手把手教你把 Agent Skills 用起来。\n\n不讲空话、不堆术语，\n目标只有一个：\n看完就能用，用完就能解决实际问题。\n\n💡 本期视频你将学到：\n\n什么是 Agent Skills？能解决什么问题？\n新手最容易卡住的几个关键点\nAgent Skills 的基础使用流程\n常见应用场景与实战示例\n小白如何继续进阶、不走弯路？\n\n📌 如果你是 第一次接触 Agent / AI 自动化，\n或者被各种“高阶教程”劝退过，\n这期视频就是你的起点。\n\n🔔 订阅频道\n持续更新 AI 工具实操、小白友好的效率教程。",
      "status": "available"
    },
    {
      "id": "AT4b9kLtQCQ",
      "url": "https://www.youtube.com/watch?v=AT4b9kLtQCQ",
      "thumbnail": "https://img.youtube.com/vi/AT4b9kLtQCQ/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/AT4b9kLtQCQ/maxresdefault.jpg",
      "primaryFolder": "Claude Code",
      "allFolders": [
        "Claude Code"
      ],
      "tags": [
        "Claude Code",
        "Coding Agent",
        "LLM",
        "React",
        "TypeScript",
        "Figma"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片為 Claude Code 的終極指南，從入門到生產環境。內容涵蓋 Claude Code 的安裝、基礎互動模式、複雜任務處理與終端控制。影片透過實作待辦事項應用，展示如何將單一 HTML 檔案重構為 React + TypeScript + Vite 專案，並整合 Figma 設計稿。同時也介紹了 Hooks、Agent Skills、SubAgents 及 Plugins 等進階功能，以提升開發效率與客製化能力。影片中也討論了如何評估 AI 系統的品質。",
      "key_points": [
        "Claude Code 的安裝與基礎操作，包括建立待辦事項應用。",
        "詳解 Claude Code 的三種互動模式：預設、自動與規劃模式。",
        "展示將現有 HTML 專案重構為 React + TypeScript + Vite 專案的流程。",
        "介紹 Hooks、Agent Skills、SubAgents 及 Plugins 等進階功能，用於擴展 Claude Code 的能力。",
        "示範如何整合 Figma 設計稿，透過 MCP Server 實現 UI 的同步與還原。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": true,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "Claude Code 从 0 到 1 全攻略 —— MCP / SubAgent / Agent Skill / Hook / 图片 / 上下文处理/ 后台任务 / 权限 ......",
      "channel": "马克的技术工作坊",
      "channelUrl": "https://www.youtube.com/channel/UCbIeBdHsfTpHsICZy59ZzhA",
      "duration": "44:45",
      "durationSeconds": 2685,
      "publishedAt": "2026-01-25",
      "description": "Claude Code 从 0 到 1 全攻略 #claude #claudecode #ai #agent #llm #code #编程 #vibecoding\n\n📌 本视频带大家从零开始，把 Claude Code 从“尝鲜”工具变成真正的“生产力利器”。\n\n🎥 其他相关视频：\nhttps://www.youtube.com/watch?v=yDc0_8emz7M\nhttps://www.youtube.com/watch?v=GE0pFiFJTKo\nhttps://www.youtube.com/watch?v=yjBUnbRgiNs\n\n🔗 相关链接：\nClaude Code 官方链接：https://claude.com/product/claude-code\nFigma MCP Server 官方安装说明：https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/#claude-code\n\n⏱ 时间轴：\n00:00 视频内容介绍\n01:09 安装并登录\n02:50 基础功能演示\n",
      "status": "available"
    },
    {
      "id": "e-WNdM4JO2U",
      "url": "https://www.youtube.com/watch?v=e-WNdM4JO2U",
      "thumbnail": "https://img.youtube.com/vi/e-WNdM4JO2U/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/e-WNdM4JO2U/maxresdefault.jpg",
      "primaryFolder": "Antigravity",
      "allFolders": [
        "Antigravity"
      ],
      "tags": [
        "AI-assisted development",
        "Code Generation",
        "Agentic AI",
        "Workflow Automation",
        "Model Context Protocol (MCP)",
        "Skills Management"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片介紹 Google Antigravity Vibe Coding 工具，展示如何透過自然語言與 AI 互動來進行程式開發。它詳細說明了環境建置、規則設定、自動化流程 (Workflow)、MCP (Model Context Protocol) 外部工具整合及技能 (Skills) 管理等核心功能。影片強調 AI 能自動執行指令、管理版本控制並生成程式碼，提升開發效率。",
      "key_points": [
        "Antigravity Vibe Coding 是一個 AI 輔助開發工具，允許使用者透過自然語言與 AI 互動來生成程式碼、管理專案。",
        "工具支援設定全域 (Global Rules) 及專案級 (Workspace Rules) 規則，以指導 AI 行為及輸出格式。",
        "Workflow 功能允許定義標準操作流程 (SOP)，讓 AI 依序執行多步驟任務，例如網站部署。",
        "MCP (Model Context Protocol) 實現 AI 與外部工具（如資料庫、Notion、Slack）的標準化整合。",
        "Skills 功能讓 AI 學習特定技能，類似於安裝應用程式，可透過 Skills Marketplace 擴充。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "【凱文大叔】手把手教你 Antigravity 設定與應用：規則（Rules）＋神技能（Skills）＋自動化（Workflows）打造最強AI 超能力！",
      "channel": "凱文大叔AI程式設計教室",
      "channelUrl": "https://www.youtube.com/channel/UClPN2rjY4im2LC9vG3Y8vkg",
      "duration": "34:08",
      "durationSeconds": 2048,
      "publishedAt": "2026-01-24",
      "description": "使用 Antigravity 實作一個去浮水印網頁: https://youtu.be/wQDd0vq0I8I\nAntigravity教學網址: https://kevintsai1202.github.io/Antigravity_Course/\nAntigravity官網: https://antigravity.google/\n凱文大叔第一本電腦書: https://www.tenlong.com.tw/products/9786267757710?list_name=lv\n===\n成為這個頻道的會員並獲得專屬福利：\nhttps://www.youtube.com/channel/UClPN2rjY4im2LC9vG3Y8vkg/join\n===\n共享帳號平台 FlixSeek，Google AI Pro學生方案一年(不用40美金)只到一月底\n透過邀請鏈結，購買時輸入折扣碼：【kevin】還能打95折\n網站鏈結：https://www.flixseek.net/?code=pg-kt\n===\n最近在社群平台爆紅的 Antigravity 你跟上了嗎？\n這款工具讓「Vibe Cod",
      "status": "available"
    },
    {
      "id": "nHE7pKaSId0",
      "url": "https://www.youtube.com/watch?v=nHE7pKaSId0",
      "thumbnail": "https://img.youtube.com/vi/nHE7pKaSId0/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/nHE7pKaSId0/maxresdefault.jpg",
      "primaryFolder": "Notion",
      "allFolders": [
        "Notion"
      ],
      "tags": [
        "Notion",
        "筆記管理",
        "知識管理",
        "資料庫",
        "生產力工具",
        "任務管理"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片為Notion新手提供一套從零開始的實用指南，首先建議從日常流水帳記錄入手，逐步建立「收件箱」頁面以管理未分類資訊。接著，影片示範如何利用Notion的「全寬」和「分欄」功能，創建工作、生活、學習等分區，以集中管理相關頁面。最終，影片深入講解Notion資料庫的「屬性」、「視圖」和「內嵌資料庫」等核心功能，幫助使用者實現結構化數據管理與多角度檢視，從而高效組織個人資訊。",
      "key_points": [
        "Notion新手應從簡單的日常記錄開始，避免急於遷移舊筆記，以培養使用習慣。",
        "建立「收件箱」頁面作為臨時儲存區，用於存放未分類或有壓力的筆記，並定期清理以減輕心裡負擔。",
        "利用Notion的「全寬」和「分欄」功能，創建清晰的工作、生活、學習分區，將相關頁面集中管理，提高效率。",
        "掌握Notion資料庫的「屬性」、「視圖」和「內嵌資料庫」功能，實現數據的結構化管理與多維度檢視，是Notion進階應用的核心。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "Notion 2026 最强入门教程！5 个步骤速通个人知识系统（零基础）",
      "channel": "二一的笔记",
      "channelUrl": "https://www.youtube.com/channel/UCRZoyvSkYhYBQyQotbtPJNQ",
      "duration": "17:40",
      "durationSeconds": 1060,
      "publishedAt": "2026-01-11",
      "description": "Notion 一站式全能模板\n🔗 https://21notion.com/\n7 天重建信息秩序\n已帮助近 1000 个用户搭建任务与知识管理系统\n\n视频配套资源\n这是我用了 8 年 Notion、服务 7000+ 用户后，给新手整理出的入门路线，适合从零入门直接照搬，视频提供了一份配套模板，欢迎取用。\n\n本期视频配套模板：\n🔗 https://eryi.ink/notion2026\n\nNotion 注册&安装教程：\n🔗 https://eryi.ink/uhqy25\n\n视频时间轴\n\n00:00 引入\n01:06  暂停迁移\n02:23 流水账思路\n05:14 收件箱策略\n08:07 工作分区教程\n11:30   数据库入门\n\n这里是二一的笔记\n一个硬核测评笔记软件与效率工具的频道\n\n感谢观看我的视频\n欢迎评论，留下你的意见或者看法\n如果对你有帮助，还请点赞、订阅我的频道，并开启通知小铃铛~\nYoutube 订阅：https://www.youtube.com/@eryinote \n我的 B 站：https://space.bilibili.com/319417\nDiscord 交流：",
      "status": "available"
    },
    {
      "id": "Ya3zmK_g3Cg",
      "url": "https://www.youtube.com/watch?v=Ya3zmK_g3Cg",
      "thumbnail": "https://img.youtube.com/vi/Ya3zmK_g3Cg/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/Ya3zmK_g3Cg/maxresdefault.jpg",
      "primaryFolder": "Antigravity",
      "allFolders": [
        "Antigravity"
      ],
      "tags": [
        "AI-powered IDE",
        "Code Generation",
        "Agent Systems",
        "Prompt Engineering",
        "Web Development",
        "GitHub Integration"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片展示 Google Antigravity 這款 AI 開發工具，透過建構網頁版貪食蛇遊戲進行教學。內容涵蓋工具安裝、設定規則與工作流程、代理程式管理，以及瀏覽器互動功能。儘管該工具能透過自然語言提示詞自動生成程式碼，但影片也指出其穩定性與執行速度仍有待提升。",
      "key_points": [
        "Google Antigravity 是一款基於 VSCode 的 AI 開發環境，免費提供 Gemini 和 Claude 等大型語言模型使用。",
        "影片介紹「意念驅動程式碼」（Vibe Coding）概念，由 AI 根據自然語言提示詞處理架構、環境配置、程式碼編寫及除錯等任務。",
        "Antigravity 具備 AI 驅動的程式碼自動補全、代理程式管理員（Agent Manager）用於多代理任務協調，以及瀏覽器子代理（Browser Subagent）實現自動化瀏覽器操作。",
        "影片中展示 Antigravity 在中文處理、模型切換、執行速度及穩定性方面仍存在問題，例如中文語音辨識能力差、模型執行緩慢且不穩定。",
        "專案部署至 GitHub 的功能已整合，透過 MCP Tools 進行操作，但需要設定 GitHub 個人存取權杖。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 6,
      "abstraction_level": "hands_on",
      "title": "Google Antigravity 完整实战教程：一个项目贯穿全部核心功能｜Vibe Coding 初体验",
      "channel": "言成",
      "channelUrl": "https://www.youtube.com/channel/UCodHkqMQh5uLLrWYiKVQXwg",
      "duration": "36:53",
      "durationSeconds": 2213,
      "publishedAt": "2026-01-05",
      "description": "大家好！本期ai video将带大家深入了解如何利用谷歌的免费 ai开发工具AntiGravity，轻松构建一个贪吃蛇小游戏。我们将重点演示这款工具的强大功能，包括其免费访问Gemini和Cloud模型的特性，让大家体验ai coding的便捷。\n\n通过这个简单的项目，你将快速掌握AntiGravity的核心用法，并了解到这款ai工具如何简化开发流程。无论你是初学者还是经验丰富的开发者，这都将是一次有价值的ai tutorial。\n\n00:00 介绍\n02:42 安装\n07:36 基础操作\n11:00 编写 Rules\n12:53 与 Agent 交互\n22:45 浏览器自动化操作\n30:10 使用 MCP 工具\n34:22 Workflow\n\n\nAntiGravity官方地址：https://antigravity.google/\ngoogle账号地区修改地址：https://policies.google.com/country-association-form",
      "status": "available"
    },
    {
      "id": "K9Q4aS1wPXk",
      "url": "https://www.youtube.com/watch?v=K9Q4aS1wPXk",
      "thumbnail": "https://img.youtube.com/vi/K9Q4aS1wPXk/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/K9Q4aS1wPXk/maxresdefault.jpg",
      "primaryFolder": "N8N",
      "allFolders": [
        "N8N"
      ],
      "tags": [
        "AI Agent",
        "n8n",
        "LLM",
        "Tool Use",
        "Workflow Automation",
        "LINE Bot"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片詳細教學如何使用n8n的AI Agent框架，整合Google Gemini/Mistral模型、記憶體及多種外部工具（如Wikipedia、Calculator、Serper、Google Sheets、Google Calendar、Gmail）。影片逐步展示了如何設定Agent、整合工具以實現食物熱量追蹤、發票自動存檔、行程管理及電子郵件處理，並透過主從式Agent架構擴展功能，最終將AI助理部署至LINE機器人並進行實際測試。",
      "key_points": [
        "使用n8n的AI Agent框架，透過視覺化介面串接多個AI模型與外部工具。",
        "詳細設定AI Agent的核心參數，包括System Message、Max Iterations、Fallback Model、Multimodal Input等。",
        "整合通用外部工具（Wikipedia、Calculator、Serper Search）及客製化工具（Google Sheets、Google Calendar、Gmail）以擴展AI能力。",
        "展示主從式AI Agent架構，將複雜任務分解給獨立的子Agent處理，以節省Token消耗並提高模組化。",
        "實際部署AI助理至LINE機器人，並進行文字及圖片輸入的端到端測試。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": true,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "別再只會跟 AI 聊天！0 程式碼打造 AI 自動化工作流（n8n × Agent → LINE）",
      "channel": "P & H",
      "channelUrl": "https://www.youtube.com/channel/UCpXOvRzWW0lJhYrUeWBlNmA",
      "duration": "27:59",
      "durationSeconds": 1679,
      "publishedAt": "2026-01-03",
      "description": "當大多數人還在一句一句和ChatGPT聊天或在Gemini上手動複製貼上prompt輸出時 ， 你是否已經準備好建立「AI自動化系統」? 這是AI對提升工作效率和生活品質的「分水嶺」。\n\n這支影片不是簡單的工具介紹，而是一堂接近半小時的「n8n AI Agent 建構指南」，教你如何以 AI 建築師 的思維，利用n8n零程式碼工作流，將碎裂的AI聊天翻轉為一套 24/7 自動運行的系統。\n\n這是一次徹底的 AI 在生活上的落地實踐，我們將串聯Google Sheets、Gmail 與 Calendar，並在 Gemini、Mistral 與 Groq 多模型架構下，建構出一個懂生活細節、更能執行複雜任務的數位伴侶並部署於Line Bot上。\n\n你將學會如何打造： \n✅ 飲食管理： 拍餐飲照，利用視覺辨識，AI 自動分析熱量並記錄到 Google Sheet。 \n✅ 發票管理： 拍發票，自動辨識發票號碼及金額並歸檔記帳。 \n✅ 生活秘書： 串接 Google Calendar 與 Gmail，用一句話管理行程與信件。\n\n🎁 這是我們為2026數位生存所準備的教學，更重要的是：你將能以AI",
      "status": "available"
    },
    {
      "id": "6s_Z9Tl0sHU",
      "url": "https://www.youtube.com/watch?v=6s_Z9Tl0sHU",
      "thumbnail": "https://img.youtube.com/vi/6s_Z9Tl0sHU/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/6s_Z9Tl0sHU/maxresdefault.jpg",
      "primaryFolder": "N8N",
      "allFolders": [
        "N8N"
      ],
      "tags": [
        "N8N",
        "Workflow Automation",
        "No-code",
        "AI Agent",
        "Data Transformation",
        "Webhook"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片介紹 N8N 作為一個無程式碼的 AI 自動化工作流工具，詳細展示了各種節點類型，包括觸發器（手動、排程、Webhook、聊天、Google Sheets）、資料操作（設定、分割、聚合）、流程控制（If、Switch、Merge、Wait）以及 AI 專用節點（程式碼、AI 轉換、LLM 鏈、AI 代理）。影片透過電商訂單處理和資料豐富化的實際案例，展示了 N8N 在無需大量程式碼的情況下，自動化複雜任務的能力。",
      "key_points": [
        "N8N 是一個無程式碼/低程式碼平台，用於建立自動化工作流，整合各種服務和 AI 模型。",
        "提供多種觸發器節點（手動、排程、Webhook、聊天、Google Sheets）以啟動工作流。",
        "資料操作節點（Edit Fields, Split Out, Aggregate）支援靈活的資料轉換和重組。",
        "流程控制節點（If, Switch, Merge, Wait）實現複雜的條件邏輯、平行處理和任務同步。",
        "AI 專用節點（AI Transform, Basic LLM Chain, AI Agent）利用大型語言模型進行程式碼生成、文字分析和多代理任務委派。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "2026 最強 N8N 教學！從零開始打造你的 AI 自動化工作流！",
      "channel": "李哈利Harry",
      "channelUrl": "https://www.youtube.com/channel/UCEA4ZfPzWDHp72mlq7IvUcw",
      "duration": "32:50",
      "durationSeconds": 1970,
      "publishedAt": "2025-12-05",
      "description": "🌟 加入AI大師社群並運用AI創業賺錢：https://www.skool.com/aiagent/about?ref=f2b566934c5c4639aaa47ab1fe39310e\n📌 加入我的免費 Skool 社群，獲取模板：https://www.skool.com/aiagent8/about?ref=f2b566934c5c4639aaa47ab1fe39310e\n\n🚧 開始使用 n8n 構建自動化! 👇\nhttps://n8n.partnerlinks.io/fwp82h8azh6k\n\n💻 想將 AI Agent整合到你的業務中？預約諮詢👇\nhttps://www.visionaryautomate.com/\n\n這支影片是目前 2026 年最新、最完整、最簡單的 N8N 教學！\n不論你是剛接觸自動化的新手，還是想升級成 AI Agent 開發者，\n看完這支影片你就能一步步學會如何用 N8N 建立屬於你的自動化工作流 💪\n\n🎯 你將學到：\n\nN8N 的基本架構與節點概念\n\n如何整合 OpenAI、Google Sheets、Webhook、 等應用\n\n實作範例：AI 自動回",
      "status": "available"
    },
    {
      "id": "cFbT4Sqlt_Y",
      "url": "https://www.youtube.com/watch?v=cFbT4Sqlt_Y",
      "thumbnail": "https://img.youtube.com/vi/cFbT4Sqlt_Y/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/cFbT4Sqlt_Y/maxresdefault.jpg",
      "primaryFolder": "N8N",
      "allFolders": [
        "N8N"
      ],
      "tags": [
        "RAG",
        "Google Gemini API",
        "n8n.io",
        "Vector Search",
        "Embedding",
        "LLM"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片展示如何使用 Google Gemini File Search API 搭配低程式碼平台 n8n.io 建立一個 RAG 系統。教學內容涵蓋了建立檔案儲存區、上傳 PDF 文件（以 NBA 規則為例），並透過 AI Agent 查詢文件以獲取相關資訊並生成答案。影片強調此方法相較於其他 RAG 實作更為簡便，適合新手快速上手。",
      "key_points": [
        "示範使用 Google Gemini File Search API 建立 RAG 系統。",
        "利用 n8n.io 平台串接 API，實現檔案儲存、上傳及查詢的自動化流程。",
        "展示如何將自訂 PDF 文件嵌入並從中檢索資訊。",
        "成功回答了關於籃球規則的問題，並能從文件中提取相關內容進行總結。",
        "強調 Google RAG 系統的易用性與整合性，適合快速開發。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "最簡單的 RAG 系統！用 n8n + Google 打造企業級知識庫",
      "channel": "李哈利Harry",
      "channelUrl": "https://www.youtube.com/channel/UCEA4ZfPzWDHp72mlq7IvUcw",
      "duration": "12:06",
      "durationSeconds": 726,
      "publishedAt": "2025-11-27",
      "description": "🌟 加入AI大師社群並運用AI創業賺錢：https://www.skool.com/aiagent/about?ref=f2b566934c5c4639aaa47ab1fe39310e\n📌 加入我的免費 Skool 社群，獲取模板：https://www.skool.com/aiagent8/about?ref=f2b566934c5c4639aaa47ab1fe39310e\n\n🚧 開始使用 n8n 構建自動化! 👇\nhttps://n8n.partnerlinks.io/fwp82h8azh6k\n\n💻 想將 AI Agent整合到你的業務中？預約諮詢👇\nhttps://www.visionaryautomate.com/\n\n在這支影片中，我會手把手教你如何使用 n8n + Google File Search 建立一個完整的 RAG（Retrieval-Augmented Generation）檢索系統，讓你的 AI 能從 Google Drive 取得最新、最準確的文件資訊。\n\n你將學會：\n\n如何讓 n8n 連接 Google Drive 並實現智慧檔案搜尋\n\n如何將文件內容作為 ",
      "status": "available"
    },
    {
      "id": "ajRX4Qpz8WM",
      "url": "https://www.youtube.com/watch?v=ajRX4Qpz8WM",
      "thumbnail": "https://img.youtube.com/vi/ajRX4Qpz8WM/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/ajRX4Qpz8WM/maxresdefault.jpg",
      "primaryFolder": "RAG",
      "allFolders": [
        "RAG"
      ],
      "tags": [
        "RAG",
        "Gemini API",
        "Vector Embeddings",
        "Knowledge Base",
        "Document Retrieval",
        "AI Studio"
      ],
      "addedAt": "2026-05-10",
      "summary": "影片介紹 Google Gemini API 的新功能 Gemini File Search，其將傳統 RAG 系統的複雜步驟（如向量資料庫建置、文件切分）整合為簡單的 API 呼叫。影片透過 Google AI Studio 示範上傳 PDF 文件並進行問答，展示其能從文件中提取精確答案並提供引用來源。同時，影片也提供了使用 TypeScript 和 React 實現的範例程式碼，並討論了該服務的成本效益與潛在的資料隱私限制。",
      "key_points": [
        "Gemini File Search 將 RAG 流程自動化，開發者只需少量 API 呼叫即可建立文件問答系統，無需手動管理向量資料庫或文件切分。",
        "該服務能從上傳的文件中檢索相關內容，並結合 Gemini 模型生成答案，同時提供原始文件引用以增強可信度。",
        "支援多種文件格式，並允許透過配置 chunking_config 和 metadata 參數來優化文件處理與檢索性能。",
        "數據儲存和查詢嵌入模型免費，僅文件首次寫入和大型語言模型生成答案需付費，具備良好的成本效益。",
        "作為託管解決方案，Gemini File Search 無法確保數據的隱私安全，因此不適用於處理高度敏感或機密文件。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": true,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "mixed",
      "title": "Google 全托管 RAG 来了！Gemini File Search：真正的零门槛 RAG！更快、更便宜！",
      "channel": "陶渊小明",
      "channelUrl": "https://www.youtube.com/channel/UCqccJHWokUkv2ZaQjgRkB3A",
      "duration": "12:35",
      "durationSeconds": 755,
      "publishedAt": "2025-11-22",
      "description": "Gemini File Search 是谷歌最新推出的托管式 RAG 方案，只需简单几行 API 调用，就能让你的应用瞬间获得“知识库级别”的回答能力。\n无需向量数据库、无需文档切片、无需写检索逻辑，全部由 Gemini 自动完成。\n无论是搭建知识库、AI 客服，还是企业内部文档问答，它都能快速上线 ⚡️\n\n✨ 本期内容亮点\n• 零成本构建 RAG 系统\n• 全托管式 File Search 工作逻辑\n• 在线 DEMO 实测\n• 本地项目运行教程\n• 参数进阶设置与成本分析\n\n📚 相关资源链接\n官方示例应用：Ask the Manual\nhttps://aistudio.google.com/apps/bundled/ask_the_manual\n\n官方文档（开发者）\nhttps://ai.google.dev/gemini-api/docs/file-search\n\n官方介绍\nhttps://blog.google/technology/developers/file-search-gemini-api/\n\n⏱ 视频章节\n00:00 内容介绍\n00:39 RAG介绍\n03:51 G",
      "status": "available"
    },
    {
      "id": "2BRioIP79SA",
      "url": "https://www.youtube.com/watch?v=2BRioIP79SA",
      "thumbnail": "https://img.youtube.com/vi/2BRioIP79SA/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/2BRioIP79SA/maxresdefault.jpg",
      "primaryFolder": "Docker",
      "allFolders": [
        "Docker"
      ],
      "tags": [
        "Docker",
        "容器化",
        "Dockerfile",
        "Docker Hub",
        "WSL",
        "Python Flask"
      ],
      "addedAt": "2026-05-10",
      "summary": "此系列影片提供 Docker 實作教學，從 Windows 11 上安裝 Docker Desktop (包含 WSL 設定) 開始。影片詳細示範如何從 Docker Hub 拉取並執行預建映像檔，並介紹 Docker CLI 的核心指令。接著，教學引導使用者透過 Dockerfile 建立自訂的 Python Flask 網頁應用程式映像檔，並說明 Dockerfile 的關鍵指令。最後，影片展示如何將自訂映像檔推送到 Docker Hub，以及如何使用 `docker exec` 和 `docker logs` 指令來檢查和管理運行中的容器。",
      "key_points": [
        "在 Windows 11 上安裝 Docker Desktop，包括啟用 WSL 和虛擬化平台。",
        "學習 Docker CLI 的基本指令，用於拉取、執行、列出、停止和刪除容器與映像檔。",
        "理解 Dockerfile 的結構與常用指令，以建立自訂的應用程式映像檔。",
        "將本地建立的 Docker 映像檔推送到 Docker Hub 進行分享和部署。",
        "使用 `docker exec` 進入運行中的容器執行指令，並透過 `docker logs` 檢查容器日誌。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": false,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "Docker 實作全集 #1~#5｜25分鐘一次學會 Docker 新手完整教學",
      "channel": "上班了啊哈",
      "channelUrl": "https://www.youtube.com/channel/UCjguLQ886u9X-gSucGgmVFw",
      "duration": "25:12",
      "durationSeconds": 1512,
      "publishedAt": "2025-09-17",
      "description": "這支影片是 Docker 實作 #1 ~ #5 的完整合集 🎉\n如果你是新手，這一支就能讓你一次學完 Docker 基礎！\n\n📌 本影片包含內容：\n#1 4分鐘安裝 Docker Desktop\n#2 Image 轉 Container（docker pull / run / ps / stop / rm）\n#3 打包自己的 Image（Dockerfile 基礎教學）\n#4 docker build、docker login、docker push\n#5 docker exec、docker logs 進入容器內部操作\n\n👉 建議新手從頭看到尾，快速掌握 Docker 的核心操作。\n👉 如果想單獨看某一集，可以到我的頻道播放清單。\n\ndocker image下載網站:  https://hub.docker.com/\n\npython網站: vsn80395/hiahagowork-web \n\ndos遊戲網站: dosgame-web-docker\n\n\n#docker\n#Docker 教學\n#Docker 新手\n#容器化\n#DevOps\n#Docker Desktop\n#dockerf",
      "status": "available"
    },
    {
      "id": "D-VEcKZ3NV0",
      "url": "https://www.youtube.com/watch?v=D-VEcKZ3NV0",
      "thumbnail": "https://img.youtube.com/vi/D-VEcKZ3NV0/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/D-VEcKZ3NV0/maxresdefault.jpg",
      "primaryFolder": "N8N",
      "allFolders": [
        "N8N"
      ],
      "tags": [
        "n8n",
        "Docker",
        "Google Cloud Platform",
        "OAuth 2.0",
        "VPS",
        "Cloud Deployment"
      ],
      "addedAt": "2026-05-10",
      "summary": "影片展示如何透過 Docker 在本地端架設 n8n 自動化平台，並詳細說明如何匯入既有工作流程。此外，影片也教學如何在 Google Cloud Platform 建立 OAuth 憑證，以解決本地端 n8n 存取 Google Calendar 和 Gmail API 的權限問題。最後，影片介紹了 Hostinger 作為雲端部署 n8n 的替代方案，強調其成本效益與穩定性。",
      "key_points": [
        "使用 Docker 在本地端安裝並啟動 n8n 服務。",
        "設定 n8n 的容器名稱、連接埠與資料儲存路徑。",
        "在 Google Cloud Platform 建立並設定 OAuth 憑證，以授權 n8n 存取 Google Calendar 和 Gmail API。",
        "將現有 n8n 工作流程匯入本地端或雲端部署的 n8n 實例。",
        "介紹 Hostinger 作為雲端部署 n8n 的一鍵安裝解決方案，並比較其與官方方案的成本。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": null,
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": true
      },
      "practicality_score": 8,
      "abstraction_level": "hands_on",
      "title": "學會 n8n 為你省下 80% 時間！(EP.3) 「本地安裝」/「雲端部署」比你想的還要簡單！",
      "channel": "PAPAYA 電腦教室",
      "channelUrl": "https://www.youtube.com/channel/UCdEpz2A4DzV__4C1x2quKLw",
      "duration": "9:18",
      "durationSeconds": 558,
      "publishedAt": "2025-08-11",
      "description": "🔹 內容綱要\n00:00 下載 Docker\n01:34 設定 n8n Container\n03:33 在 Google Cloud 設定 API 和憑證\n07:26 Hostinger 雲端部署 n8n\n\n🔹 連結列表\nn8n 官網 https://n8n.io/\nDocker https://www.docker.com/\nGoogle Cloud Console https://console.cloud.google.com/\nHostinger https://www.hostinger.com/vps/n8n-hosting\nn8n 第一集影片 https://youtu.be/r9mi3ZJIWbg\nn8n 第二集影片 https://youtu.be/sRU6Y7DXkLI\n\n🔹 請 Papaya 喝咖啡 ☕️\nhttps://buymeacoffee.com/papayaclass\n\n🔹 頻道會員影片目錄\nhttps://bit.ly/3PaC4Jj\n\n#教學 #n8n #Automation #AIAgent #AI #Agent #Hostinger #Deplo",
      "status": "available"
    },
    {
      "id": "_uSPwcL1vzw",
      "url": "https://www.youtube.com/watch?v=_uSPwcL1vzw",
      "thumbnail": "https://img.youtube.com/vi/_uSPwcL1vzw/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/_uSPwcL1vzw/maxresdefault.jpg",
      "primaryFolder": "N8N",
      "allFolders": [
        "N8N"
      ],
      "tags": [
        "AI Agent",
        "Workflow Automation",
        "n8n",
        "Model Context Protocol (MCP)",
        "Docker",
        "LLM Integration"
      ],
      "addedAt": "2026-05-10",
      "summary": "此影片詳細介紹如何使用Docker本地部署n8n工作流自動化平台，並配置其全新的Model Context Protocol (MCP) 功能。影片示範了如何建立MCP Server與Client工作流，將AI代理（例如OpenAI GPT-4.1 mini）與GitHub、Telegram和Gmail等外部服務整合，實現自動化操作與數據查詢。此外，也展示了如何將n8n的MCP Server功能嵌入到Cherry Studio、Claude和Cursor等第三方AI工具中，以簡化配置並提升靈活性。",
      "key_points": [
        "n8n平台透過Docker進行本地部署，以啟用Model Context Protocol (MCP) 功能。",
        "詳細配置n8n的MCP Server與Client工作流，實現AI代理與外部服務的整合。",
        "示範如何利用AI代理（如OpenAI GPT-4.1 mini）自動化操作GitHub，包括創建Issue和查詢項目指標數據。",
        "展示如何配置Telegram和Gmail節點，以透過AI代理發送訊息和電子郵件。",
        "說明如何在Cherry Studio、Claude和Cursor等第三方AI工具中連接並使用n8n的MCP Server。"
      ],
      "content_type": "tutorial",
      "has_code": true,
      "has_real_company_case": false,
      "company_mentioned": "n8n",
      "production_signals": {
        "discusses_cost": true,
        "discusses_latency": false,
        "discusses_reliability": false,
        "discusses_evaluation": false,
        "discusses_failure_modes": false
      },
      "practicality_score": 7,
      "abstraction_level": "hands_on",
      "title": "[AI工作流Plus] n8n MCP 新玩法！完整部署流程 + 实战演示｜手把手教你玩转 n8n 自动化新功能",
      "channel": "陶渊小明",
      "channelUrl": "https://www.youtube.com/channel/UCqccJHWokUkv2ZaQjgRkB3A",
      "duration": "13:56",
      "durationSeconds": 836,
      "publishedAt": "2025-04-22",
      "description": "n8n 正式上线 MCP 功能 🎉 再也不需要依赖社区节点，配置更简单、效率更高！  \n本期视频将从零开始，手把手带你完整体验 n8n MCP 的使用：\n\n✅ 快速部署 n8n 最新版本  \n✅ 配置 MCP Server & Client，打造灵活工作流  \n✅ 实战演示 GitHub 自动化、Telegram 推送、Gmail 邮件发送  \n✅ 与 Cherry Studio、Claude、Cursor 等主流 AI 工具完美集成  \n✅ 支持移动端访问，随时随地操作你的自动化工具！\n\n---\n\n📦 视频中提到的资源链接：\n- 工作流文件：\n  🔗 https://pan.quark.cn/s/18e296216e2d\n\n- Cherry Studio  \n  🔗 https://pan.quark.cn/s/d1416ba85367\n\n---\n\n📌 持续分享更多免费 AI 自动化教程  \n📬 欢迎留言提问，点赞 + 收藏 + 关注支持一下  \n我们下期视频再见！🙌\n\n00:00 n8n MCP 功能介绍\n01:07 部署 n8n 服务\n02:59 搭建 MCP Server\n06",
      "status": "available"
    },
    {
      "id": "tJkOuq4e_vY",
      "url": "https://www.youtube.com/watch?v=tJkOuq4e_vY",
      "thumbnail": "https://img.youtube.com/vi/tJkOuq4e_vY/mqdefault.jpg",
      "thumbnailHQ": "https://img.youtube.com/vi/tJkOuq4e_vY/maxresdefault.jpg",
      "primaryFolder": "AI知識",
      "allFolders": [
        "AI知識"
      ],
      "tags": [],
      "addedAt": "2026-05-10",
      "summary": null,
      "key_points": [],
      "content_type": null,
      "has_code": null,
      "has_real_company_case": null,
      "company_mentioned": null,
      "production_signals": null,
      "practicality_score": null,
      "abstraction_level": null,
      "title": "[影片無法存取]",
      "channel": null,
      "duration": null,
      "durationSeconds": 0,
      "publishedAt": null,
      "status": "unavailable"
    }
  ]
};
