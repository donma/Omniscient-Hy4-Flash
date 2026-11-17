# PULSE FEST 脈動音樂祭 — 樣板提示詞（Prompt）

## 1. 樣板一句話定位
一套以黑紫霓虹舞台與巨型海報字體為核心的活動型樣板，讓音樂祭的熱力、陣容與購票轉換在同一個頁面爆發。

## 2. 適合產業
音樂祭、演唱會、電子音樂派對、戶外活動、活動組織、展演策劃單位、藝文基金會與城市節慶主辦單位。

## 3. 不適合產業
精品零售、金融與顧問、傳統餐飲、醫療診所、幼兒教育等需要柔和、信任或高質感留白的產業；亦不適合明亮高彩的社區型活動（那是 template-024 的定位）。

## 4. 視覺方向
現代大膽霓虹海報。全螢幕深色演唱會人海照片作為背景，疊加紫／桃紅漸層與網點（halftone）質感。超大堆疊標題「PULSE / FEST 2026」使用 Anton 海報 condensed 字體，搭配霓虹發光與描邊副本。對角螢光綠斜切色塊貫穿畫面，整體不居中、不優雅，強調速度與能量。

## 5. 色彩策略
- 基底 #0d0618（近黑紫），表面 #1a0b2e / #24103d
- 電光紫 #a855f7、桃紅 #ec4899 作為主視覺與發光色
- 螢光綠 #c6ff3d 作為 CTA、斜切與強調色
- 文字 #f6f1ff，次要文字 #bca9dd
- 禁止琥珀復古色、米白與金色系；禁止 serif 優雅感

## 6. 版型策略
活動型（Event / Campaign）節奏：大海報 Hero → 數據帶 → 陣容海報卡 → 舞台時刻表 → 場地資訊 → 精彩回顧 → FAQ → 票價方案 → 電子報 Footer。三大舞台以直欄時刻表呈現，具分日頁簽切換。

## 7. Hero Pattern
poster-typography-festival-hero：全螢人海照片、紫桃紅漸層、halftone 網點、巨型堆疊標題與描邊副本、日期場地塊、右上常駐購票按鈕、底部陣容跑馬燈、對角螢光綠斜切。非居中優雅排版。

## 8. Navigation Pattern
top-ticket-cta-nav：左側 condensed 字樣「PULSE FEST」，中間導覽連結，右側發光「立即購票 →」按鈕。手機版使用右側 drawer，漢堡按鈕對比清楚。

## 9. Content Rhythm
lineup-schedule-venue-tickets：首頁依「陣容海報卡 → 舞台時刻表 → 場地資訊 → 精彩回顧 → FAQ → 票價方案」推進，內頁沿用同一設計語言與元件。

## 10. 圖片風格要求
演唱會人海、舞台雷射、紫色燈光、觀眾歡呼、音樂祭全景。統一套用紫桃紅 duotone 色調（filter: saturate + hue-rotate），照片需有故事性與臨場感，不可僅用圖示或漸層。

## 11. 圖片數量要求
全套至少 25 張圖片引用，分散於首頁、關於、陣容、藝人詳情、時刻、回顧、交通、日誌與文章頁，每張皆有繁體中文 alt。

## 12. 12 頁內容定位
- index.html：首頁海報 Hero、陣容、時刻、場地、回顧、FAQ、票價
- about.html：音樂祭起源、里程碑、舞台上幕後
- services.html：完整演出陣容海報卡與三大舞台時刻表
- service-detail.html：藝人詳情、曲目、其他藝人
- portfolio.html：三日完整演出時刻與會場動線
- reviews.html：樂迷回饋與精彩瞬間回顧
- faq.html：購票、入場、交通三大類常見問題
- booking.html：票種方案與購票表單（假送出）
- process.html：交通指南與入場四步驟
- blog.html：音樂祭日誌文章列表
- blog-detail.html：藝人專訪文章（Article schema）
- contact.html：聯絡資訊、表單與地圖

## 13. SEO 關鍵字策略
主關鍵字：PULSE FEST、脈動音樂祭、台中音樂祭、音樂祭購票；長尾：2026 音樂祭陣容、中央公園音樂祭、三日通票、電子舞台時刻表。每頁具獨立 title、description、canonical、OG 與 Schema（首頁 Event、文章頁 Article、其餘 Organization）。

## 14. CTA 策略
persistent-ticket-button：右側常駐發光購票按鈕 + 導覽列購票 CTA + 首頁與各頁尾票價方案 CTA，搭配最終「SEE YOU AT PULSE」電子報 Footer，形成多重轉換路徑。

## 15. RWD 規則
桌機 3–4 欄，平板最多 2 欄，手機單欄；漢堡開右側 drawer；字級不低于 12px；圖片 object-fit 不破版；時刻表與票價卡在手機堆疊。

## 16. 可替換內容
品牌名 PULSE FEST、日期 08.15-17、地點台中中央公園、藝人名單、票價與票種、客服電話與 Email、LINE/IG 連結、文章內容皆可替換為客戶資料。

## 17. 禁止事項
禁止簡體字；禁止 generator 批次產生；禁止琥珀復古、serif 優雅、米白留白風格；禁止僅換色換圖的公版結構；禁止後端依賴。

## 18. 與相似樣板的差異說明
不同於 template-007 Jazz Club 的復古爵士舞台與暖琥珀色，本樣板使用黑紫霓虹與海報字體；不同於 template-024 Community Festival 的明亮高彩社區節慶，本樣板強調深色舞台能量與購票轉換；不同於 template-001 Luxury Bar 的居中金線精品感，本樣板以斜切、網點與發光堆疊字體取勝。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
