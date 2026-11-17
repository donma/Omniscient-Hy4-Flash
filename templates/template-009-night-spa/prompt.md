# 樣板生成提示詞 — template-009 Night Spa（AURORA SPA 極光療癒）

> 本文件完整記錄本樣板的設計定位與施工規則，供未來重製、微調或延展時遵循。所有內容以繁體中文撰寫。

---

## 1. 樣板一句話定位
一處深綠色的沉浸式身心聖所，以全螢幕寧靜視覺、緩慢節奏與細膩留白，讓高端 Spa 品牌在城市裡安靜地被看見。

## 2. 適合產業
- 高端 Spa、芳療會館、美容健康中心
- 身心療癒、冥想、瑜伽與頌缽音頻工作室
- 精品皮膚管理、抗老化中心、女性專屬放鬆空間
- 強調「氛圍」與「預約轉換」的服務業

## 3. 不適合產業
- 高對比、快節奏的餐飲夜生活（如酒吧、夜店）
- 運動健身、重量訓練與教練形象（需力量感）
- 資料密集的科技、資安、金融後台
- 明亮活泼的親子、教育或節慶活動

## 4. 視覺方向
深綠黑寧靜。柔性邊角、大面積留白、緩慢的動作、細膩的線條。 Home 首頁以一張全螢幕療癒大圖奠定情緒，導覽列懸浮於 Hero 底部中央；內頁則轉為固定頂欄。整體氣質是「安靜地被包住」，而不是「被大聲說服」。
**本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。**

## 5. 色彩策略
- 基底 `#08110e`（深綠黑），表面 `#0e1f19` / `#12271f`
- 主色鼠尾草綠 `#9fc9b4`、淺鼠尾草 `#c8e0d2`
- 次要色燭光暖色 `#e8d9b8`
- 文字 `#eef4ef`，輔助 `#a9bfb4`，微弱 `#748e82`
- 禁用：金色浮誇裝飾、高對比侵略感、銳利角度
- 所有深色底上的導覽文字皆使用淺色，hover / active / mobile drawer 皆維持清楚可讀

## 6. 版型策略
Fullscreen Visual 沉浸視覺型。首頁節奏為：全螢幕 Hero → 哲理引言 → 儀式清單 → 氛圍 Gallery → 療癒師介紹 → 顧客回饋 → FAQ → 柔軟 CTA。子頁沿用同一套字體、顏色、間距、卡片、導覽與 Footer，絕不降級為一般 Bootstrap 版面。

## 7. Hero Pattern
`fullscreen-serene-visual-hero`：滿版療癒照片（photo-1540555700478 / photo-1544161515），疊加深綠色與柔暗角（vignette）。中央依序為：極小的「AURORA · WELLNESS SANCTUARY」、巨大極細 italic serif「回到，自己。」、一條細線、一行副標、單一柔軟外框按鈕「預約療程 →」。背景有 CSS 同心圓水波與飄落粒子，緩慢淡入放大。

## 8. Navigation Pattern
`minimal-centered-bottom-nav`：首頁導覽是懸浮於 Hero 底部中央的半透明膠囊（含五個核心連結與 EN 切換）；內頁為固定頂欄、低調但可讀。完整 12 個頁面連結收進左側滑出 drawer，漢堡按鈕開關、overlay 關閉、Esc 關閉。所有選單文字皆為繁體中文。

## 9. Content Rhythm
首頁：serene hero → philosophy quote → ritual-step-list → ambient gallery → therapist split → testimonials → FAQ accordion → soft-centered-booking-cta。子頁延續相同呼吸感，以 page-hero + 主題章節 + soft CTA 收尾。

## 10. 圖片風格要求
Spa 類照片（芳香石、蠟燭、精油、按摩雙手、療癒室、植栽角落）。統一套用輕微綠松色調（`filter: saturate(.75) hue-rotate(14deg)`）與邊緣柔化（inset shadow vignette），讓照片像被霧氣包住。禁用尖銳高對比與過度飽和。

