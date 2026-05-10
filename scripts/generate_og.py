"""
產生 og-image.png（1200×630）用於社群分享預覽。
使用 Pillow + Droid Sans Fallback（支援繁體中文）。

使用：
    python scripts/generate_og.py
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFilter, ImageFont
except ImportError:
    sys.exit("請先 pip install Pillow")

PROJECT_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_PATH = PROJECT_ROOT / "og-image.png"

import sys as _sys
# 允許用 --out 指定輸出檔名（避免 Windows 鎖檔覆蓋失敗）
for _i, _a in enumerate(_sys.argv):
    if _a == "--out" and _i + 1 < len(_sys.argv):
        OUTPUT_PATH = PROJECT_ROOT / _sys.argv[_i + 1]

W, H = 1200, 630

# 中文字型候選（CJK only）
CJK_FONTS = [
    "/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc",
    "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc",
    "C:/Windows/Fonts/msjh.ttc",
    "C:/Windows/Fonts/msjhbd.ttc",
    "/System/Library/Fonts/PingFang.ttc",
]

# 拉丁字型候選（給數字、英文、符號用）
LATIN_FONTS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf",
    "C:/Windows/Fonts/arialbd.ttf",
    "C:/Windows/Fonts/arial.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
]


def find(candidates):
    for p in candidates:
        if Path(p).exists():
            return p
    return None


CJK_PATH = find(CJK_FONTS) or sys.exit("❌ 找不到 CJK 字型")
LATIN_PATH = find(LATIN_FONTS) or sys.exit("❌ 找不到拉丁字型")


def cjk_font(size: int):
    return ImageFont.truetype(CJK_PATH, size)


def latin_font(size: int):
    return ImageFont.truetype(LATIN_PATH, size)


# 為了向後相容（draw_pill 還在用 font()）
def font(size: int):
    return latin_font(size)


def is_cjk(ch: str) -> bool:
    """判斷是否為 CJK 字元（中日韓統一表意文字 + 符號 + 全形）。"""
    code = ord(ch)
    return (
        0x4E00 <= code <= 0x9FFF or      # CJK Unified Ideographs
        0x3400 <= code <= 0x4DBF or      # CJK Extension A
        0x3000 <= code <= 0x303F or      # CJK Symbols and Punctuation
        0xFF00 <= code <= 0xFFEF or      # Halfwidth and Fullwidth Forms
        0x3040 <= code <= 0x30FF         # Hiragana / Katakana
    )


def draw_mixed(draw, xy, text, size, fill, weight_cjk_font=None, weight_latin_font=None):
    """
    混合渲染中英文：每個字根據範圍選對應字型。
    回傳結束的 x 座標。
    """
    cf = weight_cjk_font or cjk_font(size)
    lf = weight_latin_font or latin_font(size)
    x, y = xy
    for ch in text:
        f = cf if is_cjk(ch) else lf
        draw.text((x, y), ch, font=f, fill=fill)
        bbox = draw.textbbox((x, y), ch, font=f)
        x = bbox[2]
    return x


def measure_mixed(draw, text, size):
    """測量混合字串的寬度（不畫，只算）。"""
    cf = cjk_font(size)
    lf = latin_font(size)
    total = 0
    for ch in text:
        f = cf if is_cjk(ch) else lf
        bbox = draw.textbbox((0, 0), ch, font=f)
        total += bbox[2] - bbox[0]
    return total


def lerp(a, b, t):
    return tuple(int(a[i] + (b[i] - a[i]) * t) for i in range(3))


def draw_gradient_bg(img):
    """畫一個從 #f8fafc 到 #f1f5f9 的微微漸層底色。"""
    px = img.load()
    top = (248, 250, 252)
    bot = (241, 245, 249)
    for y in range(H):
        color = lerp(top, bot, y / H)
        for x in range(W):
            px[x, y] = color


def draw_orb(img, cx, cy, radius, color, opacity=0.5):
    """模擬 radial gradient 光暈：畫一個 blurred 圓再 alpha-composite。"""
    orb = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(orb)
    od.ellipse(
        (cx - radius, cy - radius, cx + radius, cy + radius),
        fill=(*color, int(255 * opacity)),
    )
    orb = orb.filter(ImageFilter.GaussianBlur(radius=80))
    img.alpha_composite(orb)


