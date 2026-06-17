"""
Phase 0｜YouTube 播放清單批次抓取
================================
從你提供的播放清單抓出所有影片 metadata，輸出為 data/videos_raw.json。
不含 AI 摘要 — 那是 Phase 3 由 summarize.py 處理。

使用方式：
    1. 在 .env 填入 YOUTUBE_API_KEY
    2. 在 config.json 列出播放清單 URL
    3. python scripts/fetch_playlists.py
"""

from __future__ import annotations

import json
import os
import re
import sys
from datetime import datetime
from pathlib import Path
from typing import Optional
from urllib.parse import parse_qs, urlparse

import requests
from dotenv import load_dotenv

# ---------- 路徑設定 ----------
SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
CONFIG_PATH = PROJECT_ROOT / "config.json"
OUTPUT_PATH = PROJECT_ROOT / "data" / "videos_raw.json"
ENV_PATH = PROJECT_ROOT / ".env"

YT_API_BASE = "https://www.googleapis.com/youtube/v3"


# ---------- 載入設定 ----------
def load_api_key() -> str:
    load_dotenv(ENV_PATH)
    api_key = os.getenv("YOUTUBE_API_KEY")
    if not api_key:
        sys.exit("❌ 找不到 YOUTUBE_API_KEY，請在 .env 設定")
    return api_key


def load_config() -> dict:
    if not CONFIG_PATH.exists():
        sys.exit(f"❌ 找不到 {CONFIG_PATH}，請參考 config.json.example 建立")
    with open(CONFIG_PATH, encoding="utf-8") as f:
        return json.load(f)


# ---------- 工具函式 ----------
def extract_playlist_id(url_or_id: str) -> str:
    """支援貼整段 YouTube URL 或純 playlist ID。"""
    if re.fullmatch(r"[A-Za-z0-9_-]{13,}", url_or_id):
        return url_or_id
    qs = parse_qs(urlparse(url_or_id).query)
    if "list" in qs:
        return qs["list"][0]
    raise ValueError(f"無法解析播放清單 ID: {url_or_id}")


def parse_iso_duration(duration: str) -> tuple[str, int]:
    """ISO 8601 時長 (PT12M34S) → ('12:34', 754)"""
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", duration or "")
    if not m:
        return ("0:00", 0)
    h, mi, s = (int(x) if x else 0 for x in m.groups())
    total = h * 3600 + mi * 60 + s
    return (f"{h}:{mi:02d}:{s:02d}" if h else f"{mi}:{s:02d}", total)


# ---------- YouTube API ----------
def yt_get(endpoint: str, params: dict, api_key: str) -> dict:
    params = {**params, "key": api_key}
    r = requests.get(f"{YT_API_BASE}/{endpoint}", params=params, timeout=10)
    if r.status_code == 403:
        sys.exit("❌ API Key 無效或配額已滿，請檢查 Google Cloud Console")
    r.raise_for_status()
    return r.json()


def get_playlist_meta(playlist_id: str, api_key: str) -> dict:
    data = yt_get("playlists", {"part": "snippet", "id": playlist_id}, api_key)
    items = data.get("items", [])
    if not items:
        raise RuntimeError(f"找不到播放清單（可能是私人或已刪除）: {playlist_id}")
    return items[0]["snippet"]


def get_playlist_video_ids(playlist_id: str, api_key: str) -> list[str]:
    """自動處理分頁，取得清單裡全部影片 ID。"""
    ids: list[str] = []
    token: Optional[str] = None
    while True:
        params = {
            "part": "contentDetails",
            "playlistId": playlist_id,
            "maxResults": 50,
        }
        if token:
            params["pageToken"] = token
        data = yt_get("playlistItems", params, api_key)
        for item in data.get("items", []):
            vid = item["contentDetails"].get("videoId")
            if vid:
                ids.append(vid)
        token = data.get("nextPageToken")
        if not token:
            break
    return ids


def fetch_video_details(video_ids: list[str], api_key: str) -> dict[str, dict]:
    """批次抓影片詳細資訊（一次最多 50 個 ID）。"""
    out: dict[str, dict] = {}
    for i in range(0, len(video_ids), 50):
        chunk = video_ids[i : i + 50]
        data = yt_get(
            "videos",
            {"part": "snippet,contentDetails,status", "id": ",".join(chunk)},
            api_key,
        )
        for item in data.get("items", []):
            out[item["id"]] = item
    return out


