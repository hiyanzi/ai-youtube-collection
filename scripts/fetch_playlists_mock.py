"""
Phase 0｜Mock 模式 - 用假資料展示 videos_raw.json 的格式
================================
不需要 YouTube API Key，純粹讓你預覽 schema 是否符合需求。
程式邏輯（去重、folder 合併、失效影片標記、依日期排序）跟正式版完全一致。

使用：
    python scripts/fetch_playlists_mock.py
"""

from __future__ import annotations

import json
from datetime import datetime
from pathlib import Path

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
OUTPUT_PATH = PROJECT_ROOT / "data" / "videos_raw.json"


# ---------- Mock 播放清單（模擬你 YouTube 上的 4 個資料夾）----------
# 注意：刻意安排兩支影片同時出現在多個資料夾，
#       以及一支「已刪除」的影片，方便你檢查邊界情況。
MOCK_PLAYLISTS: dict[str, list[tuple]] = {
    "LLM 應用實戰": [
        # (video_id, title, channel, channel_id, published, duration_str, duration_sec)
        ("dQw4w9WgXcQ", "Build a RAG system from scratch in 30 minutes",
         "AI Jason", "UC123abc", "2025-08-15", "27:34", 1654),
        ("AbCdEfGhIjK", "Anthropic Claude API 完整教學：從基礎到 Tool Use",
         "AI Engineering Tutorial", "UC456def", "2025-11-20", "45:12", 2712),
        ("xxxYYYzzz12", "OpenAI Realtime API 即時語音對話實作",
         "Two Minute Papers", "UC789ghi", "2026-01-08", "12:43", 763),
    ],
    "Agent 框架": [
        ("AbCdEfGhIjK", "Anthropic Claude API 完整教學：從基礎到 Tool Use",  # ← 重複
         "AI Engineering Tutorial", "UC456def", "2025-11-20", "45:12", 2712),
        ("MnOpQrStUvW", "LangGraph Multi-Agent 工作流：深度解析",
         "LangChain Official", "UC012jkl", "2025-09-30", "1:18:25", 4705),
        ("123abc456de", "AutoGen vs CrewAI vs LangGraph 三大框架實測",
         "AI Jason", "UC123abc", "2026-02-14", "32:08", 1928),
        ("DELETED_VID", None, None, None, None, None, None),  # ← 失效影片
    ],
    "RAG 實戰": [
        ("dQw4w9WgXcQ", "Build a RAG system from scratch in 30 minutes",  # ← 重複
         "AI Jason", "UC123abc", "2025-08-15", "27:34", 1654),
        ("EmbedDing01", "向量資料庫選擇指南：Pinecone vs Weaviate vs Qdrant",
         "AI Database Talk", "UC234vec", "2025-10-12", "18:55", 1135),
        ("HybridSrch7", "Hybrid Search：BM25 + Vector 混合檢索實作",
         "AI Engineering Tutorial", "UC456def", "2025-12-03", "22:17", 1337),
    ],
    "AI 公司案例": [
        ("KlarnaCase1", "Klarna 如何用 AI Agent 取代 700 位客服員工",
         "AI Product Stories", "UC567klm", "2025-07-22", "15:40", 940),
        ("ShopifyAI88", "Shopify 內部 AI 工具揭秘：Sidekick 怎麼蓋的",
         "Engineering Daily", "UC890eng", "2025-09-05", "28:12", 1692),
        ("NotionAI001", "Notion AI 寫作功能背後的 prompt engineering",
         "AI Product Stories", "UC567klm", "2025-06-18", "19:33", 1173),
        ("SpotifyAI22", "Spotify 推薦系統如何整合 LLM",
         "Engineering Daily", "UC890eng", "2026-03-21", "41:55", 2515),
    ],
}


def build_record(vid_data: tuple, folders: list[str]) -> dict:
    """把 mock tuple 轉成正式 schema。邏輯跟 fetch_playlists.py 完全一致。"""
    today = datetime.now().strftime("%Y-%m-%d")
    video_id = vid_data[0]

    base = {
        "id": video_id,
        "url": f"https://www.youtube.com/watch?v={video_id}",
        "thumbnail": f"https://img.youtube.com/vi/{video_id}/mqdefault.jpg",
        "thumbnailHQ": f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg",
        "primaryFolder": folders[0],
        "allFolders": folders,
        "tags": [],
        "addedAt": today,
        # 以下欄位等 Phase 3 由 summarize.py 填入
        "summary": None,
        "key_points": [],
        "content_type": None,
        "has_code": None,
        "has_real_company_case": None,
        "company_mentioned": None,
        "production_signals": None,
        "practicality_score": None,
        "abstraction_level": None,
    }

    _, title, channel, channel_id, published, duration_str, duration_sec = vid_data

    if title is None:
        # 失效影片
        return {
            **base,
            "title": "[影片無法存取]",
            "channel": None,
            "duration": None,
            "durationSeconds": 0,
            "publishedAt": None,
            "status": "unavailable",
        }

    return {
        **base,
        "title": title,
        "channel": channel,
        "channelUrl": f"https://www.youtube.com/channel/{channel_id}",
        "duration": duration_str,
        "durationSeconds": duration_sec,
        "publishedAt": published,
        "description": "（mock 影片，無真實 description）",
        "status": "available",
    }


def main():
    print("🎭 Mock 模式：產生假資料")
    print(f"📚 模擬 {len(MOCK_PLAYLISTS)} 個播放清單\n")

    # video_id → folders（保留出現順序，第一個是 primary）
    folder_map: dict[str, list[str]] = {}
    raw_data: dict[str, tuple] = {}
    raw_count = 0

    for folder_name, videos in MOCK_PLAYLISTS.items():
        print(f"  📂 {folder_name}: {len(videos)} 支影片")
        raw_count += len(videos)
        for vid_data in videos:
            vid = vid_data[0]
            folder_map.setdefault(vid, []).append(folder_name)
            raw_data[vid] = vid_data  # 同個 vid 重複時會覆蓋，但內容相同

    print(f"\n🎬 共 {len(folder_map)} 支獨立影片（去重前 {raw_count} 筆）")

    records = [build_record(raw_data[vid], folders) for vid, folders in folder_map.items()]
    records.sort(key=lambda r: r.get("publishedAt") or "0000-00-00", reverse=True)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "_note": "⚠️ MOCK 資料，由 fetch_playlists_mock.py 產生，非真實 YouTube 資料",
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "total": len(records),
        "available": sum(1 for r in records if r["status"] == "available"),
        "unavailable": sum(1 for r in records if r["status"] == "unavailable"),
        "videos": records,
    }
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)

    print("\n✅ 完成！")
    print(f"   總計：{payload['total']} 支")
    print(f"   可用：{payload['available']} 支（會送 Gemini 摘要）")
    print(f"   失效：{payload['unavailable']} 支（標記後跳過）")
    print(f"   輸出：{OUTPUT_PATH}")
    print("\n💡 打開 data/videos_raw.json 看看 schema")


if __name__ == "__main__":
    main()
