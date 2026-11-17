# SUNNY SIDE 晨光早午餐（template-015-brunch-cafe）

## 1. 樣板介紹
明亮奶油色的雜誌式早午餐咖啡館網站。以「雜誌封面 Hero、編輯式導覽、食譜感菜單跨頁、照片隨筆與版權頁 Footer」為核心，含完整 12 頁繁體中文內容、SEO / OG / Schema，以及可在 `file://` 下運作的手機選單、FAQ 手風琴與表單假送出。

## 2. 適合產業
早午餐咖啡館、輕食餐廳、甜點烘焙坊、咖啡店、複合式餐飲與生活方式選物店。

## 3. 版型說明
- Hero：magazine-cover-hero（左 40% 文案、右 60% 大圖＋圓形徽章）
- Navigation：editorial-top-nav（名牌＋編輯導覽，手機上改左側 drawer）
- Content Rhythm：cover → story → menu → life → visit
- Services：menu-feature-spread（菜單跨頁＋旗艦菜色大圖）
- Portfolio：magazine-editorial-grid（不對稱照片隨筆＋圖說）
- CTA：editorial-inline-visit-link（斜體底線文字連結）
- Footer：magazine-colophon-footer（期號、編輯名單、造訪資訊）

## 4. 12 頁檔案說明
| 檔案 | 頁面 |
|---|---|
| index.html | 首頁（雜誌封面，含 LocalBusiness Schema） |
| about.html | 關於我們 |
| services.html | 菜單料理 |
| service-detail.html | 餐點詳情 |
| portfolio.html | 空間環境 |
| reviews.html | 顧客回饋 |
| faq.html | 常見問題（FAQ 手風琴） |
| booking.html | 線上訂位（表單假送出） |
| process.html | 訂位流程 |
| blog.html | 生活誌 |
| blog-detail.html | 文章內容（Article Schema） |
| contact.html | 聯絡我們（表單假送出） |

## 5. 如何修改品牌名稱
在 12 個 HTML 中搜尋 `SUNNY SIDE`（英文名牌）與 `晨光早午餐`（中文品牌），全部替換即可。首頁的 `<title>`、`og:title`、LocalBusiness Schema 的 `name` 也一併更新。名牌字級可在 `assets/css/style.css` 的 `.masthead-name` 調整。

## 6. 如何替換圖片
所有照片使用 Unsplash URL，格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換各頁 `<img src="...">` 即可。建議維持暖亮色調，並同步更新 alt 文字。圖片清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
目前圖片僅為設計示意，取自 Unsplash 公共資源。正式交付客戶前，請務必替換為客戶自有或已授權圖片，並確認授權範圍。全站圖片已套用暖亮濾鏡，換圖後可視情況調整 `style.css` 中的 `img{filter:...}`。

## 8. 如何修改 Line / IG / 電話
電話出現在各頁的「造訪資訊」、聯絡頁與 footer，請全域搜尋 `02-2700-1234` 替換。社群連結在 footer 的 `.socials` 區塊（IG / FB / LINE），將 `href="#"` 改為實際帳號網址；若要加入 Line 連結，可新增 `<a href="https://lin.ee/...">LINE</a>`。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前是示意區塊。正式上線時，將該 `<div class="map-frame">…</div>` 替換為 Google Maps 的 iframe 嵌入碼（推薦加上 `loading="lazy"`），並保留外層容器寬度。

## 10. 如何修改 SEO title / description
每頁 `<head>` 內都有 `<title>`、`<meta name="description">`、`og:title`、`og:description` 與 `<link rel="canonical">`。依實際網域更新 canonical 網址（目前為 `https://example.com/template-015-brunch-cafe/...`），description 建議維持 60–160 字繁體中文。

## 11. 如何修改 CTA
站內 CTA 主要為斜體底線文字連結（class `inline-link`），文字如「來坐坐 →」「翻開本期 →」。直接修改連結內文字與 `href` 即可；導覽列右側「訂位 →」在 `.nav-book`，手機 drawer 連結在 `<aside class="drawer">` 中。

## 12. ZIP 尚未打包說明
本樣板目前 `hasZip: false`，尚未產生下載用 ZIP。待主導者完成截圖與最終檢查後，再將整個 `template-015-brunch-cafe` 資料夾打包為 `downloads/template-015-brunch-cafe.zip`，並將 `template.json` / `tags.json` 的 `hasZip` 改為 `true`。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
