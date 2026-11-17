# 樣板施工指南（所有施工者必讀）

本檔定義「技術慣例」與「驗收標準」。每個樣板的「視覺設計」由各自的設計 brief 決定，不要照抄其他樣板。

## 0. 最高原則

1. **逐頁手寫**：每一頁 HTML 都必須 individually 撰寫。禁止編寫任何 generator / 迴圈腳本批次產生 12 頁或 24 套。禁止用 Python / Node / PowerShell 練出一堆 HTML。
2. **獨一無二**：每套必須在 Hero、Navigation、Content Rhythm、Image Strategy、CTA、Portfolio、Services、Footer 至少 4 項與其他樣板不同。禁止「只換色 / 換圖 / 換文案」。
3. **繁體中文**：所有選單、內文、alt、按鈕皆繁體中文。禁止簡體字（例如：出现、体验、没、为、这、来自、灯光、三个）。禁止中英混雜，除非品牌名或專有名詞。
4. **完整 12 頁**：index / about / services / service-detail / portfolio / reviews / faq / booking / process / blog / blog-detail / contact。每頁都要有充實內容，禁止「建置中 / Coming Soon / 內容待補」。
5. **子頁跟首頁同一套設計語言**：同样字體、颜色、間距、卡片、導覽、CTA、Footer。不可首頁高級、子頁變普通 Bootstrap。

## 1. 每套檔案結構

```text
templates/template-XXX-slug/
  index.html, about.html, services.html, service-detail.html,
  portfolio.html, reviews.html, faq.html, booking.html,
  process.html, blog.html, blog-detail.html, contact.html
  template.json
  tags.json
  prompt.md
  README.md
  assets/css/style.css
  assets/css/responsive.css
  assets/js/main.js
  assets/img/image-sources.md
  assets/img/preview.jpg   （先放示意或稍後由主導者截圖）
```

## 2. 每頁 HTML 必備（SEO）

```html
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>品牌名｜頁面名稱</title>
<meta name="description" content="繁體中文描述，60-160 字。">
<link rel="canonical" href="https://example.com/template-XXX-slug/FILE.html">
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="assets/img/preview.jpg">
<!-- 字体 CDN（依設計挑選） -->
<link rel="stylesheet" href="assets/css/style.css">
<link rel="stylesheet" href="assets/css/responsive.css">
</head>
<body>
<header>...</header>
<main>...</main>
<footer>...</footer>
<script src="assets/js/main.js"></script>
</body>
</html>
```

- 首頁只能有一個 `<h1>`；內頁在 page-hero 有一個 `<h1>`。
- 每個 section 要有 `<h2>` 或合理標題。
- 所有 `<img>` 都要有 `alt`。
- 語意化：header / main / section / article / footer。
- 實體店家首頁加 `LocalBusiness` JSON-LD；公司/科技/顧問加 `Organization`；文章頁加 `Article` JSON-LD placeholder。

## 3. JavaScript（main.js）必備功能

- 手機漢堡選單開關（只能左側或右側 drawer，不可蓋 Logo、不可點不到）
- FAQ accordion
- 表單假送出（`form[data-fake-submit]`，preventDefault + 顯示訊息，不真的傳送）
- 平滑滾動（若有錨點）
- 回到頂部（可選）
- 全部能在 `file://` 下運作，不依賴後端 API

## 4. 選單文字顏色（最高優先檢查）

- 深色底：文字用淺色（#f...）或品牌淺色，不能用深灰。
- 淺色底：文字用深色（#2...）或品牌深色，不能用淺灰。
- hover / active / focus / mobile drawer 展開後都要清楚可讀。
- 漢堡按鈕不可與背景同色。

## 5. RWD

- 桌機 2-4 欄、平板最多 2 欄、手機全部單欄。
- 圖片不可破版、卡片不可擠壓、按鈕好點、字級不要小於 12px。
- Header 手機版必須可操作。

## 6. 圖片

- 每套至少 25 張圖片素材，分散在不同頁面。
- 使用 `data/IMAGE-CATALOG.md` 的 Unsplash URL，格式：
  `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`
- 每張要有 alt。不可整站只用 icon / 漸層 / placeholder。
- 在 `assets/img/image-sources.md` 記錄來源（格式見施工文件第 12.4 節）。

## 7. template.json（完整範本）

```json
{
  "id": "template-XXX",
  "slug": "slug",
  "name": "Name",
  "description": "...",
  "industry": "...",
  "industryCategory": "...",
  "colorTheme": "...",
  "backgroundMode": "dark|light",
  "layoutType": "...",
  "heroPattern": "...",
  "navigationPattern": "...",
  "contentRhythm": "...",
  "previewImage": "assets/img/preview.jpg",
  "zipFile": "../../downloads/template-XXX-slug.zip",
  "hasZip": false,
  "promptFile": "prompt.md",
  "pageCount": 12,
  "imageRich": true,
  "status": "candidate",
  "isFeatured": false,
  "isHidden": false,
  "generatedBy": "Hy4 flash Free (opencode-go)",
  "imagePolicy": "圖片僅作為設計示意，正式交付前請替換為客戶自有或授權圖片。",
  "pages": ["index.html","about.html","services.html","service-detail.html","portfolio.html","reviews.html","faq.html","booking.html","process.html","blog.html","blog-detail.html","contact.html"]
}
```

## 8. tags.json

```json
{
  "id": "template-XXX",
  "name": "...",
  "industryCategory": "...",
  "industry": ["...", "..."],
  "colors": ["...", "..."],
  "backgroundMode": "dark|light",
  "features": ["...", "...", "表單假送出", "強 SEO", "圖片豐富"],
  "layout": ["...", "..."],
  "pages": 12,
  "hasZip": false,
  "hasPrompt": true,
  "hasPreview": true,
  "imageRich": true,
  "status": "candidate"
}
```

## 9. prompt.md（18 章節必備）

1. 樣板一句話定位
2. 適合產業
3. 不適合產業
4. 視覺方向
5. 色彩策略
6. 版型策略
7. Hero Pattern
8. Navigation Pattern
9. Content Rhythm
10. 圖片風格要求
11. 圖片數量要求
12. 12 頁內容定位
13. SEO 關鍵字策略
14. CTA 策略
15. RWD 規則
16. 可替換內容
17. 禁止事項
18. 與相似樣板的差異說明

必須明确寫這句：
`本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。`

## 10. README.md（每套自己的）

13 節：樣板介紹 / 適合產業 / 版型說明 / 12 頁檔案說明 / 如何修改品牌名稱 / 如何替換圖片 / 圖片來源注意事項 / 如何修改 Line IG 電話 / 如何修改 Google Map / 如何修改 SEO title description / 如何修改 CTA / ZIP 尚未打包說明 / 生成模型資訊。

生成資訊固定：

```md
## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
```

## 11. 完成前自查

- [ ] 12 個 HTML 都在，且每頁有充實內容
- [ ] 全繁體中文、無亂碼、無簡體字
- [ ] 選單文字對比清楚（含 mobile drawer）
- [ ] 漢堡選單在左或右側
- [ ] 圖片有 alt、無破圖、至少 25 張
- [ ] SEO / OG / Schema placeholder 完整
- [ ] 5 個中繼檔齊全
- [ ] hasZip=false
- [ ] 與其他樣板至少 4 個不同點（見各家 brief 的 differentFrom / differenceReason）
