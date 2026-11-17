# Template Prompt — template-003 Fashion Boutique「MAISON NOIR 黑屋」

## 1. 樣板一句話定位
一份以近黑與米白構成的單色精品服飾選物畫廊：LESS, BUT BETTER.，用大量留白、極寬字距與斜體襯線標題，把衣服還原成一種安靜而耐久的選擇。

## 2. 適合產業
精品服飾、設計師品牌、選物店、服飾電商、時尚雜誌、形象工作室、極簡生活品牌、高單價耐久商品。

## 3. 不適合產業
需要大量色彩與促銷導向的快時尚、平價量販、兒童用品、餐飲與夜生活、科技 SaaS 與數據產品、需要密集表單與方案比較的 B2B 顧問。

## 4. 視覺方向
高級時尚雜誌感（editorial）。以「留白」作為主要設計元素：區塊之間保留大面積負空間，不填滿、不堆疊。字體以 Cormorant Garamond 高對比襯線作為標題與品牌字，Noto Sans TC 作為內文。小標籤使用超大寫字距（0.3em 以上）。頭條常見斜體。影像以灰階處理為主，偶爾保留原色做對比。

## 5. 色彩策略
底色近黑 #0b0b0b，層次背景 #101010 與 #151514；文字米白 #f4f2ee，重點純白 #ffffff；單一暖灰褐點綴色 #b9a98f 僅用於極寬字距的小標籤、細底線與箭頭。禁止金色、青色、漸層按鈕與高彩度色塊。分隔線使用低透明度米白，不使用實心粗框。

## 6. 版型策略
「Lookbook Gallery 型」。首頁節奏：split-editorial 形象 Hero → 宣言文字 → 不對稱 Lookbook image pairs（一大一小交錯）→ 編號式系列清單 → 品牌故事 → Lookbook 畫廊 → 引言 → 頁尾Email訂閱。全站使用同一套字體、間距、分隔線與 CTA 語言，內頁不退化為一般卡片版型。

## 7. Hero Pattern
split-editorial-lookbook-hero，非滿版。左側 42% 為實黑面板，含極小「MAISON NOIR / AUTUMN WINTER 2026」標籤、巨大細體斜體標題「Less, but better.」、簡短說明與底線文字連結「探索系列 →」；右側 58% 為滿高時尚照片（灰階）。接縫處放置垂直旋轉的「SCROLL」標籤。整體留白充足。

## 8. Navigation Pattern
wide-tracking-minimal-top。左側「MAISON NOIR」以寬字距襯線呈現，右側極小大寫導覽連結搭配極大字距，最右為「選物商店 / SHOP」文字連結。沒有膠囊按鈕、沒有邊框，僅 underline-on-hover。手機版使用左側滑出 drawer，包含完整 12 個選單標籤。

## 9. Content Rhythm
lookbook-collections-stories-shop：形象 Hero → 品牌宣言 → 不對稱形象圖對 → 編號系列清單 → 品牌故事段落 → Lookbook 棋盤畫廊 → 引言 → 訂閱網站頁尾。子頁沿用相同節奏，以 page-hero 帶入章節編號索引。

## 10. 圖片風格要求
高時尚編輯攝影，黑、灰、米色調，自然光、側光與柔和陰影。人物姿態從容、不誇張，構圖簡潔。大多數圖片套用 grayscale(100%) 濾鏡，少數保留原色做節奏對比。滑過時略微降低灰階並放大，營造細膩動態。

## 11. 圖片數量要求
全站至少 25 張圖片素材，分散在首頁、系列、單品詳情、形象 Lookbook、顧客回饋、文章與聯絡頁。每張都要有繁體中文 alt。來源統一使用 Unsplash 時尚類別照片 ID，禁止只用圖示或漸層替代。

## 12. 12 頁內容定位
- index.html 首頁：形象 Hero、宣言、形象圖對、系列清單、故事、畫廊、引言。
- about.html 品牌故事：起源、Less, but better. 信念、里程碑、選物標準。
- services.html 商品系列：六個系列的編號清單、兩段故事、選物三問。
- service-detail.html 單品詳情：結構羊毛長外套、尺寸、材質、搭配建議、相關單品。
- portfolio.html 形象 Lookbook：章節式不對稱形象照與灰階畫廊。
- reviews.html 顧客回饋：八則真實語氣評價與感謝文字。
- faq.html 常見問題：八題 FAQ 手風琴（出貨、退換、尺寸、門市、修改、上架、付款、保養）。
- booking.html 選物商店：本季精選單品與到店諮詢預約表單。
- process.html 購物流程：五步驟、售後承諾、配送退換明細。
- blog.html 選物文章：最新與過往文章列表。
- blog-detail.html 文章內容：完整文章的 Article Schema、章節、引言與圖片說明。
- contact.html 聯絡我們：門市資訊、地圖意象、聯絡表單、來店提醒。

## 13. SEO 關鍵字策略
以「MAISON NOIR 黑屋、精品服飾、選物店、極簡穿搭、耐久衣服、Less but better、台北服飾、形象 Lookbook、羊毛外套、灰色針織」為核心。每頁 title 與 description 皆為繁體中文、60–160 字，並配置 canonical、OG 與相對應 JSON-LD（首頁 LocalBusiness，文章頁 Article）。

## 14. CTA 策略
安靜的文字連結搭配細底線，例如「探索系列 →」「前往電子郵件 →」「預約到店 →」，永遠不使用大面積彩色按鈕。唯一的輸入式轉換是頁尾「加入新品通知」的 Email 行內表單。

## 15. RWD 規則
桌機使用不對稱 12 欄網格與 42/58 分割 Hero；平板最多兩欄，Hero 改為上下堆疊；手機全部單欄、image pairs 改為堆疊、選單收進左側 drawer。字級不低於 12px，圖片不破版，按鈕好點擊。

## 16. 可替換內容
品牌名稱、Ever-green 標語、系列名稱與件數、單品價格與規格、門市地址電話、文章標籤與日期、顧客評價、Email 與社群帳號，都可依客戶資料替換。圖片可換成客戶自有或授權圖庫。

## 17. 禁止事項
禁止簡體字、禁止金色或青色、禁止滿版 Hero、禁止置中品牌字作為唯一識別、禁止三卡片公版、禁止大色塊 CTA、禁止 generator 批次產生、禁止「建置中 / 內容待補」、禁止整站只靠 icon 或漸層。

## 18. 與相似樣板的差異說明
本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。不同於 template-016 Flower Wedding 的米白浪漫花藝與腳本字體，也不同於 template-005 Film Studio 的黑色電影作品牆：黑屋以冷調近黑與大膽留白為核心，用 42/58 分割形象 Hero、極寬字距導覽、編號系列線狀清單、不對稱 Lookbook 圖片對與巨型品牌字頁尾建立獨特節奏，強調「少即是多」的安靜力量。

---

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
