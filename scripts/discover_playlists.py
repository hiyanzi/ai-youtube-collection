"""
Phase 0｜自動探索頻道的所有公開播放清單
==========================================
給定 YouTube 頻道 URL、@handle 或 channel ID，自動列出該頻道所有公開
播放清單，並產生 config.json 給 fetch_playlists.py 使用。

使用範例：
    python scripts/discover_playlists.py @HearyLin
    python scripts/discover_playlists.py https://www.youtube.com/@HearyLin
    python scripts/discover_playlists.py UCxxxxxxxxxxxxxxxxxxxxxx
"""

from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from urllib.parse import urlparse

import requests
from dotenv import load_dotenv

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent
ENV_PATH = PROJECT_ROOT / ".env"
CONFIG_PATH = PROJECT_ROOT / "config.json"
YT_API_BASE = "https://www.googleapis.com/youtube/v3"


# ---------- 載入 API Key ----------
def load_api_key() -> str:
    load_dotenv(ENV_PATH)
    key = os.getenv("YOUTUBE_API_KEY")
    if not key:
        sys.exit("❌ 找不到 YOUTUBE_API_KEY，請先在 .env 設定")
    return key


# ---------- 解析輸入 ----------
def parse_channel_input(arg: str) -> tuple[str, str]:
    """
    回傳 (lookup_type, value)：
      ("id", "UC...")        — 24 字元的 channel ID
      ("handle", "@xxx")     — 新版 @ handle
      ("username", "xxx")    — 舊版 /user/xxx
      ("custom", "xxx")      — 舊版自訂 /c/xxx
    """
    arg = arg.strip()

    if arg.startswith("http"):
        path = urlparse(arg).path.strip("/")
        if path.startswith("channel/"):
            return ("id", path.split("/")[1])
        if path.startswith("@"):
            return ("handle", path)
        if path.startswith("user/"):
            return ("username", path.split("/")[1])
        if path.startswith("c/"):
            return ("custom", path.split("/")[1])
        sys.exit(f"❌ 無法解析 URL: {arg}")

    if re.fullmatch(r"UC[A-Za-z0-9_-]{22}", arg):
        return ("id", arg)

    if arg.startswith("@"):
        return ("handle", arg)

    # 沒帶 @ 的純文字 → 假設是 handle
    return ("handle", "@" + arg)


# ---------- API 呼叫 ----------
def yt_get(endpoint: str, params: dict, api_key: str) -> dict:
    r = requests.get(
        f"{YT_API_BASE}/{endpoint}",
        params={**params, "key": api_key},
        timeout=10,
    )
    if r.status_code == 403:
        sys.exit("❌ API Key 無效或配額已滿，請檢查 Google Cloud Console")
    r.raise_for_status()
    return r.json()


def resolve_channel_id(arg: str, api_key: str) -> tuple[str, str]:
    """從各種輸入解析出 channel_id 與 channel_title。"""
    lookup_type, value = parse_channel_input(arg)
    print(f"🔍 解析方式：{lookup_type} = {value}")

    if lookup_type == "id":
        data = yt_get("channels", {"part": "snippet", "id": value}, api_key)
    elif lookup_type == "handle":
        data = yt_get("channels", {"part": "snippet", "forHandle": value}, api_key)
    elif lookup_type == "username":
        data = yt_get("channels", {"part": "snippet", "forUsername": value}, api_key)
    elif lookup_type == "custom":
        # custom URL 沒有直接的 lookup，改用 search（多花 100 quota，極少見）
        data = yt_get(
            "search",
            {"part": "snippet", "q": value, "type": "channel", "maxResults": 1},
            api_key,
        )
        items = data.get("items", [])
        if items:
            return items[0]["snippet"]["channelId"], items[0]["snippet"]["title"]
    else:
        sys.exit(f"❌ 不支援的 lookup type: {lookup_type}")

    items = data.get("items", [])
    if not items:
        sys.exit(f"❌ 找不到對應頻道：{arg}")

    return items[0]["id"], items[0]["snippet"]["title"]


def list_all_playlists(channel_id: str, api_key: str) -> list[dict]:
    """列出該頻道全部公開播放清單（自動分頁）。"""
    out = []
    page_token = None
    while True:
        params = {
            "part": "snippet,contentDetails",
            "channelId": channel_id,
            "maxResults": 50,
        }
        if page_token:
            params["pageToken"] = page_token
        data = yt_get("playlists", params, api_key)
        for item in data.get("items", []):
            out.append({
                "id": item["id"],
                "title": item["snippet"]["title"],
                "video_count": item["contentDetails"]["itemCount"],
                "published_at": item["snippet"]["publishedAt"][:10],
                "url": f"https://www.youtube.com/playlist?list={item['id']}",
            })
        page_token = data.get("nextPageToken")
        if not page_token:
            break
    return out


# ---------- 主流程 ----------
def main():
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(1)

    arg = sys.argv[1]
    api_key = load_api_key()

    print(f"📥 輸入：{arg}\n")
    channel_id, channel_title = resolve_channel_id(arg, api_key)
    print(f"📺 頻道：{channel_title}")
    print(f"🆔 Channel ID：{channel_id}\n")

    print("🔎 列出所有公開播放清單...")
    playlists = list_all_playlists(channel_id, api_key)

    if not playlists:
        sys.exit("❌ 這個頻道沒有公開的播放清單（也可能全是私人的）")

    total_videos = sum(p["video_count"] for p in playlists)
    print(f"\n✅ 找到 {len(playlists)} 個清單，共 {total_videos} 支影片：\n")
    for i, p in enumerate(playlists, 1):
        print(f"  {i:2d}. [{p['video_count']:>3} 支] {p['title']}")

    # 詢問是否覆蓋
    if CONFIG_PATH.exists():
        ans = input(f"\n⚠️  {CONFIG_PATH.name} 已存在，要覆蓋嗎？(y/N): ").strip().lower()
        if ans != "y":
            print("已取消，未寫入檔案。")
            return

    config = {
        "_說明": f"由 discover_playlists.py 自動產生（來源：{channel_title}）",
        "_channel_id": channel_id,
        "_total_videos": total_videos,
        "playlists": [p["url"] for p in playlists],
    }
    with open(CONFIG_PATH, "w", encoding="utf-8") as f:
        json.dump(config, f, ensure_ascii=False, indent=2)

    print(f"\n💾 已寫入 {CONFIG_PATH}")
    print("\n🚀 下一步：")
    print("   1. 想排除哪個清單？開 config.json 把那一行刪掉")
    print("   2. 確認 OK → python scripts/fetch_playlists.py")


if __name__ == "__main__":
    main()
