# 圖片來源記錄 — template-009 Night Spa

本樣板所有照片皆取自 `data/IMAGE-CATALOG.md` 提供的 Unsplash 穩定來源。
URL 通用格式：

```
https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80
```

實際使用時依位置調整 `w=` 與 `q=`（Hero 用 `w=1920 / q=85`，一般區塊用 `w=800~1200 / q=80`）。
所有 `<img>` 皆附繁體中文 `alt`，全站共 40+ 個圖片引用，分散於 12 頁。
**圖片僅供設計示意，正式交付前請替換為客戶自有或授權圖片。**

---

## Spa / 療癒 / 美容（主要類別）

### photo-1540555700478-4be289fbecef
- 描述：深綠空間中的芳香石、毛巾與溫暖燭光
- 使用位置：
  - index.html — 首頁 Hero 滿版背景
  - about.html — page-hero 背景
  - service-detail.html — 療程前提醒卡片
  - portfolio.html — 空間 Gallery（雙人療癒室）
  - reviews.html — page-hero 背景
  - blog.html — 文章卡片（香氣）
  - blog-detail.html — page-hero 背景與文章封面
- alt 範例：「深綠色調的療癒空間中，蠟燭與芳香石靜靜陳列」

### photo-1544161515-4ab6ce6db874
- 描述：溫暖燭光與芳香石環繞的靜謐 SPA 室
- 使用位置：
  - index.html — 氛圍 Gallery（靜心接待區）
  - about.html — 三項信念卡片
  - services.html — page-hero 背景
  - portfolio.html — 空間 Gallery（接待區）
  - process.html — page-hero 背景
  - blog.html — 文章卡片（放鬆）
  - blog-detail.html — 芳療空間
- alt 範例：「溫暖燭光與深綠植栽環繞的靜謐SPA室」

### photo-1519823551278-64ac92734fb1
- 描述：芳香精油與毛巾在柔光下整齊陳列
- 使用位置：
  - index.html — 氛圍 Gallery（芳療調配室）
  - about.html — 三項信念卡片
  - service-detail.html — 療程介紹 split
  - services.html — 初次造訪 split
  - portfolio.html — 空間 Gallery（調配室）
  - process.html — 香氣諮詢 split
  - blog.html — page-hero 背景
  - blog-detail.html — 文章內文插圖
- alt 範例：「芳香精油與毛巾整齊陳列的療癒備品」

### photo-1596178065887-1198b6148b2b
- 描述：柔和燈光下鋪設整齊的按摩床
- 使用位置：
  - index.html — 氛圍 Gallery（單人療癒室）
  - about.html — 三項信念卡片
  - services.html — 初次造訪 split
  - service-detail.html — 療程後提醒卡片
  - portfolio.html — 空間 Gallery（單人療癒室）
  - reviews.html — 感謝區 split
  - blog.html — 文章卡片
- alt 範例：「柔軟燈光下鋪設整齊的按摩床」

### photo-1577083552431-6e5fd01aa342
- 描述：深綠植栽與自然材質構成的放鬆角落
- 使用位置：
  - index.html — 氛圍 Gallery（休憩茶區）
  - service-detail.html — 療程中提醒卡片
  - faq.html — page-hero 背景
  - portfolio.html — page-hero 背景與休憩茶區卡片
  - blog.html — 文章卡片（呼吸）
- alt 範例：「深綠植栽與自然材質構成的放鬆角落」

### photo-1596462502278-27bfdc403348
- 描述：療癒師以溫柔雙手為顧客進行芳療按摩
- 使用位置：
  - index.html — 療癒師介紹 split
  - about.html — 團隊 split（flip）
  - service-detail.html — page-hero 背景
  - portfolio.html — 獨立療癒室卡片
  - booking.html — page-hero 背景
  - blog.html — 文章卡片（療癒師手記）
- alt 範例：「療癒師以溫柔雙手為顧客進行肩頸按摩」

### photo-1512496015851-a90fb38ba796
- 描述：禪意的石材與植栽陳設
- 使用位置：
  - about.html — 品牌起源 split
  - portfolio.html — 空間細節 split
  - blog.html — 文章卡片（在家儀式）
  - contact.html — page-hero 背景
- alt 範例：「充滿禪意的療癒空間一角，擺放自然的植栽與石材」

---

## 色彩處理
所有照片在 CSS 中統一套用輕微綠松色調與邊緣柔化，以契合深綠療癒的設計語言：

```css
filter: saturate(.72) hue-rotate(14deg);
box-shadow: inset 0 0 80px 20px rgba(8,17,14,.5);
```

Hero 另疊加深綠色 radial-gradient 與 vignette。若替換照片，可依實際色溫微調 `saturate()` 與 `hue-rotate()`。

---

## 替換提醒
1. 保持 alt 為繁體中文且確實描述圖片內容。
2. 首頁 Hero 建議使用橫幅、主體偏中央的照片，以利文字辨識。
3. Gallery 建議使用直幅（3/5 或 4/5）照片，維持柔軟圓角卡片的節奏。
4. 正式上線前移除所有 Unsplash 示意圖，改用客戶授權素材。