## 11. 圖片數量要求
全站至少 25 個圖片引用，分散於 12 頁（Hero、服務、Gallery、Blog、Contact、細節）。每張都要有繁體中文 alt。首頁與內頁重複使用照片時，調整 `w=` / `q=` 與構圖以維持新鮮感。

## 12. 12 頁內容定位
- index.html 首頁：品牌形象與預約轉換的核心入口
- about.html 關於我們：品牌起源、三項信念、療癒師團隊
- services.html 療程服務：六道儀式完整的 ritual-step-list
- service-detail.html 療程詳情：招牌芳療的深度說明與流程
- portfolio.html 空間環境：柔軟圓角卡片式空間相簿
- reviews.html 顧客回饋：真實口碑與滿意度數據
- faq.html 常見問題：八題 FAQ accordion
- booking.html 預約療程：線上預約表單（假送出）
- process.html 體驗流程：五個階段的旅程
- blog.html 療癒手記：六篇文章卡片
- blog-detail.html 文章內容：Article schema 的完整文章
- contact.html 聯絡我們：資訊、示意地圖與聯絡表單

## 13. SEO 關鍵字策略
每頁具備獨特標題、60–160 字繁體中文描述、canonical、OG 四件套。首頁與實體頁使用 `LocalBusiness` JSON-LD，公司頁用 `Organization`，服務頁用 `Service`，文章頁用 `Article`，常見問題頁用 `FAQPage`。關鍵字聚焦：極光療癒、AURORA SPA、台北 Spa、芳療、深層排毒、頌缽、放鬆、身心療癒。

## 14. CTA 策略
`soft-centered-booking-cta`：每頁尾聲以一條向上漸隱的細線分隔、一句輕柔標題、一行補充說明，以及單一柔軟按鈕（btn-soft）。首頁 Hero 與 booking 表單頁亦有單一按鈕，不堆疊、不互相競爭。

## 15. RWD 規則
桌機 2–4 欄、平板最多 2 欄、手機全單欄。首頁 Hero 於手機仍保持滿版；底部膠囊導覽在窄螢幕微調內距。漢堡選單固定左側 drawer，不遮蓋 Logo、不發生點不到。字級不小於 12px，按鈕好點，圖片不破版。`prefers-reduced-motion` 時關閉動畫。

## 16. 可替換內容
品牌名 AURORA / 極光療癒、Slogan「回到，自己。」、療程名稱與價格、療癒師姓名、地址電話、營業時間、社群帳號、文章標題與內文、顧客回饋、示意地圖（替換成 Google Map 嵌入）。所有 Unsplash 圖片應替換為客戶自有或授權素材。

## 17. 禁止事項
- 禁止簡體字、亂碼、中英混雜（品牌名與專有名詞除外）
- 禁止 generator / 批次腳本產生頁面；每頁皆須手寫
- 禁止「建置中 / Coming Soon / 內容待補」
- 禁止抄襲 T001 的黑金 bar 版型、導覽位置與卡片結構
- 禁止金色浮誇裝飾、高對比侵略感、銳利角度
- 禁止後端依賴；表單假送出、file:// 可運作

## 18. 與相似樣板的差異說明
- 與 **template-001 Luxury Bar**：T001 是黑金夜生活、訂位轉換、頂端置中品牌字、固定訂位列、editorial 菜單格；本樣板是深綠療癒、從底部懸浮導覽開始、柔軟圓角卡片、寧靜 Footer，情緒與結構皆不同。
- 與 **template-004 Fitness Coach**：T004 是高對比力量感與教練信任、斜切 CTA；本樣板以低對比、慢節奏、細線與留白取勝，完全相反的視覺能量。
- 至少四項顯著差異：Hero Pattern、Navigation Pattern、Services Layout、Footer Layout、Image Strategy、CTA Strategy 皆與上述樣板不同。

---

### 強制宣告
本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
