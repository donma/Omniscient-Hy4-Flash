# 樣板提示文件 — template-023-coworking-space（HUB 共享空間）

## 1. 樣板一句話定位
以白灰現代的「真實開放空間 Bento 拼貼」為核心，為共享辦公室與空間生活品牌打造一個明亮、寬敞、有溫度的模組化資訊網站，讓訪客透過場域、方案與社群看見在這裡工作的日常。

## 2. 適合產業
共享辦公室、共用工作空間、商務中心、新創育成空間、共同工作社群、創意園區、空間租賃、聯合辦公品牌、以實體場域為核心的工作型態服務。

## 3. 不適合產業
需要高度黑暗氛圍或夜生活調性的品牌（如酒吧、夜店）；強調抽象科技與演算法的新創 SaaS；純電商商品目錄；需要大量即時交易與後端串接的金融或訂房平台；高彩度親子或節慶活動品牌。

## 4. 視覺方向
White-gray modern。以 #f7f8f9 為底、#eef0f2 為表面，大面積留白與通透間距。字體使用 Plus Jakarta Sans（幾何無襯線、800 粗標題）+ Noto Sans TC。自視覺元素包含 16px 圓角 Bento 磁磚、3×3 grid-dots 點陣、cobalt 藍與 lime 綠的雙強調色、真實辦公空間照片。整體呈現建築感、乾淨、明亮、寬敞；不是深色漸層、不是紫色 Ai 發光感。

## 5. 色彩策略
- 背景：#f7f8f9（主）、#eef0f2（區塊表面）、#e5e9ee（深度表面）
- 表面：#ffffff（磁磚與卡片）
- 文字：#232936（深石板主色）、#596374（次要）、#8a94a3（弱）
- 強調主色：cobalt #3b5bdb（按鈕、重點字、邊線、Featured 方案）
- 強調副色：lime #b8e04a（點綴、badge、數字、hover 細節），低量使用
- 禁用：深黑漸層、紫色發光、金色、橘色霓虹；照片統一 saturate(.92) contrast(1.03) 明亮乾淨濾鏡

## 6. 版型策略
首頁為 Bento Hero → 數據帶 → 會員方案 Bento → 場域 Bento 牆 → 設施 Bento → 社群活動 → 顧客回饋 → FAQ → 導覽 CTA。內頁沿用同一字體、色階、間距、top-modern-nav 導覽、bento-tour-button CTA 與 modern-grid-footer，絕不切換成一般 Bootstrap 版型。桌機 4 欄 Bento、平板最多 2 欄、手機全數單欄。

## 7. Hero Pattern
white-gray-open-space-bento-hero：不是單一大圖，而是 4 欄 Bento 拼貼。一張 2×2 大圖（photo-1497366754035）左側，右側為標題磁磚「工作，不必一個人。」、200+ 會員數據磚、高速 Wi-Fi 功能磚（cobalt soft）、地面位置磚、引言磚與 cobalt「預約參觀」CTA 磚。小 grid-dots 點陣出現在 badge 與 CTA 磚中，形成 modular 節奏。

## 8. Navigation Pattern
top-modern-nav：白色 sticky header，左側為 HUB 粗體字標與 2×2 方格 mark（cobalt / lime 配色），中間為簡潔繁體連結，右側為 cobalt「預約參觀 →」膠囊按鈕。手機版漢堡於右側，展開右側 drawer，收錄完整 12 個繁體選單標籤，文字皆為深色，對比清楚。

## 9. Content Rhythm
bento hero → stats → membership bento cards → space bento grid → amenities bento → community events → testimonials → FAQ → bento tour CTA → modern-grid-footer。以「 modular 資訊拼貼」推進，兼具資訊密度與呼吸感。

## 10. 圖片風格要求
真實、明亮、乾淨的共享辦公與建築空間照片：開放長桌、落地窗自然光、電話亭、會議室、休息區、露台、團隊協作。色調偏白灰、木質與淺色，避免陰暗、夜景或強烈濁色。所有照片以 `.photo-bright` 統一做 saturate(.92) contrast(1.03) 處理，每張皆須有意義的繁體中文 alt。

## 11. 圖片數量要求
全站至少 25 張圖片引用（含不同頁面重複使用），分散於 Hero、場域、方案、活動、文章、聯絡與細節。集中使用 IMAGE-CATALOG「共同工作 / 辦公空間」「建築 / 空間 / 室內」「科技團隊協作」類別照片 ID，並完整記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
index 首頁（Bento Hero 與完整節奏）、about 關於我們（理念與發展歷程）、services 空間方案（四種方案 Bento 比較）、service-detail 方案詳情（固定座位深度）、portfolio 場域導覽（五種空間 Bento 牆）、reviews 顧客回饋（會員推薦與故事）、faq 常見問題（分組手風琴）、booking 預約參觀（表單假送出）、process 進駐流程（四步驟時程）、blog 社群活動（文章與活動列表）、blog-detail 文章內容（Article schema）、contact 聯絡我們（資訊與表單）。

## 13. SEO 關鍵字策略
以「共享辦公室、共享空間、台北共用工作空間、固定座位、獨立辦公室、會議室出租、coworking、HUB 共享空間」為核心。每頁 title / description / canonical / og 四件套完整，首頁與公司頁使用 LocalBusiness / Organization JSON-LD，文章頁使用 Article JSON-LD placeholder，常見問題頁使用 FAQPage schema。

## 14. CTA 策略
bento-tour-button：頁面中各種 cobalt 與 lime 的 Bento CTA 磁磚（ hero 的「預約參觀」磚、各頁末的 tour-main 大磚 + tour-aside 資訊磚），全部導向 booking.html；最終「來看看」CTA 帶以「與其想像，不如親自走一趟」為號召，形成一致的轉換動線。

## 15. RWD 規則
桌機 Bento 四欄、Featured 方案跨 2×2；平板最多兩欄、Featured 方案跨兩欄；手機全數單欄，漢堡在右側且好點，字級不小於 12px，圓角與間距按比例縮減，圖片 object-fit: cover 不破版。

## 16. 可替換內容
品牌名 HUB、中文名共享空間、CTA 文案、方案名稱與價格（NT$350 / 4,800 / 18,000 / 200）、地址（台北市大安區仁愛路四段 100 號）、電話 02-2700-1688、信箱 hello@hubspace.tw、社群帳號、會員數據、活動標題與文章內容，皆可替換為客戶實際資料。

## 17. 禁止事項
禁止簡體字；禁止深色漸層發光與紫色 Ai 風格；禁止 generator 批次產生頁面；禁止「建置中／Coming Soon／內容待補」；禁止依賴後端 API；禁止中英混雜（品牌名與專有名詞除外）；禁止與其他樣板使用相同 Hero + 三卡片 + FAQ + CTA 的公版結構。

## 18. 與相似樣板的差異說明
不同於 template-006 AI SaaS 的深色紫漸層發光 Bento 與抽象產品 UI，也不同於 template-010 Architecture Dark 的深色建築案例索引；本樣板以白灰真實空間照片 Bento、modular grid-dots、cobalt + lime 雙色、membership 方案磁磚與 space 場域牆建立獨特辨識，是完全不同氣質的輕量現代資訊版。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
