# 樣板提示文件 — template-005-film-studio（REFRAME 影構工作室）

## 1. 樣板一句話定位
以純黑電影院線美學與作品牆為核心，為影像製作與創意工作室打造一個以 Showreel 為 conversion 起點的沉浸式作品展示網站。

## 2. 適合產業
影像製作公司、廣告製作、電影工作室、攝影工作室、創意設計公司、後製調光、MV 製作、婚禮紀錄、企業形象片拍攝。

## 3. 不適合產業
需要大量即時交易、價格比較或產品規格表的電商；強調明亮、活潑、親子或高彩度的品牌；需要高度表單驗證與後端串接的 SaaS 服務。

## 4. 視覺方向
Cinematic black。純黑 #000 與近黑 #0a0a0a 為底，大面積留黑。Oswald 窄體大寫作為陳述式標題，Space Mono 作為時間碼／幀號／標籤。自重視覺元素包含 letterbox 黑邊、紅色 REC 錄影燈、時間碼、frame number、film-grain 與 scanline 重疊紋理。字體 Only Oswald + Noto Sans TC + Space Mono。

## 5. 色彩策略
- 背景：#000000（主）、#0a0a0a（次）、#0e0e0e（卡片）
- 主要文字：film-print warm white #efece4
- 強調色：rec-light red #e03a2f（REC 燈、按鈕、線段、hover），低量使用
- 確認禁用：金色、青色、橘色；照片以 CSS filter 做去飽和與 teal-orange 電影調色（--grade）

## 6. 版型策略
首頁為全螢幕 letterbox Hero → Showreel CTA → 精選作品 Masonry 牆 → Production 五階段 → 關於與獎項 → 客戶回饋 → FAQ → 聯絡 CTA。內頁沿用同一字體、色階、間距、導覽與片尾 Footer，絕不切換成一般 Bootstrap 版型。

## 7. Hero Pattern
cinematic-letterbox-hero：滿版電影劇照（photo-1485846234645 / photo-1517604931442）緩慢放大，上下厚黑 letterbox bar，中央巨大 REFRAME 字標，左上紅點 REC ●，中央圓形 PLAY SHOWREEL 按鈕，右下跳動時間碼，左側垂直 SCROLL，覆蓋 film-grain 與 scanline。

## 8. Navigation Pattern
centered-small-wordmark-nav：極小 REFRAME 字標置中，連結分列左右（左：作品／關於，右：服務／聯絡），細線分隔，影展式低調感。手機版漢堡固定在左側，12 個完整繁體標籤收於左側 drawer。

## 9. Content Rhythm
showreel → featured projects masonry wall → services / production phases → about / awards → testimonials → FAQ → contact CTA。以「播放」為起點，帶領訪客進入作品世界。

## 10. 圖片風格要求
電影劇照、攝影機、放映廳、舞台與建築光影。多數去除飽和並以 hue-rotate + sepia 做 teal-orange 調色，亮度壓低，保留顆粒感；hover 時短暫提升飽和度模擬放映。

## 11. 圖片數量要求
全站至少 25 張圖片引用（含重複使用於不同頁面），每張皆須有意義的繁體中文 alt，集中使用 IMAGE-CATALOG 的電影／攝影／創意類別照片 ID，並記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
index 首頁（作品牆與 Showreel）、about 關於我們（團隊與獎項）、services 服務項目（拍攝服務）、service-detail 服務詳情（單一服務深度）、portfolio 作品案例（完整 Masonry 作品牆）、reviews 客戶回饋（推薦語）、faq 常見問題（手風琴）、booking 拍攝預約（表單假送出）、process 製作流程（五階段時程）、blog 影像誌（文章列表）、blog-detail 文章內容（Article schema）、contact 聯絡我們（資訊與表單）。

## 13. SEO 關鍵字策略
以「影像製作、廣告拍攝、電影工作室、攝影工作室、後製調光、品牌形象片、Showreel」為核心；每頁 title / description / canonical / OG 完整，首頁與公司頁使用 Organization JSON-LD，文章頁使用 Article JSON-LD。

## 14. CTA 策略
play-showreel-overlay：全寬 Showreel 區塊的圓形播放按鈕，以 JS 開啟全螢幕模擬播放器，輪播圖片與時間碼；首頁 Hero 與各頁 CTA 皆導向此體驗或拍攝預約。

## 15. RWD 規則
桌機作品牆三欄、服務時程五欄；平板作品牆兩欄、時程三欄；手機全數單欄，漢堡置左且好點，字級不小於 12px，圖片不破版，letterbox bar 高度按比例縮減。

## 16. 可替換內容
品牌名 REFRAME、中文名影構工作室、聯絡電話、地址、Line / IG、獎項列表、作品標題與年份、團隊角色、文章內容與表單欄位皆可替換為客戶資料。

## 17. 禁止事項
禁止簡體字；禁止金色／青色／橘色；禁止 generator 批次產生頁面；禁止「建置中／Coming Soon／內容待補」；禁止依賴後端 API；禁止與其他樣板使用相同 Hero + 三卡片 + FAQ + CTA 的公版結構。

## 18. 與相似樣板的差異說明
不同於 template-003 精品時尚的冷調留白與 Lookbook，也不同於 template-016 米白浪漫花藝作品牆；本樣板以純黑電影感、letterbox Hero、REC 時間碼、Showreel 模擬播放器與片尾字幕 Footer 建立獨特辨識。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
