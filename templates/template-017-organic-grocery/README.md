# T017 Organic Grocery — GREEN FIELD 綠田市集

## 1. 樣板介紹
本樣板為「Product Catalog 商品目錄型」的有機商店網站，品牌設定為 GREEN FIELD 綠田市集。整體採淺綠自然配色、圓角磁磚、柔和陰影與 Fraunces 襯線標題，呈現從產地到餐桌的親切自然感。共有 12 個完整繁體中文頁面，無需後端即可在 `file://` 下完整運作。

## 2. 適合產業
有機商店、農產食材零售、生鮮電商、健康食品專賣、社區支持型農場（CSA）、果蔬配送服務、天然堅果與穀物品牌。

## 3. 版型說明
- LayoutType：Product Catalog 商品目錄型
- Hero：fresh-green-catalog-hero（60/40 分割，左文案右拼貼）
- Navigation：top-category-nav（白底 + 分類列 + 左側手機抽屜）
- Content Rhythm：products → origin → values → testimonials → FAQ → shop CTA
- Services：category-tile-grid（六大分類）
- Portfolio：product-card-grid（4 欄商品卡）
- CTA：category-shop-cta + 在地配送資訊帶
- Footer：natural-value-footer（價值列 + 專欄 + 電子報）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | Hero、六分類、本週推薦、產地故事、價值、回饋、FAQ、CTA |
| about.html | 關於我們 | 緣起、里程碑、承諾、團隊 |
| services.html | 商品目錄 | 六大分類與各類商品卡 |
| service-detail.html | 商品詳情 | 大圖、縮圖切換、規格、農友故事 |
| portfolio.html | 產地故事 | 四個產地章節與相簿 |
| reviews.html | 顧客回饋 | 統計、六則評價、料理相簿 |
| faq.html | 常見問題 | 食材／配送／選購 FAQ 手風琴 |
| booking.html | 線上選購 | 選購表單（假送出）、諮詢說明 |
| process.html | 選購流程 | 四步驟、各環節說明 |
| blog.html | 食安專欄 | 文章列表、檢驗承諾 |
| blog-detail.html | 文章內容 | Article schema、完整文章 |
| contact.html | 聯絡我們 | 聯絡資訊、表單、地圖示意 |

## 5. 如何修改品牌名稱
1. 於所有 HTML 的 `<title>`、`og:title`、header 的 `.brand-text`、footer 的 `.footer-brand` 搜尋 `GREEN FIELD` 與 `綠田市集` 並替換。
2. Logo 葉片 mark 為 inline SVG，可於 `.brand-mark svg` 的 `<path>` 替換為自有 Logo。
3. JSON-LD（`index.html`、`contact.html`）中的 `name` 欄位也需同步修改。
4. CSS 品牌色集中於 `assets/css/style.css` 的 `:root` 變數。

## 6. 如何替換圖片
所有圖片使用 Unsplash URL，格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換各 HTML 中 `<img src>` 即可，建議維持 `w=` 與 `q=` 參數以穩定品質。詳細來源見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片。Unsplash 照片遵循其授權條款，商用前請確認授權。所有圖片皆附繁體中文 alt，替换時請同步更新 alt 文字。

## 8. 如何修改 Line、IG、電話
- 電話：搜尋 `02-2700-1788` 並替換（含 JSON-LD 的 `telephone`）。
- 信箱：搜尋 `hello@greenfield.tw` 並替換。
- 社群：於各頁 footer 的 `.socials` 更換 `href`（目前為 `#` 佔位），並替換 `contact.html` 的社群帳號文字。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前為樣式化示意區塊。替換為實際 Google Map embed：將 `<div class="map-frame">…</div>` 改為 Google Maps 產生的 `<iframe>`，並加大寬高樣式即可。

## 10. 如何修改 SEO title、description
每頁 `<head>` 皆有 `<title>`、`meta name="description"`、`link rel="canonical"` 與 OG 標籤。依頁面內容修改，`description` 建議 60–160 字繁體中文。首頁另有 `LocalBusiness`、文章頁有 `Article` JSON-LD，請同步修改其中的 `name`、`description`、`telephone` 等欄位。

## 11. 如何修改 CTA
CTA 按鈕使用 `.btn` 搭配 `.btn-leaf`（綠）、`.btn-earth`（大地色）、`.btn-outline`（描邊）等class。修改文案時直接改按鈕內文字；更換連結時改 `href`。配送資訊帶位於首頁與各 CTA 區塊的 `.delivery-band`。

## 12. ZIP 尚未打包說明
目前 `hasZip` 設為 `false`，尚未產生 `../../downloads/template-017-organic-grocery.zip`。待所有樣板完成並經主導者確認後，再統一打包。打包時請包含本目錄全部 12 頁、中繼檔與 assets 資料夾。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
