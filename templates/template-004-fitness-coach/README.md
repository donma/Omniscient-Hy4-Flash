# IRONFLOW 鐵流訓練 — Fitness Coach 樣板 README

## 1. 樣板介紹
本樣板為深色高對比力量感健身教練網站，品牌為「IRONFLOW 鐵流訓練」。以橘紅 `#ff5a1f` 與螢光綠 `#d7ff3f` 為強調色，搭配近黑與混凝土灰背景，透過斜切線條、超大濃縮標題與真實蛻變成果，建立專業信任與轉換動機。共 12 頁，全部手寫完成。

## 2. 適合產業
健身教練、私人教練工作室、健身房、體態管理中心、功能性訓練館、運動表現訓練、增肌減脂顧問，以及結合美容健康服務的訓練會館。

## 3. 版型說明
- Hero：diagonal-split-power-hero，左斜切深色文字面板、右全出血運動照加橘紅 duotone、橘紅斜線貫穿接縫。
- 導覽：top-angular-cta-nav，左字標加橘紅斜槓、右大寫濃縮連結與削角橘紅 CTA 按鈕。
- 內容節奏：蛻變成果 → 教練可信度 → 三階方案 → 數據指標 → 學員見證 → FAQ → 斜切 CTA。
- 方案：program-tier-cards，三張斜切缺角卡片，中間橘紅強調。
- 作品：before-after-transformation-grid，前後對比照搭配 BEFORE / AFTER 標籤與橘綠括號。
- CTA：diagonal-cta-panel，橘紅斜切頻帶、黑色粗體字。
- Footer：bold-dark-cta-footer，超大「LET'S GET STRONG」字樣與橘紅上邊框。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
| --- | --- | --- |
| index.html | 首頁 | 斜切 Hero、數據帶、蛻變成果、教練、方案、指標、見證、FAQ、CTA |
| about.html | 教練團隊 | 教練陣容、專業標準、場域設施 |
| services.html | 訓練方案 | 三階方案、包含項目、加值服務 |
| service-detail.html | 方案詳情 | 蛻變計劃完整說明、12 週時程、方案 FAQ |
| portfolio.html | 學員成果 | Before/After 對比網格、數據、故事 |
| reviews.html | 學員回饋 | 評分統計、真實見證 |
| faq.html | 常見問題 | 八題 accordion、諮詢方式 |
| booking.html | 預約體驗 | 預約表單（data-fake-submit）、預約流程 |
| process.html | 訓練流程 | 六步驟時間軸、第一次到館、追蹤機制 |
| blog.html | 訓練日誌 | 精選與最新文章列表 |
| blog-detail.html | 文章內容 | 完整文章、Article JSON-LD、延伸閱讀 |
| contact.html | 聯絡我們 | 聯絡資訊、地圖示意、訊息表單 |

## 5. 如何修改品牌名稱
以文字編輯器全域搜尋 `IRONFLOW` 與 `鐵流訓練`，替換為你的品牌名稱。字標位於各頁 `<header>` 的 `.brand` 區塊；頁尾 `.footer-big` 的「LET'S GET STRONG」也一併替換。

## 6. 如何替換圖片
所有圖片使用 Unsplash URL，格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `<img>` 的 `src` 即可；同時更新 `alt` 為符合實際內容的繁體中文描述。一致性濾鏡定義在 `style.css`（grayscale、contrast、mix-blend-mode）。

## 7. 圖片來源注意事項
圖片僅作設計示意，所有照片來自 Unsplash。正式交付客戶前，請替換為客戶自有或已授權圖片，並確認授權範圍。來源清單見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
電話號碼 `02-2700-1888` 出現在各頁頁尾、booking 與 contact 頁面，請逐一替換。社群連結目前為 `#` 佔位，位於 `.socials` 的 `<a href="#">`，改為實際網址即可。

## 9. 如何修改 Google Map
本樣板使用 `contact.html` 中的 `.map-frame` 示意圖區塊。替換其中的 `<img>` 為你的地圖截圖，或嵌入 Google Maps 的 `<iframe>`（需移除現有圖片並調整樣式）。

## 10. 如何修改 SEO title description
每頁 `<head>` 都有 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 og 標籤。請依頁面實際內容替換為 60-160 字繁體中文描述，並將 canonical 網域 `example.com` 改為正式網域。

## 11. 如何修改 CTA
主要 CTA 按鈕文字如「開始 Transformation」「預約體驗」「立即預約」等，分散於 Hero、方案卡片與 `.cta-panel`。搜尋欲修改的文字替換即可；樣式由 `.btn`、`.btn-orange`、`.btn-lime` 控制。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載用 ZIP 檔。正式交付前由主導者統一打包為 `../../downloads/template-004-fitness-coach.zip`，並將 `template.json`、`tags.json` 中的 `hasZip` 更新為 `true`。

## 13. 生成模型資訊

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