# ---------- 組合紀錄 ----------
def build_record(video_id: str, detail: Optional[dict], folders: list[str]) -> dict:
    today = datetime.now().strftime("%Y-%m-%d")
    base = {
        "id": video_id,
        "url": f"https://www.youtube.com/watch?v={video_id}",
        "thumbnail": f"https://img.youtube.com/vi/{video_id}/mqdefault.jpg",
        "thumbnailHQ": f"https://img.youtube.com/vi/{video_id}/maxresdefault.jpg",
        "primaryFolder": folders[0] if folders else "",
        "allFolders": folders,
        "tags": [],
        "addedAt": today,
        # 以下欄位留給 Phase 3 的 summarize.py 填
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

    if detail is None:
        return {
            **base,
            "title": "[影片無法存取]",
            "channel": None,
            "duration": None,
            "durationSeconds": 0,
            "publishedAt": None,
            "status": "unavailable",
        }

    snippet = detail["snippet"]
    content = detail["contentDetails"]
    privacy = detail.get("status", {}).get("privacyStatus", "public")
    duration_str, duration_sec = parse_iso_duration(content.get("duration"))

    return {
        **base,
        "title": snippet["title"],
        "channel": snippet["channelTitle"],
        "channelUrl": f"https://www.youtube.com/channel/{snippet['channelId']}",
        "duration": duration_str,
        "durationSeconds": duration_sec,
        "publishedAt": snippet["publishedAt"][:10],
        "description": (snippet.get("description") or "")[:500],
        "status": "available" if privacy == "public" else "unavailable",
    }


# ---------- 主流程 ----------
AI_FIELDS = [
    "summary", "key_points", "tags", "content_type",
    "has_code", "has_real_company_case", "company_mentioned",
    "production_signals", "practicality_score", "abstraction_level",
]


def load_existing_ai_fields() -> dict[str, dict]:
    """讀現有 videos_raw.json，保留已有的 AI 摘要欄位（避免重跑 fetch 時被洗掉）。"""
    if not OUTPUT_PATH.exists():
        return {}
    try:
        with open(OUTPUT_PATH, encoding="utf-8") as f:
            old = json.load(f)
        preserved = {}
        for v in old.get("videos", []):
            if v.get("summary"):  # 有摘要才需要保留
                preserved[v["id"]] = {k: v.get(k) for k in AI_FIELDS}
        return preserved
    except Exception as e:
        print(f"⚠️  讀舊資料失敗，將全部重抓: {e}")
        return {}


def main():
    print("📥 載入設定...")
    api_key = load_api_key()
    config = load_config()
    playlists = config.get("playlists", [])
    if not playlists:
        sys.exit("❌ config.json 沒有任何播放清單")

    existing_ai = load_existing_ai_fields()
    if existing_ai:
        print(f"📦 偵測到 {len(existing_ai)} 支已摘要影片，AI 欄位將保留")

    print(f"📚 將處理 {len(playlists)} 個播放清單\n")

    # video_id → 出現在哪些 folder
    video_folder_map: dict[str, list[str]] = {}

    for entry in playlists:
        url = entry if isinstance(entry, str) else entry["url"]
        try:
            playlist_id = extract_playlist_id(url)
            meta = get_playlist_meta(playlist_id, api_key)
            folder_name = (
                entry["name"]
                if isinstance(entry, dict) and entry.get("name")
                else meta["title"]
            )
            video_ids = get_playlist_video_ids(playlist_id, api_key)
            print(f"  📂 {folder_name}: {len(video_ids)} 支影片")
            for vid in video_ids:
                video_folder_map.setdefault(vid, []).append(folder_name)
        except Exception as e:
            print(f"  ⚠️  跳過 {url}: {e}")

    if not video_folder_map:
        sys.exit("❌ 沒有抓到任何影片")

    print(f"\n🎬 共 {len(video_folder_map)} 支獨立影片（已去重）")

    print("🔍 正在抓取影片詳細資料...")
    details = fetch_video_details(list(video_folder_map.keys()), api_key)

    records = [
        build_record(vid, details.get(vid), folders)
        for vid, folders in video_folder_map.items()
    ]

    # 把舊資料中的 AI 摘要欄位 merge 回來（fetch 不應該洗掉 summarize 的成果）
    if existing_ai:
        restored = 0
        for r in records:
            if r["id"] in existing_ai:
                r.update(existing_ai[r["id"]])
                restored += 1
        print(f"♻️  保留 {restored} 支影片的 AI 摘要")

    # 按上架日新→舊；無日期的放最後
    records.sort(key=lambda r: r.get("publishedAt") or "0000-00-00", reverse=True)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    payload = {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "total": len(records),
        "available": sum(1 for r in records if r["status"] == "available"),
        "unavailable": sum(1 for r in records if r["status"] == "unavailable"),
        "videos": records,
    }
    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)

    # 同時輸出 .js 版本給 preview.html 直接以 <script> 載入（避免本機 file:// 的 fetch CORS 限制）
    js_path = OUTPUT_PATH.parent / "videos.js"
    with open(js_path, "w", encoding="utf-8") as f:
        f.write("// Auto-generated by fetch_playlists.py — do not edit manually\n")
        f.write("window.VIDEOS_DATA = ")
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print("\n✅ 完成！")
    print(f"   總計：{payload['total']} 支")
    print(f"   可用：{payload['available']} 支（將送 Gemini 摘要）")
    print(f"   失效：{payload['unavailable']} 支（標記後跳過）")
    print(f"   輸出：{OUTPUT_PATH}")

    # 抓完自動做網站健康檢查（videos.js 有效 + CDN 版本已鎖定）
    try:
        from verify_site import verify
        verify()
    except Exception as e:
        print(f"   （略過健康檢查：{e}）")


if __name__ == "__main__":
    main()
