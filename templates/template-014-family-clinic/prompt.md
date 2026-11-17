# 樣板提示文件 — template-014-family-clinic（安康家庭診所）

## 1. 樣板一句話定位
以白藍專業醫療信任感與明亮診所攝影為核心，為家庭診所與美容健康產業打造一個以「線上掛號」為轉換起點的值得信賴信任型網站。

## 2. 適合產業
家庭醫學診所、社區診所、小兒科診所、內科診所、健康檢查中心、疫苗接種站、慢性病管理機構、美容健康管理、醫美診所、復健診所。

## 3. 不適合產業
需要大量即時交易或購物車的電商；強調夜生活、奢華、黑暗氛圍的品牌；需要高度客製化作品集或電影感敘事的創意產業；純學術或政府機構官網。

## 4. 視覺方向
Clean medical white-blue。以 #ffffff 純白為底、#f2f7fb 淺藍灰為表面色，搭配醫療藍 #2b7fc4、柔薄荷 #e8f4ee 與深藍文字 #1b2b3a。圓角但不過度柔軟，層級清晰、讓人安心。自有的藍色十字／加號（plus）motif、clean rounded cards 與柔和陰影貫穿全站。字體統一使用 Noto Sans TC（中文）搭配 Inter（英文與數字），標題粗獷清晰，絕不採用裝飾性 serif。

## 5. 色彩策略
- 背景：#ffffff（主）、#f2f7fb（表面）、#e8f4ee（薄荷強調區塊）
- 主要文字：深藍 #1b2b3a，次要文字 #5b6f80
- 強調色：醫療藍 #2b7fc4（按鈕、圖示、連結、hover），深藍 #155887（CTA band）
- 狀態色：柔薄荷綠 #2f9e6b（門診正常、信賴 badge）
- 確認禁用：奶茶色、腮紅粉、dark 底色、serif display、金色

## 6. 版型策略
首頁為 55/45 分割信任 Hero → 六大服務圖示卡 → 醫師團隊 → 診所環境 → 患者回饋 → FAQ 手風琴 → 藍色預約 CTA 帶。內頁沿用同一字體、色階、間距、頂部掛號導覽與 trust-column Footer，絕不切換成一般 Bootstrap 版型。

## 7. Hero Pattern
clean-blue-split-trust-hero：左側白色面板（55%）含「衛福部認證 · 家庭醫學專科」信賴 badge、粗體大標題「照顧一家人的健康，是我們的事。」、說明文字、兩個按鈕（藍色「線上掛號」＋outline「認識團隊」）與三格信任數據（15 年／8 位醫師／2 萬家庭）；右側（45%）為明亮診所照片，疊加懸浮白卡顯示「今日門診 · 正常」與門診時間，並有淡淡藍色 plus 裝飾。

## 8. Navigation Pattern
top-appointment-nav：白色 sticky header，左側為藍色十字 mark + 品牌名「安康家庭診所」，中間為清晰的繁體導覽連結，右側為實心藍色「線上掛號 →」按鈕。手機版漢堡固定於右側，12 個完整繁體標籤收於右側 drawer。

## 9. Content Rhythm
trust hero → service icon cards → doctors team → facilities → testimonials → FAQ → appointment CTA band。以「信任」為起點，逐步建立專業形象，最後導向掛號。

## 10. 圖片風格要求
明亮、乾淨的診所與醫護攝影：白袍醫師、整潔診間、明亮候診區、醫病互動、健康生活。色調明亮、不壓暗、不復古，讓人感受到專業與安心。

## 11. 圖片數量要求
全站至少 25 張圖片引用（含重複使用於不同頁面），每張皆須有意義的繁體中文 alt，集中使用 IMAGE-CATALOG 的診所／醫療類別照片 ID，並記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
index 首頁（分割信任 Hero）、about 關於診所（理念與沿革）、services 醫療服務（六大類）、service-detail 服務詳情（健康檢查深度）、portfolio 醫師團隊（醫師與部門卡）、reviews 患者回饋（六則證言）、faq 常見問題（十題手風琴）、booking 線上掛號（表單假送出）、process 就診流程（六步驟）、blog 健康專欄（文章列表）、blog-detail 文章內容（Article schema）、contact 聯絡我們（資訊、地圖與表單）。

## 13. SEO 關鍵字策略
以「家庭診所、家庭醫學、小兒科、健康檢查、疫苗接種、慢性病管理、台北診所、線上掛號」為核心；每頁 title / description / canonical / OG 完整，首頁使用 LocalBusiness JSON-LD，文章頁使用 Article JSON-LD。

## 14. CTA 策略
top-appointment-button：頂部導覽右側的固定藍色掛號按鈕，貫穿所有頁面，搭配首頁 Hero 主按鈕與各頁底部藍色 appointment band（含電話號碼），形成穩定的轉換動線。

## 15. RWD 規則
桌機服務與部門卡三欄、醫師四欄；平板最多兩欄；手機全數單欄。Header 漢堡置右且好點，字級不小於 12px，圖片不破版，Hero 分割於手機轉為上下堆疊。

## 16. 可替換內容
品牌名安康家庭診所、地址、電話、Line / IG、醫師名單與專長、服務項目、文章內容、患者證言與表單欄位皆可替換為客戶資料。

## 17. 禁止事項
禁止簡體字；禁止奶茶色／腮紅粉／dark 底色／serif display；禁止 generator 批次產生頁面；禁止「建置中／Coming Soon／內容待補」；禁止依賴後端 API；禁止與其他樣板使用相同 Hero + 三卡片 + FAQ + CTA 的公版結構。

## 18. 與相似樣板的差異說明
不同於 template-020 Pet Clinic 的白綠寵物溫暖，也不同於 template-013 Beauty Studio 的奶茶柔和與 serif 美業感；本樣板以白藍專業醫療信任、55/45 分割 Hero、懸浮門診狀態卡、plus motif 與藍色掛號 CTA 建立獨特辨識。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
