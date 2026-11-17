# SENTINEL 守衛資安｜資安企業形象樣板（template-002）

## 1. 樣板介紹
本樣板為深色資料信任型資安企業網站，共 12 頁。以深藍黑基底、電光青強調色、Space Mono 等寬字體與 Noto Sans TC 建構出終端機指揮中心風格的品牌形象，特別適合資訊安全與科技商務企業展示實力與建立信任。

## 2. 適合產業
資訊安全、資安託管（MSSP）、SOC 監控、雲端安全顧問、滲透測試、數位鑑識、合規輔導、科技 B2B 與 SaaS 資安產品。

## 3. 版型說明
- **Hero**：dashboard-terminal-hero，左側文案＋四組數據讀數，右側 CSS 資安主控台（含掃描線動畫）。
- **導覽**：left-logo-right-pill-nav，手機版為右側抽屜。
- **內容節奏**：統計 → 威脅情資 → 六大解決方案 → 數據案例 → 客戶評價 → FAQ → CTA。
- **案例**：case-study-data-cards，大數字指標＋產業＋圖片。
- **頁尾**：columned-dense-tech-footer，含「● 所有系統正常」狀態燈。
- **CTA**：Hero 內嵌按鈕＋底部 sticky 橫幅。

## 4. 12 頁檔案說明
| 檔案 | 頁面用途 |
|---|---|
| index.html | 首頁：終端機 Hero、威脅情資、六大方案、案例與 FAQ |
| about.html | 關於我們：公司、團隊、認證與里程碑 |
| services.html | 解決方案：六項核心服務總覽與比較表 |
| service-detail.html | 方案詳情：企業資安託管四層防護架構 |
| portfolio.html | 成功案例：數據化案例與焦點故事 |
| reviews.html | 客戶評價：真實回饋與滿意度統計 |
| faq.html | 常見問題：分類 Q&A 手風琴 |
| booking.html | 預約 Demo：含假送出表單 |
| process.html | 導入流程：六階段標準流程 |
| blog.html | 資安洞察：文章列表與訂閱表單 |
| blog-detail.html | 文章詳情：含 Article JSON-LD |
| contact.html | 聯絡我們：資訊、表單與地圖 |

## 5. 如何修改品牌名稱
以文字編輯器全域搜尋「SENTINEL」與「守衛資安」，替換為新品牌名稱。SVG 盾牌圖示可保留或自行替換。別忘了同步更新各頁 `<title>`、`<meta description>` 與 JSON-LD 中的 name 欄位。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，集中於各 HTML 的 `<img src>`。直接替換網址即可，建議維持 1200–1400 寬度。圖片上的青色網格與掃描線是透過 CSS 的 `.img-frame::after`、`.scanlines::after` 等偽元素疊加，替換圖片後效果會自動保留。

## 7. 圖片來源注意事項
圖片僅供設計示意，來源記錄於 `assets/img/image-sources.md`。正式交付客戶前，請替換為客戶自有或已授權的圖片，並確認授權範圍與 alt 文字正確。

## 8. 如何修改 Line IG 電話
目前電話（02-7701-6688、0800-555-911）與信箱（hello@sentinel-security.tw）出現在 index、contact、faq 等頁的聯絡區塊與 JSON-LD。請逐一搜尋替換。若要加入 Line／IG，可在頁尾 `<ul>` 中新增 `<li><a href="...">LINE</a></li>` 等連結。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前使用示意圖片背景。請替換為實際的 Google Map 嵌入 iframe，或改為客戶提供的地圖圖片，並更新 `.map-label` 中的地址文字。

## 10. 如何修改 SEO title description
每頁 `<head>` 都有獨立的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 OG 標記。依實際品牌與頁面內容修改，description 建議維持 60–160 字繁體中文。

## 11. 如何修改 CTA
按鈕文字多為「預約 Demo →」，出現於 Hero、sticky 橫幅與各章節 callout。可使用編輯器全域搜尋「預約 Demo」一次替換；sticky 橫幅的文案位於各頁底部的 `.sticky-cta` 區塊。

## 12. ZIP 尚未打包說明
本樣板目前 `hasZip: false`，尚未產生下载用 ZIP。正式交付前，請將整個 `template-002-cyber-security` 資料夾打包為 `template-002-cyber-security.zip` 並放置於 `downloads/` 目錄，再把 `template.json` 與 `tags.json` 中的 `hasZip` 改為 `true`。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
