# 樣板提示文件 — template-020-pet-clinic（毛孩動物醫院）

## 1. 樣板一句話定位
以白綠暖調與可愛肉墊 motif 為核心，為動物醫院與寵物服務打造一個「把毛孩當成家人照顧」的專業信任型網站，用溫暖攝影與清楚服務資訊帶動線上預約掛號。

## 2. 適合產業
動物醫院、寵物診所、獸醫診所、24 小時急診動物醫院、寵物美容、寵物保健、寵物安養、動物護理中心、寵物用品與照護服務。

## 3. 不適合產業
需要大量即時交易與購物車的寵物電商；強調冷調科技或極簡暗黑風格的品牌；純粹以 Night Life 或酒吧氛圍為主的場所；需要高度後端驗證與會員系統的平台。

## 4. 視覺方向
Warm white-green。以 #ffffff 純白為底、#eef6ee 淺綠為表面、#fdf6ea 暖奶油為點綴，友善綠 #4a9a6a 作為行動色，深綠 #24422f 作為文字。字體使用 Nunito 圓潤活潑作標題、Noto Sans TC 作內文。大圓角、柔和陰影、肉墊圖樣、可愛 icon 與溫暖明亮的寵物攝影，營造「專業但親切」的氛圍。絕對不是診所藍、不是黑金、不是奶茶色。

## 5. 色彩策略
- 背景：#ffffff（主）、#f6fbf6（次）、#eef6ee（表面）
- 點綴：#fdf6ea 暖奶油
- 主要文字：#24422f 深綠
- 強調色：#4a9a6a 友善綠（按鈕、圖標、重點、hover）、#3a7d55 深綠（hover 加深）
- 次要文字：#5f7d68 灰綠
- 禁用：臨床藍、黑金、陰謀紫；照片統一套用 `.img-warm` 暖亮濾鏡（saturate 1.06 / brightness 1.06 / sepia .05）

## 6. 版型策略
首頁為 50/50 白綠 Split Hero → 信任數據 → service-split-rows 交替服務列 → 醫師團隊 → 設施畫廊 → 飼主回饋 → FAQ 手風琴 → 綠色 CTA 帶 → 暖綠 Footer。內頁沿用同一字體、色階、圓角、間距、導覽與 Footer，絕不切成一般 Bootstrap 版型。

## 7. Hero Pattern
white-green-warm-split-hero：左側純白面板含「24H 急診 · 毛孩的守護者」 small kicker、圓潤大標「把毛孩，當成家人照顧。」、說明文字、綠色圓角「預約掛號」按鈕＋「認識醫師」outline 按鈕、三組信任數據；右側為獸醫與快樂毛孩的暖調照片，疊加浮動卡「今日門診 · 正常」與肉墊徽章。

## 8. Navigation Pattern
top-booking-nav：白色固定 Header，左側肉墊 mark +「毛孩動物醫院」品牌，中間主選單（深色文字、綠色 hover 底線），右側綠色圓角「預約掛號 →」CTA。手機版漢堡於右側開啟右側 drawer，收納完整 12 個繁體選單標籤。

## 9. Content Rhythm
trust hero → trust stats → services（交替列）→ doctors → facility → testimonials → FAQ → green booking CTA band → warm-green footer。以「信任」開場，「預約」收尾。

## 10. 圖片風格要求
明亮、溫暖、親切的寵物與醫療照護攝影：快樂的狗貓、獸醫與毛孩互動、明亮診間、溫柔美容。照片一律套用暖亮濾鏡，避免陰暗、血腥或過度臨床的畫面。所有圖片皆需有意義的繁體中文 alt。

## 11. 圖片數量要求
全站至少 25 張圖片引用（實際 50 張），分散於各頁；每張皆須有意義 alt，集中使用 IMAGE-CATALOG 的寵物與診所醫療類別照片 ID，並記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
index 首頁（信任 Hero、服務、醫師、設施、回饋、FAQ、CTA）、about 關於我們（理念、價值、歷程）、services 醫療服務（六大服務交替列）、service-detail 服務詳情（健檢深度說明）、portfolio 醫師團隊（醫師與照護成員）、reviews 飼主回饋（真實好評）、faq 常見問題（手風琴）、booking 預約掛號（表單假送出）、process 就診流程（六步驟與急診流程）、blog 寵物知識（文章列表）、blog-detail 文章內容（Article schema）、contact 聯絡我們（資訊、地圖示意、表單）。

## 13. SEO 關鍵字策略
以「動物醫院、寵物診所、獸醫、24H 急診、寵物健檢、疫苗接種、寵物美容、毛孩照護」為核心；每頁皆有完整 title / description / canonical / OG，首頁含 LocalBusiness JSON-LD，文章頁含 Article JSON-LD。

## 14. CTA 策略
warm-booking-button：各頁以綠色圓角「預約掛號」為主要轉換，首頁 Hero、服務、醫師、回饋、FAQ 皆導向 booking.html；最後以綠色 CTA 帶搭配 24H 急診專線電話強化轉換，固定不干擾內容。

## 15. RWD 規則
桌機 Hero 50/50、服務交替列兩欄、卡片三至四欄；平板 Hero 改單欄、卡片兩欄；手機全數單欄，右側 drawer 好點，字級不小於 12px，圖片不破版、按鈕好按。

## 16. 可替換內容
品牌名「毛孩動物醫院」、電話 02-2700-1234、地址、Line / IG / FB、醫師姓名與專長、服務價格、文章內容、飼主回饋與表單欄位，皆可替換為客戶實際資料。

## 17. 禁止事項
禁止簡體字與俄文、韓文等外來詞混入；禁止臨床藍與黑金配色；禁止 generator 批次產生頁面（每頁皆手寫）；禁止「建置中／Coming Soon／內容待補」；禁止依賴後端 API；禁止與其他樣板使用相同 Hero + 三卡片 + FAQ + CTA 的公版結構。

## 18. 與相似樣板的差異說明
不同於 template-014 Family Clinic 的白藍臨床感，也不同於 template-013 Beauty Studio 的奶茶柔和美業；本樣板以白綠暖調、肉墊 motif、浮動門診狀態卡、service-split-rows 交替服務列、醫師與設施畫廊，以及 24H 急診綠色 CTA 帶建立獨特辨識。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
