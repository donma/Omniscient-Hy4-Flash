# T004 Fitness Coach —「IRONFLOW 鐵流訓練」樣板生成提示

## 1. 樣板一句話定位
一個以深色高對比力量感、橘紅與螢光綠侵略性配色、數據信任與真實蛻變成果為核心的健身教練專業形象網站。

## 2. 適合產業
健身教練、私人教練工作室、健身房、體態管理中心、功能性訓練館、運動表現訓練、增肌減脂顧問、結合美容健康的訓練會館。

## 3. 不適合產業
精品餐酒館、爵士酒吧、豪華 Spa 療癒、精品時尚、幼兒教育、醫療診所、金融顧問等需要柔和、溫馨或典雅氣質的產業。

## 4. 視覺方向
深色高對比運動競技感。近黑背景搭配混凝土灰表面， sharp diagonal 斜切線條、大膽粗體字、超大數字。不對稱構圖，左右重量不平衡的張力感；大量使用 clip-path 斜切與對角條紋底紋。

## 5. 色彩策略
- 背景近黑 `#0c0d0f`，表面混凝土灰 `#191b1f`、`#22252a`。
- 主強調橘紅 `#ff5a1f`，用于按鈕、斜切、數字與重點。
- 次要螢光綠 `#d7ff3f`，用于次要數據、檢查標記與滑鼠懸停。
- 文字 `#f4f5f7`，次要 `#a7abb3`。禁止金色、暖棕、粉嫩色。

## 6. 版型策略
Split Trust 專業信任型：左文字右圖像的斜切分割，內容節奏以「成果 → 教練可信度 → 方案 → 數據 → 見證 → FAQ → CTA」推進，強調說服與轉換。

## 7. Hero Pattern
diagonal-split-power-hero：全螢幕高度，左 55% 深色面板以 clip-path 斜切，超大 Barlow Condensed 標題「STRONGER / EVERY DAY」，副標、兩個按鈕（橘紅「開始 Transformation」＋外框「查看成果」）、三組迷你數據。右 45% 全出血運動照片加橘紅 duotone（mix-blend-mode: color）。接縫處一道橘紅斜線貫穿。不置中。

## 8. Navigation Pattern
top-angular-cta-nav：左側粗體字標「IRONFLOW」配橘紅斜槓標記，右側大寫濃縮導覽連結，加上以 clip-path 削角的橘紅「預約體驗」按鈕。手機版為右側 drawer，漢堡按鈕使用橘紅底色確保可見。

## 9. Content Rhythm
transformation-coach-programs-results-reviews-faq-cta：先以 Before/After 成果照建立信任，再介紹教練團隊，接著三階方案卡片、數據指標、學員見證、FAQ，最後以斜切 CTA 收尾。

## 10. 圖片風格要求
高對比運動動態寫實照片，套用灰階（grayscale）、高對比（contrast）與橘紅 duotone 濾鏡的一致性處理。人物以訓練動作、肌肉線條、健身房場景為主，穿插少量美容健康與恢復場景。

## 11. 圖片數量要求
至少 25 張圖片參考，分散於 12 頁，每張皆有繁體中文 alt。使用 IMAGE-CATALOG 之健身類別 Unsplash URL 為主，輔以美容健康類別照片。

## 12. 12 頁內容定位
- index.html 首頁：斜切 Hero、數據帶、蛻變成果、教練信任、方案卡片、指標、見證、FAQ、CTA。
- about.html 教練團隊：教練陣容、專業標準、場域設施。
- services.html 訓練方案：三階方案、包含項目、加值服務。
- service-detail.html 方案詳情：蛻變計劃完整說明、12 週時程、方案 FAQ。
- portfolio.html 學員成果：Before/After 對比網格、數據、故事。
- reviews.html 學員回饋：評分統計、真實見證、留下原因。
- faq.html 常見問題：八題 accordion、諮詢方式。
- booking.html 預約體驗：預約表單、流程說明。
- process.html 訓練流程：六步驟時間軸、第一次到館、追蹤機制。
- blog.html 訓練日誌：精選文章、最新文章列表。
- blog-detail.html 文章內容：完整文章與 Article schema、延伸閱讀。
- contact.html 聯絡我們：聯絡資訊、地圖示意、訊息表單。

## 13. SEO 關鍵字策略
主關鍵字：健身教練、私人教練、台北健身房、體態管理、增肌減脂。每頁設定繁體中文 title、60-160 字 description、canonical、OG 標籤；首頁 LocalBusiness、文章頁 Article JSON-LD。

## 14. CTA 策略
diagonal-cta-panel：橘紅背景、斜切邊緣的寬頻帶，黑色粗體標題與大按鈕，貫穿各頁尾。搭配導覽列削角「預約體驗」按鈕與 Hero 的主要 Transformation 按鈕形成轉換路徑。

## 15. RWD 規則
桌機 2-4 欄，平板最多 2 欄，手機全單欄。Hero 在手機改為上圖下文字堆疊。圖片不破版、卡片不擠壓、按鈕好點、字級不小於 12px。右側 drawer 於小螢幕完整可操作。

## 16. 可替換內容
品牌名 IRONFLOW 鐵流訓練、電話地址、教練姓名與證照、方案價格、學員成果數據、文章內容、社群連結、所有圖片與 alt 皆可替換為客戶實際資訊。

## 17. 禁止事項
禁止使用襯線字體、金色、置中優雅排版、公版三卡片+FAQ+CTA 結構與一般部落格樣式；禁止簡體字；禁止中英混雜（品牌與專有名詞除外）；禁止產生器批次產生頁面。

## 18. 與相似樣板的差異說明
與 template-009 Night Spa 相比，本樣板是高對比橘紅力量感而非深綠療癒；與 template-014 Family Clinic 相比，本樣板是斜切運動張力而非白藍乾淨醫療感。差異體現在 Hero 斜切分割、削角導覽、Before/After 對比網格、階梯方案卡片、斜切 CTA 與粗體Footer 至少六項，不同於參考樣板 template-001 的黑金置中氛圍。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
