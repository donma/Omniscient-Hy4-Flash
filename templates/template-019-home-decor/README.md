# HAVEN 家居選物 · template-019-home-decor

## 1. 樣板介紹
HAVEN 家居選物是一組暖白編輯式的家居選物雜誌型樣板。以自然材質、精緻 Serif 與大量留白，營造 Kinfolk 般的從容質感。全站含 12 個完整繁體中文頁面，本次為「light」背景版本。

## 2. 適合產業
家居選物、家具選品、室內設計、空間規劃、生活方式品牌、織品與陶器選物、軟裝設計、居家選物電商。

## 3. 版型說明
- **Hero**：`warm-white-editorial-hero`，左 42% 暖白文字 / 右 58% 大幅暖調室內照，含垂直編號與照片圖說。
- **Navigation**：`editorial-category-nav`，Serif 字標、細連結、選物車樣式連結；手機為左側 drawer。
- **Content Rhythm**：宣言 → 系列清單 → 空間故事 → 生活提案 → 回饋 → FAQ → 造訪 CTA。
- **Services**：`collection-editorial-list`，列式清單而非卡片。
- **Portfolio**：`editorial-room-story-grid`，12 欄不規則照片網格與 pull-quote。
- **CTA**：`editorial-shop-link`，細底線文字連結與深色 quiet visit band。
- **Footer**：`warm-editorial-footer`，暖色表面、Serif 品牌、專欄、電子報與陶土色線。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
| --- | --- | --- |
| index.html | 首頁 | 暖白 Hero、宣言、系列清單、空間故事、文章、回饋、FAQ、造訪 CTA |
| about.html | 關於我們的 | 品牌緣起、三件相信的事、發展歷程、店面介紹 |
| services.html | 選物系列 | 四大系列列式清單與圖文介紹 |
| service-detail.html | 商品詳情 | 單品圖庫、規格、選物故事、相關推薦 |
| portfolio.html | 空間故事 | 三個家的攝影故事與圖說 |
| reviews.html | 顧客回饋 | 評分統計、多則見證、焦點故事 |
| faq.html | 常見問題 | 分組手風琴，諮詢／配送／保養／售後 |
| booking.html | 選物商店 | 諮詢預約表單（假送出）與來店提醒 |
| process.html | 選購流程 | 四步驟、小物選購、售後照顧 |
| blog.html | 生活提案 | 精選文章與文章網格 |
| blog-detail.html | 文章內容 | 亞麻主題長文，含 Article Schema |
| contact.html | 聯絡我們 | 地址電話、地圖示意、聯絡表單 |

## 5. 如何修改品牌名稱
搜尋所有 HTML 中的 `HAVEN`，替換為新品牌名；同時修改 `<title>`、`og:title`、JSON-LD 的 `name`、Footer 與 drawer 字標。副標「家居選物」可一併替換。

## 6. 如何替換圖片
所有圖片皆為 Unsplash 遠端 URL，格式 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `src` 與對應 `alt`。來源清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片，並確認授權範圍。本樣板使用暖自然濾鏡，替換圖片後可視情況調整 `--warm-filter`。

## 8. 如何修改 Line IG 電話
電話出現在 FAQ、聯絡頁與 JSON-LD，搜尋 `02-2700-1980` 與 `+886227001980` 替換。IG／FB／Line 在 Footer 的 `.socials`，將 `href="#"` 換成實際連結。Email `hello@haven-living.tw` 亦請替換。

## 9. 如何修改 Google Map
`contact.html` 的 `.map-frame` 目前為示意圖片。替換為 Google Map 嵌入 iframe，或更換地圖截圖並更新 `alt`。

## 10. 如何修改 SEO title description
每頁 `<head>` 內的 `<title>`、`<meta name="description">`、`og:title`、`og:description` 與 `<link rel="canonical">` 皆可修改。描述建議維持 60–160 字繁體中文。

## 11. 如何修改 CTA
文字連結使用 `.text-link`（如「探索選物 →」），深色 CTA band 在 `.visit-band`。修改連結 `href` 與文字即可。選物車為展示用，無實際功能。

## 12. ZIP 尚未打包說明
`hasZip` 目前為 `false`。完成客戶客製與圖片授權後，再將整個 `template-019-home-decor` 資料夾打包為 `template-019-home-decor.zip` 並放置於 `downloads/`，同時更新 `template.json` 與 `tags.json` 的 `hasZip` 為 `true`。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
