# T017 Organic Grocery 樣板提示詞（GREEN FIELD 綠田市集）

## 1. 樣板一句話定位
一套以「淺綠自然、親切的有機商店」為核心的商品目錄型網站樣板，把在地小農的新鮮食材，用清爽的卡片與分類磁磚，從產地完整呈現到餐桌。

## 2. 適合產業
有機商店、農產食材零售、健康食品專賣店、生鮮電商、社區支持型農場（CSA）、果蔬配送服務、天然堅果與穀物品牌。

## 3. 不適合產業
精品 luxury 品牌、科技 SaaS、金融與法律等需要冷調專業感的產業；夜生活、重型工業或暗色系餐酒館；強調速度感的運動健身品牌。

## 4. 視覺方向
自然、清新、親切、可信賴。大量留白、圓角磁磚、柔和陰影、葉片 motif 與大地色點綴。標題使用溫暖的 Fraunces 襯線字，內文使用 Noto Sans TC，整體呈現手作、有機、非量產的質感。禁止任何暗色、金屬質感或高對比霓虹效果。

## 5. 色彩策略
- 基底背景：#f8faf5（淺奶綠）
- 表面色：#eef4e8（淡綠表面）、#fbfbf3（奶油白）
- 主色：#5b8c3e（葉綠），深色 #3f6b28，淺色 #8bb96a，淡色 #dceccb
- 點綴色：#c98a4b（溫暖大地色）
- 文字色：#2f4526（深綠），次要 #5f7355，弱化 #92a186
- 按鈕：綠底白字或大地色，圓角 100px，hover 上浮
所有文字與背景維持高對比，淺底用深綠字，深色 CTA 用白字。

## 6. 版型策略
Product Catalog 商品目錄型。首頁內容節奏：fresh-green-catalog-hero → category-tile-grid（六分類）→ product-card-grid（本週推薦）→ origin story → values → testimonials → FAQ → shop CTA。桌機 4 欄商品、平板 2 欄、手機 1 欄。每個元件皆維持相同的圓角、陰影與間距語言。

## 7. Hero Pattern
fresh-green-catalog-hero，60/40 分割。左側奶油綠漸層面板：小標「在地小農 · 每日直送」、Fraunces 大標「從產地，到你的餐桌。」、說明文字、綠色圓角「開始選購 →」按鈕，以及「無農藥／當季／在地」三個數值徽章。右側為圓角圖片拼貼（三張生鮮照片：photo-1542838132、photo-1540420773420、photo-1504674900247），以 1 大 2 小 grid 排列，hover 輕微放大。

## 8. Navigation Pattern
top-category-nav。白底 sticky header，左側為葉片 mark + GREEN FIELD / 綠田市集 品牌，右側主選單含「首頁、關於我們、商品目錄、產地故事、食安專欄、聯絡我們」與綠色「線上選購 →」CTA 按鈕。下方另有分類列：蔬菜／水果／穀物／乳製品／堅果種子／瀏覽全部。手機改為左側抽屜（drawer 由左滑入），不遮住 Logo，與覆蓋層搭配。

## 9. Content Rhythm
products → origin → values → delivery。以商品為核心，先分類、再商品、接著產地故事建立信任、價值主張強化理念、顧客回饋與 FAQ 解除疑慮，最後以在地配送 CTA 收尾。

## 10. 圖片風格要求
明亮、高飽和度但不失真的生鮮攝影；light green natural produce 風格。照片套用 filter: saturate(1.05) contrast(1.02)，維持新鮮明亮的視覺。圓角處理、柔和陰影。避免暗色、過度復古濾鏡或抽象圖形。

## 11. 圖片數量要求
全站至少 25 張圖片參考，分散於各頁。本樣板使用超過 60 個 img 引用，涵蓋首頁、商品目錄、商品詳情、產地故事、顧客回饋、食安專欄與文章頁。所有圖片皆附有意義的繁體中文 alt。來源集中於 Unsplash 有機／農產／食物分類。

## 12. 12 頁內容定位
- index.html 首頁：完整 Landing，含 Hero、六分類、本週推薦、產地故事、價值、回饋、FAQ、CTA。
- about.html 關於我們：成立緣起、里程碑、對土地的承諾、團隊介紹。
- services.html 商品目錄：六大分類錨點與各類商品卡片網格。
- service-detail.html 商品詳情：單品大圖、縮圖切換、規格表、農友故事、相關商品。
- portfolio.html 產地故事：四個產地章節、田間相簿。
- reviews.html 顧客回饋：統計數字、六則評價、料理相簿。
- faq.html 常見問題：食材、配送、選購三類 FAQ 手風琴。
- booking.html 線上選購：選購表單、諮詢說明、流程概要（表單假送出）。
- process.html 選購流程：四步驟、各環節說明、選購提醒。
- blog.html 食安專欄：文章列表、檢驗承諾、更多文章。
- blog-detail.html 文章內容：Article JSON-LD、完整文章、延伸閱讀。
- contact.html 聯絡我們：聯絡資訊、留言表單、門市地圖示意。

## 13. SEO 關鍵字策略
主關鍵字：有機商店、有機蔬菜、在地小農、無農藥蔬果、生鮮配送。長尾關鍵字：當季蔬菜直送、台北有機食材、農藥殘留檢驗、支持在地小農、的有機水果。每頁皆有繁體中文 title（60 字內）、description（60–160 字）、canonical、OG 標籤；首頁含 LocalBusiness、文章頁含 Article JSON-LD。

## 14. CTA 策略
category-shop-cta。以綠色圓角按鈕為主，搭配大地色強調 CTA。首頁 Hero 與底部各有「開始選購」與「開始線上選購」；各內容區塊以「逛逛商品目錄」「讀產地故事」等文字連結引導。另設「在地配送 · 當日採收直送 · 滿 $1,200 免運費」資訊帶，強化配送信任。所有 CTA 皆指向真實頁面。

## 15. RWD 規則
桌機：商品 4 欄、分類 3 欄、價值 3 欄。平板（≤1024px）：商品 3→2 欄、分類 2 欄、Hero 改單欄堆疊、導覽轉為左側抽屜。手機（≤640px）：所有網格單欄、Hero 文字縮小、按鈕全寬、字級不低於 12px。手機選單由左側滑入且可完整操作；圖片 max-width:100% 不破版。

## 16. 可替換內容
品牌名稱 GREEN FIELD 綠田市集與 Logo 葉片 mark、所有商品名稱與價格、農友姓名與產地、客服電話與地址、配送範圍與運費、篇文章內容、顧客評價、企業口號。皆可於各 HTML 與 CSS 變數中替換。

## 17. 禁止事項
禁止簡體字；禁止中英混雜（品牌名與專有名詞除外）；禁止暗色／ metallic／霓虹风格；禁止「建置中／Coming Soon／內容待補」；禁止使用 generator 批次產生頁面；禁止只換色換圖的公版結構；禁止沒有 alt 的圖片。

## 18. 與相似樣板的差異說明
與 template-008 Premium Car 同樣是 Product Catalog 商品目錄型，但本樣板以淺綠自然、圓角磁磚與生鮮攝影取代精品車款的暗色金屬與規格導向；與 template-021 Local Farm 同為農業主題，但後者採長卷軸故事敘事，本樣板則以商品卡片目錄、分類磁磚、在地配送 CTA 為核心。至少在 Hero Pattern（fresh-green-catalog-hero）、Navigation（top-category-nav）、Image Strategy（light-green-natural-produce）、CTA（category-shop-cta）、Services（category-tile-grid）、Footer（natural-value-footer）六項明顯不同。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
