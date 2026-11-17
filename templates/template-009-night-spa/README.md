# AURORA SPA 極光療癒 — 樣板說明（template-009 Night Spa）

---

## 1. 樣板介紹
本樣板是一套深綠色沉浸視覺型的高端 Spa 網站，共 12 個完整繁體中文頁面。設計以「回到，自己。」為核心情緒，透過全螢幕療癒大圖、柔軟圓角、細膩留白與緩慢節奏，為身心療癒品牌建立一個安靜而有溫度的線上空間。

---

## 2. 適合產業
高端 Spa、芳療會館、美容健康中心、身心療癒工作室、冥想與頌缽音頻空間、精品皮膚管理，以及任何強調氛圍與預約轉換的服務業。

---

## 3. 版型說明
- **Layout**：Fullscreen Visual 沉浸視覺型
- **Hero**：fullscreen-serene-visual-hero（滿版療癒圖 + 深綠疊色 + 暗角 + CSS 水波與飄落粒子）
- **Navigation**：首頁為底部懸浮半透明膠囊導覽；內頁為固定頂欄；完整 12 頁收進左側 drawer
- **Services**：ritual-step-list（編號 + 圓形圖示 + 名稱 + 時間 + 價格 + 描述）
- **Portfolio**：ritual-card-soft-grid（兩欄高瘦柔軟圓角卡片，hover 溫和放大）
- **CTA**：soft-centered-booking-cta（細分隔線 + 輕柔標題 + 單一柔軟按鈕）
- **Footer**：serene-centered-footer（置中品牌、營業時間、蓮花水波線條 motif）
- **背景**：dark（`--bg:#08110e`、`--surface:#0e1f19`）
- **字型**：Cormorant Garamond（italic serif 標題）+ Noto Sans TC light（內文）

---

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
| --- | --- | --- |
| index.html | 首頁 | 品牌入口，含哲理、儀式、Gallery、回饋、FAQ 與 CTA |
| about.html | 關於我們 | 品牌起源、三項信念、數據與團隊 |
| services.html | 療程服務 | 六道儀式的完整步數清單 |
| service-detail.html | 療程詳情 | 招牌芳療的深度說明、流程與提醒 |
| portfolio.html | 空間環境 | 兩欄柔軟卡片式空間相簿 |
| reviews.html | 顧客回饋 | 真實口碑、滿意度數據與感謝 |
| faq.html | 常見問題 | 八題 FAQ 手風琴 |
| booking.html | 預約療程 | 線上預約表單（假送出） |
| process.html | 體驗流程 | 五個階段的旅程說明 |
| blog.html | 療癒手記 | 六篇文章卡片 |
| blog-detail.html | 文章內容 | 含 Article schema 的完整文章 |
| contact.html | 聯絡我們 | 資訊、示意地圖與聯絡表單 |

中繼檔：`template.json`、`tags.json`、`prompt.md`、`README.md`，以及 `assets/` 下的 CSS、JS 與圖片來源說明。

---

## 5. 如何修改品牌名稱
1. 在所有 12 個 HTML 中，將 `<span class="brand-en">AURORA</span>` 的文字改為新品牌英文名稱。
2. 將 `<span class="brand-zh">極光療癒</span>` 改為新品牌中文名稱。
3. 同步修改 `<title>`、`<meta name="description">`、`og:title`、`og:description`，以及頁尾 `.footer-brand` 內的品牌文字。
4. 若更改字數，請適度調整 `.brand-en` 的字級與 letter-spacing。

---

## 6. 如何替換圖片
所有照片皆使用 Unsplash URL，格式為：
`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`
替換時：
1. 直接更改 HTML 中 `<img src="...">` 的 URL，或改為您的本地路徑（如 `assets/img/your-photo.jpg`）。
2. 同步更新該圖片的 `alt` 繁體中文說明。
3. 建議維持相近的構圖比例（Hero 橫幅、Gallery 高瘦 4/5 或 3/5、卡片 4/3）。
4. 色調的 filter 定義在 `style.css` 的 `.hero-media img`、`.gallery-item img`、`.card-media img` 等規則，可依新照片調整。

---

## 7. 圖片來源注意事項
本樣板使用 `data/IMAGE-CATALOG.md` 提供的 Unsplash 示意照片，圖片僅供設計展示。正式交付客戶前，請務必替換為客戶自有或已取得授權的圖片。詳細照片 ID 與使用位置請見 `assets/img/image-sources.md`。

---

## 8. 如何修改 Line IG 電話
1. 電話：搜尋所有 HTML 中的 `02-2700-1688` 與 JSON-LD 中的 `+886227001688`，替換為新號碼。
2. Email：搜尋 `hello@aurora-spa.tw` 並替換。
3. 社群：在頁尾 `.socials` 與 `contact.html` 的社群資訊列，替換 `IG`、`LINE`、`FB` 的連結與帳號（目前為 `#` 佔位）。
4. 地址：搜尋 `台北市大安區仁愛路四段 100 號` 並全站替換。

---

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前是示意區塊，顯示地址文字。正式上線時：
1. 至Google 地圖取得嵌入 iframe 代碼。
2. 將 `.map-frame` 的 `<div>` 內容替換為 `<iframe src="..." ...></iframe>`。
3. 在 `style.css` 為 `.map-frame iframe` 加上 `width:100%; height:380px; border:0; border-radius:16px;` 即可。

---

## 10. 如何修改 SEO title description
每個 HTML 的 `<head>` 都含獨立的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與四個 `og:` 標籤。請逐頁修改，勿整站套用相同文字。description 建議 60–160 字繁體中文。JSON-LD 結構化資料亦位於 `<head>`，相應的品牌資訊也需同步更新。

---

## 11. 如何修改 CTA
所有 CTA 按鈕使用 `.btn` 系列 class：`.btn-soft`（主）、`.btn-outline`（次）、`.btn-candle`。按鈕文字目前多為「預約療程 →」。修改時：
1. 直接改 HTML 中的按鈕文字與 `href`。
2. 更改樣式請編輯 `style.css` 的 `.btn` 區塊。
3. 柔軟 CTA 區塊的標題與說明位於各頁的 `.soft-cta` 章節。

---

## 12. ZIP 尚未打包說明
本樣板目前以資料夾形式交付，`template.json` 中 `hasZip` 設為 `false`，`zipFile` 指向 `../../downloads/template-009-night-spa.zip` 做為預留路徑。待主導者統一打包時，再將整個 `template-009-night-spa` 資料夾壓縮為該 ZIP 檔，並將 `hasZip` 改為 `true`。

---

## 13. 生成模型資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
