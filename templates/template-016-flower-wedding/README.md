# BLOOM 花綻婚禮｜樣板使用說明

## 1. 樣板介紹
本樣板是一套米白浪漫花藝婚禮形象網站，共 12 個完整頁面。以 CREAM ROMANTIC 為基調，灰玫瑰與鼠尾草綠為強調色，搭配 Great Vibes 手寫字與 Cormorant Garamond 襯線標題，呈現柔美、細膩、高端的花藝婚禮品牌氣質。核心視覺為浪漫花藝拼貼 Hero 與 CSS columns 婚禮作品牆。

## 2. 適合產業
花藝婚禮、婚禮規劃、婚禮顧問、新娘捧花客製、花店、婚紗攝影、婚禮佈置、創意設計工作室、婚宴場地與花藝教學等需要柔美浪漫形象與作品展示的品牌。

## 3. 版型說明
- **LayoutType**：Masonry / Portfolio 作品牆
- **HeroPattern**：romantic-floral-masonry-hero（花藝拼貼 + 奶油面板）
- **NavigationPattern**：centered-script-nav（居中手寫字字標 + 右側漢堡）
- **ContentRhythm**：portfolio-packages-stories-inquiry
- **ServicesLayout**：package-script-cards（三方案手寫字卡片）
- **FooterLayout**：romantic-script-footer（手寫字品牌 + 花藝分隔線）
- **背景模式**：light（淺色浪漫）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
| --- | --- | --- |
| index.html | 首頁 | 花藝拼貼 Hero、作品牆、方案、真實婚禮、日記 |
| about.html | 關於我們 | 品牌理念、設計師團隊、里程碑 |
| services.html | 婚禮服務 | 三大服務與花藝細節 |
| service-detail.html | 方案詳情 | 花藝佈置方案深度說明 |
| portfolio.html | 作品案例 | 完整 Masonry 作品牆與風格分類 |
| reviews.html | 新人回饋 | 推薦語、婚禮故事與滿意度數據 |
| faq.html | 常見問題 | 八題手風琴問答 |
| booking.html | 檔期諮詢 | 諮詢表單（假送出） |
| process.html | 合作流程 | 六階段時程與建議時程 |
| blog.html | 花藝日記 | 六篇文章列表與主題分類 |
| blog-detail.html | 文章內容 | 完整文章與 Article JSON-LD |
| contact.html | 聯絡我們 | 聯絡資訊、表單與地圖區塊 |

## 5. 如何修改品牌名稱
以文字編輯器開啟所有 HTML 檔，將 `BLOOM 花綻婚禮` 替換為你的品牌名；將手寫字 `Bloom`（出現在 `.brand-script`、`.drawer-brand`、Hero、Footer）替換為你的英文品牌字。別忘了同步修改 `<title>`、`<meta description>`、`og:title`、`og:description` 與 JSON-LD 中的 `name`。

## 6. 如何替換圖片
所有圖片皆使用 Unsplash 絕對網址。替換時直接修改 `<img src="...">` 中的網址即可，並同步更新 `alt` 文字。建議維持相近的照片比例（作品牆使用直式與方式混排效果最佳），並保留 `assets/css/style.css` 中的柔和暖色濾鏡以維持一致調性。

## 7. 圖片來源注意事項
目前圖片僅為設計示意，來源記錄於 `assets/img/image-sources.md`。正式交付客戶前，請務必替換為客戶自有或已取得授權的圖片，避免版權爭議。

## 8. 如何修改 Line IG 電話
在全站 HTML 中搜尋 `02-2700-1688`（電話）、`hello@bloomwedding.tw`（信箱）、`Instagram @bloom.wedding`（社群），替換為客戶資料。社群連結目前為 `#`，請改為實際網址。

## 9. 如何修改 Google Map
`contact.html` 中的地圖區塊目前為樣式示意（`.map-frame`），內含地址文字。若要嵌入真實地圖，請將該區塊替換為 Google Maps 嵌入用 `<iframe>`，並保留外層的樣式設定。

## 10. 如何修改 SEO title description
每頁 `<head>` 中都有 `<title>`、`<meta name="description">` 與 `og:title` / `og:description`。請依實際品牌與內容修改，並將 `canonical` 與 `og:image` 更換為正式網域與實際預覽圖路徑。

## 11. 如何修改 CTA
全站主要 CTA 為手寫字連結「聊聊你的婚禮 →」（`.script-link`）與灰玫瑰按鈕（`.btn-rose`）。欲變更文案，直接修改 HTML 中的文字；欲變更顏色，調整 `assets/css/style.css` 中的 `--rose` 與 `.btn-rose`。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`，代表尚未產生下載用 ZIP 檔。待所有樣板完成並通過驗收後，由主導者統一打包至 `../../downloads/template-016-flower-wedding.zip`。

## 13. 生成模型資訊
本樣板由以下模型輔助產生：

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
