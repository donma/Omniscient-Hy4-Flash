# 安康家庭診所 — 樣板讀我檔（template-014-family-clinic）

## 1. 樣板介紹
這是一套以「白藍專業醫療信任」為核心的診所樣板，品牌設定為「安康家庭診所」。首頁採 55/45 分割信任 Hero，左側傳達信賴感與掛號轉換，右側以明亮診所照片搭配懸浮門診狀態卡。全站以 Noto Sans TC 與 Inter 為字體，色調為純白、醫療藍、柔薄荷與深藍，呈現乾淨、可靠、親切的醫療形象。此樣板為純靜態 HTML/CSS/JS，無需後端。

## 2. 適合產業
家庭醫學診所、社區診所、小兒科診所、內科診所、健康檢查中心、疫苗接種站、慢性病管理機構、美容健康管理與醫美診所。

## 3. 版型說明
- **Layout**：Split Trust 專業信任型
- **Hero**：clean-blue-split-trust-hero（55/45 分割＋懸浮門診卡）
- **Navigation**：top-appointment-nav（白色 header＋右側藍色掛號鈕）
- **Content Rhythm**：trust → service icon cards → doctors → facilities → testimonials → FAQ → appointment CTA
- **Services**：service-icon-cards（3×2 圖示卡）
- **Portfolio**：department-clean-cards（醫師與部門卡）
- **Footer**：trust-column-footer（白藍欄位＋急診提醒）
- **Motif**：藍色十字／加號、圓角卡、柔和陰影

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 內容重點 |
| --- | --- | --- |
| index.html | 首頁 | 分割信任 Hero、服務、醫師、環境、回饋、FAQ、CTA（含 LocalBusiness Schema） |
| about.html | 關於診所 | 品牌故事、三大價值、數據、環境 |
| services.html | 醫療服務 | 六大服務圖示卡、重點服務、品質保證 |
| service-detail.html | 服務詳情 | 健康檢查方案、檢查流程、注意事項 |
| portfolio.html | 醫師團隊 | 8 位醫護介紹、持續進修 |
| reviews.html | 患者回饋 | 六則證言、滿意度統計 |
| faq.html | 常見問題 | 十題手風琴（掛號／健檢／環境） |
| booking.html | 線上掛號 | 掛號表單（假送出）、掛號須知 |
| process.html | 就診流程 | 六步驟、就診準備、小撇步 |
| blog.html | 健康專欄 | 精選文章＋文章列表、訂閱表單 |
| blog-detail.html | 文章內容 | 完整文章（含 Article Schema）與延伸閱讀 |
| contact.html | 聯絡我們 | 診所資訊、地圖、留言表單 |

## 5. 如何修改品牌名稱
以文字編輯器開啟所有 HTML，將「安康家庭診所」替換為您的品牌名；同時替換英文「ANKANG FAMILY CLINIC」、頁尾版權文字，以及各頁 `<title>`、`<meta name="description">`、OG 標題與 JSON-LD 中的 `name` 欄位。

## 6. 如何替換圖片
所有圖片使用 Unsplash URL，集中於 HTML 的 `<img src>` 與少量 `background-image`。直接將網址換成客戶自有或授權圖片路徑（建議放入 assets/img/），並同步更新 `alt` 文字與 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片現在僅為設計示意，來源為 Unsplash（依 IMAGE-CATALOG 診所／醫療類別）。正式對外或交付客戶前，請確保換成客戶自有或已授權的圖片，避免著作權爭議。進行中的示意請見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
電話號碼在 HTML 中以 `02-2512-3456` 出現（頁首 CTA、頁尾、聯絡頁、JSON-LD 的 `+886225123456`），請全面替換。社群連結位於頁尾 `.socials`（Facebook／Instagram／Line 的 `href="#"`），改為實際網址即可；若有 Line@，可另加連結。

## 9. 如何修改 Google Map
在 `contact.html` 的 `.map-frame` 中，更換 `background-image` 為自訂地圖截圖或嵌入 Google Map iframe；其中「在 Google 地圖開啟」連結的 `query` 參數（目前為台北市中山區民生東路二段88號）請改為實際地址。

## 10. 如何修改 SEO title description
每頁 `<head>` 內皆有 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title`／`og:description`。依實際品牌與內容更新，description 建議 60–160 字。首頁另含 `LocalBusiness` JSON-LD，`blog-detail.html` 含 `Article` JSON-LD，請一併更新。

## 11. 如何修改 CTA
主要 CTA 按鈕文字為「線上掛號」，連結指向 `booking.html`；藍色 CTA band 出現在各頁底部，含電話號碼與按鈕。可在各 HTML 中搜尋 `btn-light` 與 `cta-band` 進行調整；電話直接搜尋號碼即可。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載用 ZIP。待所有樣板完成並通過驗收後，由主導者統一打包為 `../../downloads/template-014-family-clinic.zip` 並更新 `template.json` 與 `tags.json` 的 `hasZip`。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
