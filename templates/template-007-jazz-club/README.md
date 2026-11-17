# T007 Jazz Club「BLUE NOTE 藍調俱樂部」樣板說明

## 1. 樣板介紹
本樣板為復古暖琥珀風格的爵士酒吧網站，以黑膠、art-deco 光芒、現場演出時刻表與票根造型 CTA 為核心。深色底搭配奶油白文字，保證對比清楚。共 12 個完整繁體中文頁面，可直接以 `file://` 開啟預覽。

## 2. 適合產業
爵士酒吧、Live House、現場音樂餐廳、餐酒館、黑膠主題空間、小型表演場地。

## 3. 版型說明
- Hero：左黑膠舞台 + 右標題的 `vinyl-stage-atmosphere-hero`，底部跑馬燈。
- 導覽：復古頂部細雙線導覽 `retro-top-nav`，手機左側抽屜。
- 內容節奏：`lineup-listen-schedule-booking`（演出軸 → 聆聽 → 空間 → 菜單 → 評價 → FAQ → 票根 CTA）。
- 服務：垂直演出時間軸 `lineup-timeline`（磚紅日期盒 + 黑膠圖示）。
- 作品：活動海報牆 `event-poster-grid`（art-deco 光芒背景、大小不一）。
- CTA：票根造型 `ticket-stub-cta`。
- Footer：大型黑膠 `vinyl-record-footer`。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 黑膠 Hero、本週演出、聆聽、空間、菜單、評價、FAQ、票根 CTA |
| about.html | 關於我們 | 品牌故事、沿革、團隊 |
| services.html | 節目表 | 本週完整演出時間軸 |
| service-detail.html | 演出詳情 | 單場演出介紹（Event schema） |
| portfolio.html | 活動海報 | 歷年海報牆 |
| reviews.html | 顧客評價 | 評價與媒體推薦 |
| faq.html | 常見問題 | FAQ 手風琴（FAQPage schema） |
| booking.html | 訂位購票 | 訂位表單（示範假送出） |
| process.html | 訂位流程 | 四步驟說明 |
| blog.html | 爵士週記 | 精選與文章列表 |
| blog-detail.html | 文章內容 | 文章內頁（Article schema） |
| contact.html | 聯絡我們 | 地址交通、地圖、訊息表單 |

## 5. 如何修改品牌名稱
以文字編輯器全域搜尋 `BLUE NOTE` 與 `藍調俱樂部`，替換為客戶品牌。需同步修改各頁 `<title>`、og:title、header 字標、footer 與 JSON-LD 的 `name` 欄位。復古字體 Limelight 建議保留英文品牌使用。

## 6. 如何替換圖片
所有圖片為 Unsplash 遠端 URL，集中在 HTML 的 `<img src="...">`。替換為客戶圖片時，請保持 `class="vintage"` 以維持復古濾鏡，並更新繁體中文 `alt`。`assets/img/preview.jpg` 為示意圖，請換成客戶截圖。

## 7. 圖片來源注意事項
目前圖片取自 Unsplash，僅供設計示意。正式交付前，請替換為客戶自有或已授權圖片，避免版權爭議。照片請勿直接使用真實樂手肖像作商業宣傳而未取得授權。

## 8. 如何修改 Line IG 電話
電話出現在各頁 footer、`02-2396-8888`、訂位須知與 contact 頁。Line／IG 連結在 footer 的 `.socials` 區塊（目前為 `#`），請替換為客戶帳號網址，並同步更新 JSON-LD 的 `telephone`。

## 9. 如何修改 Google Map
contact.html 中 `.map-frame` 的 `background-image` 與「在 Google 地圖開啟 →」連結為示意。請替換為客戶地址的地圖嵌入或搜尋連結，並更新地址文字與 JSON-LD 的 `streetAddress`。

## 10. 如何修改 SEO title description
每頁 `<head>` 含 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 og 標籤。請依客戶品牌與 page 主要功能改寫，description 建議 60–160 字繁體中文，並替換 canonical 網域 `example.com`。

## 11. 如何修改 CTA
各頁票根區塊的按鈕文字「訂位入場 →」與連結 `booking.html` 可統一修改。票價 `$480`、場次日期與座位數在 `.ticket-stub` 內，請依客戶實際資訊調整。

## 12. ZIP 尚未打包說明
本樣板目前 `hasZip = false`，尚未產生 `downloads/template-007-jazz-club.zip`。待主導者確認設計與截圖後，再統一打包交付。現階段可直接以資料夾預覽。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
