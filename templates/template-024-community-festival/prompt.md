# 樣板提示文件 — template-024-community-festival（繽紛里 社區節慶）

## 1. 樣板一句話定位
以明亮高彩嘉年華視覺與社區活力為核心，為里民活動、親子節慶與市集組織打造一個溫暖、熱鬧、全家同樂的活動型網站，讓「把日子過成節慶」成為每一次相聚的號召。

## 2. 適合產業
社區節慶、里民活動、活動組織、親子樂園、市集節慶、廟會與民俗慶典、學校園遊會、公益活動、地方創生團體、家庭日活動。

## 3. 不適合產業
需要高度專業權威感的金融、法律與醫療；偏好低調奢華的精品品牌；以夜生活、電子音樂與霓虹為主軸的音樂祭；需要複雜商品規格與結帳流程的電商平台。

## 4. 視覺方向
Bright carnival。白色 #ffffff 為底，搭配陽光黃 #ffd23f、珊瑚橘 #ff6b5b、湖水綠 #2ec4b6、活力紫 #7b5cff 四色積木。字體僅用 Fredoka（圓潤英文與數字）搭配 Noto Sans TC（繁中粗體）。自帶視覺元素包含彩紙 confetti、星芒 starburst、圓角卡片、旋轉貼紙、票券緞帶與 emoji 裝飾。整體 airy、有趣、親子友善，強調溫馨熱鬧而非酷炫暗黑。

## 5. 色彩策略
- 背景：#ffffff（主）、#fffdf7、#fff7e0、#eefaf8、#f3efff（交替區塊）
- 主要文字：深墨 #2b2b3a 與 #4a4a5e（淺底上對比清楚）
- 強調色：黃、橘、綠、紫四色作為卡片邊框、標章、按鈕與裝飾，交互使用
- 禁用：深色底大面積、黑紫霓虹、金色與襯線字風格；照片統一套用 saturate(1.3) 提升鮮豔度

## 6. 版型策略
首頁為繽紛嘉年華 Hero → 彩色票券緞帶 → 精選節目亮點卡 → 六大活動分區 → 數據帶 → 三日行程表 → 會場與交通 → 人氣攤位 → 社區回饋 → FAQ → 「我們不見不散」CTA。內頁沿用相同字體、色彩、間距、導覽、按鈕與彩色 Footer，絕不切換成一般 Bootstrap 版型。

## 7. Hero Pattern
colorful-carnival-hero：滿版明亮節慶人群照（photo-1533174072545 / photo-1501386761578），覆蓋黃橘紫漸層色塊與 CSS confetti。超大白黑混色標題「一起，把日子／過成節慶！」，其中「節慶」以珊瑚橘搭配黃色底線。傾斜日期貼紙「10.03-05 · 河濱公園」、珊瑚橘「免費報名 →」按鈕、飄浮 emoji 與旋轉星芒。底部紫色票券緞帶串接報名 CTA，完全不走暗色路線。

## 8. Navigation Pattern
bright-top-nav：白底 Header、數位黃色底線，左側「繽紛里」三色積木標誌，右側深色導覽文字（12 個繁體標籤完整收錄於右側 drawer），最右為黃色膠囊「活動報名」按鈕。漢堡按鈕為珊瑚橘，與白底形成強烈對比；drawer 由右側滑入，展開後文字皆為深色，清楚可讀。

## 9. Content Rhythm
carnival hero → program highlights → activity zones → stats → schedule by day → venue & traffic → vendor booths → community voices → FAQ → colorful ticket CTA → 我們不見不散 final band。以「玩」為主軸，帶領訪客從吸引、探索到報名。

## 10. 圖片風格要求
節慶人群、遊行、舞台表演、演唱會、美食市集、親子互動、手作與花卉布置。照片明亮、高彩、積極，避免陰暗與低飽和。統一以 CSS filter 提升鮮豔度；每一張都要有意義的繁體中文 alt。

## 11. 圖片數量要求
全站至少 25 張圖片引用（含不同尺寸重複使用於不同頁面），集中使用 IMAGE-CATALOG 的爵士／音樂／舞台／活動、美食、親子、花卉與攝影類別照片 ID，並記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
index 首頁（嘉年華 Hero、節目亮點、活動分區、三日行程、攤位、回饋、FAQ、CTA）；about 關於活動（緣起、理念、歷程、團隊）；services 節目內容（六大活動專區總覽）；service-detail 節目詳情（里民大舞台深度介紹與 Event schema）；portfolio 活動時刻（三日節目卡片與加入行程）；reviews 參與者回饋（家庭、里民心聲與數據）；faq 常見問題（12 題手風琴與 FAQPage schema）；booking 活動報名（表單假送出）；process 報名流程（四步驟）；blog 活動花絮（文章與照片）；blog-detail 文章內容（單篇文章與 Article schema）；contact 聯絡我們（資訊、地圖與表單）。

## 13. SEO 關鍵字策略
以「社區節慶、親子活動、美食市集、舞台表演、手作體驗、運動競賽、河濱公園、免費報名」為核心；每頁 title、description、canonical、OG 完整，一般頁使用 Organization JSON-LD，活動頁使用 Event，文章頁使用 Article，常見問題頁使用 FAQPage。

## 14. CTA 策略
colorful-ticket-button：以珊瑚橘「免費報名 →」與黃色「活動報名」按鈕為主，搭配紫色票券緞帶與「我們不見不散」彩色 CTA band。全站 CTA 按鈕皆可觸發 JS confetti 小驚喜，讓點擊更有節慶感。

## 15. RWD 規則
桌機節目卡與分區三欄、數據四欄；平板兩欄；手機全數單欄。Header 手機版隱藏導覽、顯示珊瑚橘漢堡，右側 drawer 好點、不擋 Logo；字級不小於 12px，圖片不破版，貼紙與 emoji 在手機上改為靜態或縮小。

## 16. 可替換內容
品牌名「繽紛里」、活動日期與地點、電話、Email、Line／IG 連結、活動分區、節目陣容、攤位名稱、回饋語錄、文章內容與表單欄位，皆可替換為客戶實際資料。

## 17. 禁止事項
禁止簡體字與任何非中文贅字出現在選單與內文；禁止 dark neon 與黑紫舞台感（那是 Music Festival）；禁止優雅 serif 與精品感；禁止 generator 批次產生頁面；禁止「建置中／Coming Soon／內容待補」；禁止依賴後端 API。

## 18. 與相似樣板的差異說明
不同於 template-011 Music Festival 的黑紫舞台與海報字體，也不同於 template-018 Language School 的明亮教育方案感；本樣板以白底高彩嘉年華、彩色積木分區、Confetti 與票券緞帶、community voices 與「我們不見不散」CTA 建立獨特辨識，強調鄰里家庭的溫馨熱鬧，而非夜生活或升學氛圍。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
