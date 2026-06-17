#!/usr/bin/env python3
"""網站健康檢查 — 每次自動更新影片後執行，避免「整頁淡藍色空白」再次發生。

檢查項目：
  1. data/videos.js 能被正確解析，且有影片資料。
  2. index.html / preview.html 的 CDN <script> 都有「鎖定版本」
     （react / react-dom / @babel/standalone）。沒鎖版本 → unpkg 會自動升級，
     Babel 升到 8 後瀏覽器內即時編譯會壞掉，整個 React App 不會渲染。

回傳碼：0 = 全部通過；1 = 有問題（會印出明確訊息）。
可單獨執行：  python scripts/verify_site.py
也被 fetch_playlists.py / summarize.py 在最後自動呼叫。
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
JS_PATH = PROJECT_ROOT / "data" / "videos.js"
HTML_FILES = ["index.html", "preview.html"]

# 需要鎖版本的 CDN 套件（套件名 -> 在 unpkg 上的路徑關鍵字）
PINNED_PKGS = {
    "react": "react@",
    "react-dom": "react-dom@",
    "@babel/standalone": "@babel/standalone@",
}
# 偵測「沒鎖版本」的寫法，例如 unpkg.com/react/umd 或 unpkg.com/@babel/standalone/babel.min.js
UNPINNED_RE = re.compile(
    r"unpkg\.com/(?:@babel/standalone|react-dom|react)/",
)


def check_videos_js() -> list[str]:
    errs: list[str] = []
    if not JS_PATH.exists():
        return [f"找不到 {JS_PATH.name}（請先執行 fetch_playlists.py）"]
    text = JS_PATH.read_text(encoding="utf-8")
    m = re.search(r"window\.VIDEOS_DATA\s*=\s*(\{.*\})\s*;?\s*$", text, re.S)
    if not m:
        return ["videos.js 格式異常：找不到 window.VIDEOS_DATA 物件"]
    try:
        data = json.loads(m.group(1))
    except json.JSONDecodeError as e:
        return [f"videos.js 不是有效的 JSON：{e}"]
    vids = data.get("videos")
    if not isinstance(vids, list) or len(vids) == 0:
        errs.append("videos.js 裡沒有任何影片資料")
    return errs


def check_cdn_pins() -> list[str]:
    errs: list[str] = []
    for fname in HTML_FILES:
        fpath = PROJECT_ROOT / fname
        if not fpath.exists():
            continue
        html = fpath.read_text(encoding="utf-8")
        if UNPINNED_RE.search(html):
            errs.append(
                f"{fname}：CDN script 沒有鎖定版本（unpkg 會自動升級，可能導致整頁空白）"
            )
        for pkg, needle in PINNED_PKGS.items():
            if needle not in html:
                errs.append(f"{fname}：找不到鎖定版本的 {pkg}（應為 {needle}<版本>）")
    return errs


def verify(verbose: bool = True) -> bool:
    errs = check_videos_js() + check_cdn_pins()
    if errs:
        if verbose:
            print("\n❌ 網站健康檢查未通過：")
            for e in errs:
                print(f"   - {e}")
            print("   詳見 README.md → 疑難排解")
        return False
    if verbose:
        print("\n✅ 網站健康檢查通過（videos.js 有效、CDN 版本已鎖定）")
    return True


if __name__ == "__main__":
    sys.exit(0 if verify() else 1)
