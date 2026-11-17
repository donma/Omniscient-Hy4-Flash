# LUMEN AI 樣板（template-006-ai-saas）

## 1. 樣板介紹
LUMEN AI 是一款深色現代風格的 AI SaaS 官網樣板。以紫藍漸層、Bento Grid 資訊版型、玻璃質感卡片與懸浮膠囊導覽列為核心，專為 AI 軟體、科技商務與新創產品打造。所有頁面皆為手寫 HTML，無生成器腳本。

## 2. 適合產業
AI 軟體、SaaS 新創、科技商務、生產力工具、數據分析平台、雲端協作服務，以及需要現代科技形象的數位產品。

## 3. 版型說明
- Hero：gradient-glow-bento-hero（漸層標題 + 雙按鈕 + Bento 展示 + 漂浮光球）
- Navigation：floating-pill-nav（懸浮圓角玻璃導覽 + 右側 drawer）
- Content Rhythm：bento hero → logo wall → bento features → how-it-works → integrations → testimonials → pricing → FAQ → CTA
- Services：bento-feature-tiles（一個 2x2 大磚 + 多個 1x1 小磚）
- Portfolio：logo-wall-case-bento
- Footer：gradient-glow-footer（頂部漸層發光線 + 欄位 + 電子報）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | Bento Hero 與完整轉換漏斗 |
| about.html | 解決方案 / 關於我們 | 公司、願景、價值、團隊 |
| services.html | 產品特色 | Bento 功能磚與 spotlight |
| service-detail.html | 方案詳情 | 定價與比較表 |
| portfolio.html | 客戶案例 | 案例 Bento 與焦點故事 |
| reviews.html | 客戶評價 | 評分統計與推薦語 |
| faq.html | 常見問題 | FAQ 手風琴 |
| booking.html | 免費試用 | 註冊表單 |
| process.html | 使用流程 | 四步驟與最佳實踐 |
| blog.html | 產品部落格 | 文章列表 |
| blog-detail.html | 文章內容 | 完整文章與 Article Schema |
| contact.html | 聯絡我們 | 資訊、表單、地圖 |

## 5. 如何修改品牌名稱
全面搜尋「LUMEN AI」並替換為你的品牌名。亦請更新 `template.json`、`tags.json`、各頁 `<title>`、OG 標籤與 JSON-LD 中的名稱。

## 6. 如何替換圖片
所有照片皆使用 Unsplash URL。直接修改 `<img src="...">` 網址即可，並同步更新 `alt`。來源清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅供設計示意。正式交付前請替換為客戶自有或已授權圖片，並確認授權範圍。詳見 image-sources.md。

## 8. 如何修改 Line IG 電話
頁尾 `.socials` 中的社群連結目前為 `#`，請替換為實際網址。電話與電子郵件出現在 `contact.html` 的聯絡資訊與 JSON-LD 中，請一併更新。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為地圖佔位區。將其內容替換為 Google Map 的 iframe 嵌入代碼即可。

## 10. 如何修改 SEO title description
每頁 `<head>` 中都有獨立的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 OG 標籤。請依實際網域與內容調整。

## 11. 如何修改 CTA
CTA 按鈕統一使用 `.btn.btn-gradient` 或 `.btn.btn-outline`。修改連結 `href` 與按鈕文字即可。主要轉換目標為 `booking.html`。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載用 ZIP。打包時請將整個 `template-006-ai-saas` 資料夾壓縮，並放置於 `downloads/template-006-ai-saas.zip`。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