def draw_glass_card(img, x, y, w, h, fill_color, accent_color):
    """畫一張類似網站上的毛玻璃卡片。"""
    card = Image.new("RGBA", (w + 40, h + 40), (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    # 陰影
    cd.rounded_rectangle((20, 30, w + 20, h + 30), radius=20,
                         fill=(15, 23, 42, 18))
    card = card.filter(ImageFilter.GaussianBlur(radius=10))
    img.alpha_composite(card, (x - 20, y - 20))

    # 卡片本體
    cd2 = ImageDraw.Draw(img)
    cd2.rounded_rectangle((x, y, x + w, y + h), radius=20,
                          fill=(255, 255, 255, 178),
                          outline=(226, 232, 240, 200), width=1)
    # 縮圖區
    cd2.rounded_rectangle((x + 20, y + 20, x + w - 20, y + 130),
                          radius=10, fill=accent_color)
    # 標題假內容
    cd2.rounded_rectangle((x + 20, y + 142, x + 200, y + 158),
                          radius=3, fill=(203, 213, 225))
    cd2.rounded_rectangle((x + 20, y + 164, x + 140, y + 176),
                          radius=3, fill=(226, 232, 240))


def draw_pill(img, x, y, text, value, value_color, value_size=22, label_size=16):
    """畫一個 stats pill 徽章。value 用拉丁字型，label 可能含中文。"""
    cd = ImageDraw.Draw(img)
    f_val = latin_font(value_size)
    pad_x, pad_y = 16, 10
    val_bbox = cd.textbbox((0, 0), value, font=f_val)
    val_w = val_bbox[2] - val_bbox[0]
    lab_w = measure_mixed(cd, text, label_size)
    total_w = val_w + 14 + lab_w + pad_x * 2
    total_h = 50

    cd.rounded_rectangle((x, y, x + total_w, y + total_h), radius=12,
                         fill=(255, 255, 255, 200),
                         outline=(203, 213, 225), width=1)
    cd.text((x + pad_x, y + 12), value, font=f_val, fill=value_color)
    draw_mixed(cd, (x + pad_x + val_w + 14, y + 16), text, label_size,
               (71, 85, 105))
    return total_w


def main():
    img = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    draw_gradient_bg(img)

    # 兩個漂浮光暈（仿 site）
    draw_orb(img, 100, -50, 350, (125, 211, 252), opacity=0.55)   # sky
    draw_orb(img, 1100, 700, 400, (196, 181, 253), opacity=0.5)   # violet

    # 右側兩張裝飾卡片
    draw_glass_card(img, 800, 100, 320, 200, (255, 255, 255, 180), (224, 242, 254))
    draw_glass_card(img, 830, 340, 320, 200, (255, 255, 255, 180), (237, 233, 254))

    cd = ImageDraw.Draw(img)

    # 主標題（純拉丁，正常用 latin_font）
    cd.text((80, 130), "AI YouTube", font=latin_font(80), fill=(15, 23, 42))

    # 第二行（純中文，用 cjk_font）
    cd.text((80, 225), "影片收藏", font=cjk_font(80), fill=(98, 65, 198))

    # 副標（混合中英）
    draw_mixed(cd, (80, 335), "AI 自動摘要 · 落地度評分 · 智慧分類", 28, (71, 85, 105))
    draw_mixed(cd, (80, 380), "從 saved 到 used — 用 Gemini 整理 100+ 支 AI 影片",
               22, (100, 116, 139))

    # 三個 stats pills
    x = 80
    w1 = draw_pill(img, x, 470, "支 AI 摘要", "47", (2, 132, 199))
    x += w1 + 12
    w2 = draw_pill(img, x, 470, "美金總成本", "$1.27", (124, 58, 237))
    x += w2 + 12
    w3 = draw_pill(img, x, 470, "2.5 Flash", "Gemini", (5, 150, 105))

    # URL（純拉丁）
    cd.text((80, 580), "ai-youtube-collection.vercel.app",
            font=latin_font(18), fill=(148, 163, 184))

    # 存檔
    img.convert("RGB").save(OUTPUT_PATH, "PNG", optimize=True)
    size_kb = OUTPUT_PATH.stat().st_size / 1024
    print(f"✅ 產出 {OUTPUT_PATH}")
    print(f"   尺寸：{W}×{H}  檔案：{size_kb:.1f} KB")


if __name__ == "__main__":
    main()
