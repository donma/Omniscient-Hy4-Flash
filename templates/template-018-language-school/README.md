# LINGO 語言學校樣板（template-018-language-school）

## 1. 樣板介紹
明亮藍黃、活潑教育風格的「Pricing-first 方案導向型」樣板。不同於一般大圖 Hero，本樣板在首屏就展示方案定價預覽卡，搭配對話氣泡、星芒、螢光筆底線與 Blob 色塊，讓訪客一眼看懂方案與價格，適合需要清楚呈現定價的語言學校與教育課程。

## 2. 適合產業
語言學校、補習班、線上教學平臺、留學代辦、技能訓練、親子教育中心，以及任何需要以方案定價作為轉換核心的教育服務。

## 3. 版型說明
- Hero：`bright-blue-yellow-pricing-hero`，左文案右定價預覽卡
- 導覽：`playful-top-nav`，白色吸頂列＋黃色報名按鈕，手機右側抽屜
- 內容節奏：`pricing-courses-teachers-enroll`
- 服務版型：`pricing-plan-columns`，三欄方案比較，中間「最受歡迎」藍色強調
- 作品版型：`course-level-cards`，依程度分類的課程卡
- CTA：`pricing-table-cta`，方案按鈕＋最終報名 band
- Footer：`playful-enroll-footer`，藍底與黃色報名按鈕

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 內容重點 |
|---|---|---|
| index.html | 首頁 | 方案預覽 Hero、三欄方案、課程、師資、回饋、FAQ |
| about.html | 關於我們 | 品牌故事、三大理念、里程碑、空間 |
| services.html | 課程介紹 | 程度分級、語言別、口語俱樂部、方案對照 |
| service-detail.html | 方案詳情 | 完整方案比較表、資源比較、方案 FAQ |
| portfolio.html | 師資團隊 | 六位導師介紹、雙語支援說明 |
| reviews.html | 學員回饋 | 滿意度統計、六則學員見證 |
| faq.html | 常見問題 | 報名、上課、繳費三大類手風琴 |
| booking.html | 報名須知 | 線上報名表單（示範假送出） |
| process.html | 上課流程 | 六步驟學習旅程、試聽說明 |
| blog.html | 學習專欄 | 六篇文章列表 |
| blog-detail.html | 文章內容 | 完整文章內文（Article JSON-LD） |
| contact.html | 聯絡我們 | 聯絡資訊、地圖示意、詢問表單 |

## 5. 如何修改品牌名稱
在 12 個 HTML 中搜尋 `LINGO` 與 `LINGO 語言學校`，替換為你的品牌名稱。Logo 標誌的字母 `L` 位於 `<span class="brand-mark"><i>L</i></span>`，可改為你的品牌首字。別忘了同步更新 `<title>`、meta description、OG 標題與 JSON-LD 中的 name 欄位。

## 6. 如何替換圖片
所有圖片皆為 Unsplash 示意圖，網址格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `src` 為你的圖片網址或本地檔案路徑即可。建議保留 `class="bright"` 以維持明亮統一的濾鏡風格。

## 7. 圖片來源注意事項
本樣板圖片僅供設計示意。正式交付客戶前，請務必替換為客戶自有或已授權的圖片。來源清單詳見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
電話（02-2700-1888）、信箱（hello@lingo.tw）、Line@（@LINGO）與社群連結分散在各頁的 Footer、Header 與 contact.html。建議全域搜尋 `02-2700-1888` 與 `hello@lingo.tw` 一次替換。社群圖示連結目前為 `#`，請改為真實網址。

## 9. 如何修改 Google Map
contact.html 中的 `.map-frame` 目前使用示意背景圖與地圖標記。請將 `background-image` 換成實際地圖截圖，或嵌入 Google Map 的 iframe（移除 `.map-pin` 示意內容）。

## 10. 如何修改 SEO title description
每頁 `<head>` 內都有獨立的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 og 標籤。依實際品牌與頁面內容修改，description 建議 60–160 字。canonical 網域 `https://example.com/` 請換成正式網址。

## 11. 如何修改 CTA
主要 CTA 為黃色「免費試聽 · 立即報名」按鈕，一律連結至 `booking.html`。若要改為其他轉換目標（例如 LINE 好友或電話），請全域搜尋 `href="booking.html"` 並替換。方案卡的「選擇此方案」亦可導向不同表單。

## 12. ZIP 尚未打包說明
目前 `hasZip: false`，尚未產生 `template-018-language-school.zip`。待全部樣板完成並通過驗收後，由主導者統一打包下載。壓縮時請包含 12 個 HTML、template.json、tags.json、prompt.md、README.md，以及 assets 目錄（css / js / img）。

## 13. 生成模型資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
