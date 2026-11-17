# HUB 共享空間 — 樣板使用說明（template-023-coworking-space）

白灰現代的開放共享辦公室樣板，以真實場域 Bento 拼貼、modular 點陣與 cobalt 藍、lime 綠雙強調色，呈現明亮、寬敞、有溫度的空間生活感。

---

## 1. 樣板介紹
本樣板為共享辦公室與空間生活品牌量身打造，採 LIGHT 白灰現代調性。首頁以「white-gray-open-space-bento-hero」真實場域拼貼開場，輔以數據磁磚、會員方案 Bento、場域長桌與會議室照片牆、社群活動與顧客回饋，共有 12 個內容充實的繁體中文頁面。不同於深色漸層或紫色發光風格的樣板，本樣板以明亮採光、通透留白與幾何點陣建立獨特的建築感與現代辨識度。

## 2. 適合產業
- 共享辦公室、共用工作空間、聯合辦公品牌
- 商務中心、新創育成的空間服務
- 共同工作社群、創意園區、空間租賃
- 以實體場域為核心的工作型態服務

## 3. 版型說明
- **Hero**：`white-gray-open-space-bento-hero`，4 欄真實空間照片 Bento 拼貼，含標題磁磚、200+ 會員數據磚、Wi-Fi 功能磚與 cobalt 預約參觀 CTA 磚。
- **導覽**：`top-modern-nav`，白色 sticky header，左側 HUB 字標與 2×2 方格 mark，右側 cobalt「預約參觀 →」膠囊按鈕；手機漢堡在右側，展開右側 drawer。
- **內容節奏**：Bento Hero → 數據帶 → 會員方案 Bento → 場域長桌牆 → 設施 Bento → 社群活動 → 顧客回饋 → FAQ → 導覽 CTA → modern-grid-footer。
- **CTA**：`bento-tour-button`，以 cobalt 與 lime 的 Bento 磁磚（tour-main + tour-aside）導向 booking.html。
- **Footer**：`modern-grid-footer`，品牌方格 mark、FB / IG / LINE 社群與兩欄繁體連結。
- **RWD**：桌機 4 欄 Bento、平板最多 2 欄、手機全數單欄，照片皆套用 `.photo-bright` 明亮濾鏡。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | Bento Hero、數據帶、會員方案、場域牆、設施、社群活動、回饋、FAQ、導覽 CTA |
| about.html | 關於我們 | 品牌理念、三大設計信念、發展歷程與現代空間照片 |
| services.html | 空間方案 | 四種會員方案 Bento 比較與價格 |
| service-detail.html | 方案詳情 | 固定座位深度介紹、配備磁磚與空間照片 |
| portfolio.html | 場域導覽 | 開放長桌、電話亭、會議室、休息區、露台五大空間 Bento 牆 |
| reviews.html | 顧客回饋 | 會員推薦、評分數據與團隊協作故事 |
| faq.html | 常見問題 | 分組手風琴問答與 FAQPage schema |
| booking.html | 預約參觀 | 場域資訊、預約表單（假送出）與 LocalBusiness schema |
| process.html | 進駐流程 | 四步驟進駐時程說明 |
| blog.html | 社群活動 | 活動專區、文章與活動列表 |
| blog-detail.html | 文章內容 | 單篇文章完整內容與 Article schema |
| contact.html | 聯絡我們 | 聯絡資訊、地圖示意區塊與表單 |

## 5. 如何修改品牌名稱
全文搜尋「HUB 共享空間」與「HUB」取代為新品牌名。各頁 `<header>` 與 Footer 的 `<a class="brand">` 含 `.brand-text`（HUB）與 `.brand-sub`（共享空間）兩段文字，請一併修改；其餘需同步更新之處包含 `<title>`、`og:title`、Footer 的 `<h4>探索 HUB</h4>`、JSON-LD 的 `name` / `publisher`，以及 `template.json`、`tags.json` 中的 `name`。2×2 方格 mark 由 CSS `.brand-mark` 繪製，可保留或換成客戶 LOGO。

## 6. 如何替換圖片
所有照片皆為 Unsplash URL，格式：
`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`
直接替換各頁 `<img src>` 即可，Hero 建議維持 `w=1400`。小心同步更新每張圖片的繁體中文 `alt`；CSS `.photo-bright` 會統一做 saturate(.92) contrast(1.03) 明亮處理，替換照片後色調仍一致。詳細照片清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
本樣板照片僅作為設計示意，來源為 Unsplash 圖庫。正式交付客戶前，請務必替換為客戶自有或已授權的圖片，並確認授權範圍，避免版權爭議；同時檢查 `alt` 文字是否與新畫面相符。照片 ID 與使用位置詳見 `assets/img/image-sources.md`。

## 8. 如何修改 Line / IG / 電話
各頁 Footer 的 `.socials` 中有 FB、IG、LINE 三個連結，目前 `href="#"` 為佔位，請改為實際網址。`contact.html` 的 `.info-row` 與 `booking.html` 的地點資訊列含電話 `02-2700-1688`、信箱 `hello@hubspace.tw`、地址與服務時間，請一併替換；JSON-LD 中的 `telephone`（+886227001688）與 `email` 也需同步更新。社群文字「Facebook · Instagram · Line」同樣可依客戶實際帳號修改。

## 9. 如何修改 Google Map
`contact.html` 的 `.map-frame` 目前為地圖示意區塊，內含 `.pin-big` 標記與「此區為地圖示意，正式上線時請替換為 Google Maps 嵌入。」文字。正式上線時，請將該 `<div class="map-frame">` 內容換成 Google Maps 的 `<iframe>` 嵌入程式碼，並維持容器的固定高度與 `border` 樣式，移除原有標記與提示文字即可。

## 10. 如何修改 SEO title / description
每頁 `<head>` 皆有 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title`、`og:description`、`og:image` 四件套，可個別修改。描述建議維持 60–160 字繁體中文，並將 canonical 與 JSON-LD 中的 `https://example.com` 替換為正式網域。首頁、預約與聯絡頁另有 LocalBusiness / Organization schema，文章頁有 Article schema，常見問題頁有 FAQPage schema，請同步更新其中的名稱與網址。

## 11. 如何修改 CTA
全站主要 CTA 為「預約參觀 →」，皆導向 `booking.html`。按鈕樣式定義於 `style.css` 的 `.btn`、`.btn-cobalt`、`.btn-lime` 與 `.btn-block`。可修改的位置包含：Header 右側 `.btn-cobalt`、右側 drawer 的 `.drawer-cta`、各頁末的 `.tour-main` 大磁磚（cobalt / lime 按鈕）與 `.tour-aside` 資訊磚（如「更多會員故事」「來參觀看看」）。修改按鈕文字與 `href` 即可，`main.js` 另有平滑滾動與表單假送出功能，不需額外設定。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`，下載壓縮檔尚未產生。正式交付時，請將整個 `template-023-coworking-space` 資料夾壓縮為 `../../downloads/template-023-coworking-space.zip`，並將兩個中繼檔的 `hasZip` 改為 `true`、確認 `zipFile` 路徑正確。

## 13. 生成模型資訊
本樣板由 AI 輔助產生，相關模型與日期資訊如下。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
