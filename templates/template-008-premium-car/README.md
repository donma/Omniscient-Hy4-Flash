# T008 Premium Car — VELOCITY 極速車業

## 1. 樣板介紹
黑銀速度感的精品車商商品目錄型樣板。以石墨黑、金屬銀與賽車紅為主色，搭配濃縮無襯線標題、水平速度線與車款規格比較，完整呈現 12 頁繁體中文內容。

## 2. 適合產業
精品車商、進口車代理、性能車與電動車銷售、豪華房車展示中心、汽車連鎖零售與超跑展示。

## 3. 版型說明
- Hero：寬幅車款照片（wide-vehicle-hero），左側漸層與紅色速度線，底部純 CSS 車款分頁
- 導覽：車款分頁式頂部導覽（model-tab-top-nav），右側預約試駕帶紅角
- 內容節奏：車款目錄 → 規格比較 → 相簿 → 性能故事 → 評價 → FAQ → CTA
- 服務區：車款等級欄位（model-trim-columns）
- 作品區：車款規格目錄網格（model-spec-catalog-grid）
- CTA：右側黏著試駕條（sticky-test-drive-cta），手機轉為底部條
- 頁尾：金屬質感經銷商頁尾（sleek-dealer-footer），含展間時間與資訊

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 寬幅 Hero、車款目錄、規格比較、相簿、評價、FAQ |
| about.html | 品牌故事 | 起源、三大堅持、里程碑、展間團隊 |
| services.html | 車款目錄 | 六款車規格網格與完整比較表 |
| service-detail.html | 車款詳情 | VEL-GT 完整規格、外觀內裝、配備 |
| portfolio.html | 車款相簿 | 分類相簿與細節特寫 |
| reviews.html | 車主評價 | 評分總覽、六則評價、車主故事 |
| faq.html | 常見問題 | 四組 FAQ 手風琴（12 題） |
| booking.html | 預約試駕 | 試駕提醒與假送出表單 |
| process.html | 購車流程 | 六步驟時程與準備文件 |
| blog.html | 汽車專欄 | 分類篩選與六篇文章卡 |
| blog-detail.html | 文章內容 | 完整文章與 Article JSON-LD |
| contact.html | 聯絡我們 | 展間資訊、地圖區與表單 |

## 5. 如何修改品牌名稱
在所有 HTML 中搜尋 `VELOCITY` 與 `極速車業` 並取代。替換時請同步修改 `<title>`、OG 標題、`data-page` 外的品牌字標、JSON-LD 的 `name` 以及頁尾文字。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，格式 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `src` 與對應 `alt` 即可。若要換成客戶自有圖，建議維持 16:9 或 21:9 橫幅比例。

## 7. 圖片來源注意事項
圖片僅供設計示意，正式交付前請替換為客戶自有或已授權圖片。來源清單見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
頁尾 `.socials` 的 FB / IG / LINE / YT 連結目前為 `#`，改為實際網址即可。電話 `02-2788-9888` 出現在 JSON-LD、FAQ、展間資訊與頁尾，請一併全域取代。

## 9. 如何修改 Google Map
`contact.html` 的 `.map-frame` 目前使用圖片加覆蓋文字作為示意。改為嵌入地圖時，將 `.map-frame` 內的 `<img>` 與 `.map-overlay` 替換為 Google Maps iframe，並保留外框樣式。

## 10. 如何修改 SEO title description
每一頁 `<head>` 都有獨立的 `<title>`、`meta description`、`canonical`、`og:title`、`og:description`。修改時請保持 description 在 60–160 字之間，並同步更新 `og:title` 與 `og:description`。

## 11. 如何修改 CTA
主要 CTA 為紅色 `.btn-red` 與右側 `.sticky-drive`，目前都指向 `booking.html`。若要導向外部表單或 LINE，請全域搜尋 `href="booking.html"` 並替換。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生 `template-008-premium-car.zip`。待所有稽核完成後，由主導者統一打包下載。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
