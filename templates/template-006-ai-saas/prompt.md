# LUMEN AI 樣板生成提示（template-006-ai-saas）

## 1. 樣板一句話定位
一個以深色漸層、Bento Grid 與玻璃質感打造的現代 AI SaaS 官網樣板，讓使用者在幾秒內感受到「這是一個先進、可信、容易上手的智慧產品」。

## 2. 適合產業
AI 軟體、SaaS 新創、科技商務、生產力工具、數據分析平台、自動化服務、雲端協作工具，以及任何需要以 modern tech 形象呈現的數位產品。

## 3. 不適合產業
不適合傳統餐飲、精品零售、婚禮、SPA、診所等需要溫暖、寫實或情感氛圍的產業；也不適合強調資料信任的資安 Services（那是 template-002 的定位）。

## 4. 視覺方向
深色現代漸層為基底（#090a12），以紫色 #8b5cf6 過渡到電光藍 #38bdf8 的漸層作為品牌主色。大量使用半透明玻璃卡片、1px 白色透明度邊框、柔和發光。圓角 16–24px，與 sharp-corner 風格完全相反。背景漂浮模糊漸層光球，搭配緩慢浮動動畫。字型採用geometric sans（Plus Jakarta Sans）搭配 Noto Sans TC，標題緊湊現代。不使用等寬字型、不使用格線線條、不只使用單一青色。

## 5. 色彩策略
- 背景：#090a12（主）、#0d0f1a（區塊）
- 表面：#121422、#171a2b（玻璃卡片）
- 主漸層：linear-gradient(135deg, #8b5cf6 → #6366f1 → #38bdf8)
- 文字：#f6f7fc（主）、#a5abc6（次）、#717895（弱）
- 強調色：#b9a6ff（標籤）、#6ee7b7（正向指標）
- 邊框：rgba(255,255,255,.09) 與 .16

## 6. 版型策略
首頁以 Bento 展示為核心，內頁沿用同一套設計語言。Bento 格線在桌機 4 欄、平板 2 欄、手機 1 欄。所有卡片皆為玻璃質感、圓角、帶發光 hover 效果。

## 7. Hero Pattern
gradient-glow-bento-hero：置中標題搭配漸層文字 span（「工作，從此」+ 漸層「不同」）、副標、兩個按鈕（漸層「免費開始使用」、外框「觀看演示」）、小字「無需信用卡」。下方為 6–8 個圓角玻璃磚的 Bento 展示，包含 CSS 打造的產品 UI 模型、統計數字、CSS 長條圖、頭像列、整合標誌與推薦語。背後漂浮模糊漸層光球。

## 8. Navigation Pattern
floating-pill-nav：頁面頂部懸浮的圓角 fully-rounded 玻璃導覽列，左側品牌標誌、中間膠囊連結、右側漸層「免費試用」按鈕。手機版收合為右側 drawer，漢堡按鈕清楚可見。

## 9. Content Rhythm
bento hero → logo wall（「已被 2,000+ 團隊信賴」+ 文字標誌）→ bento feature tiles → how-it-works → integrations → testimonials → pricing → FAQ → CTA。

## 10. 圖片風格要求
科技 / AI 類別照片（抽象 AI、資料運算、團隊協作、硬體特寫）。照片僅用於案例、部落格、關於我們與少量 Bento 磚；Bento 主視覺以 CSS UI、漸層、圖示與圖表為主。照片一律帶有意義的繁體中文 alt。

## 11. 圖片數量要求
全站至少 25 張圖片引用，分散在 12 個頁面；首頁約 3 張、案例頁約 6 張、部落格約 7 張、關於與流程各 2–4 張，其餘頁面 1–2 張。圖片來源記錄於 assets/img/image-sources.md。

## 12. 12 頁內容定位
- index.html：首頁——Bento Hero 與完整轉換漏斗
- about.html：解決方案 / 關於我們——公司、願景、價值、團隊
- services.html：產品特色——Bento 功能磚與深度 spotlight
- service-detail.html：方案詳情——定價比較表與加購服務
- portfolio.html：客戶案例——logo wall + 案例 Bento + 焦點故事
- reviews.html：客戶評價——評分統計、企業推薦語、深度訪談
- faq.html：常見問題——FAQ 手風琴與聯絡引導
- booking.html：免費試用——註冊表單與試用說明
- process.html：使用流程——四步驟與最佳實踐
- blog.html：產品部落格——精選文章 + 文章列表
- blog-detail.html：文章內容——完整文章 + Article Schema
- contact.html：聯絡我們——聯絡資訊、表單、地圖佔位

## 13. SEO 關鍵字策略
主關鍵字「LUMEN AI、AI 協作、生成式 AI」；輔助關鍵字「團隊效率、工作流程自動化、智慧助理、SaaS」。每頁獨立 title、description、canonical、OG 標籤；公司頁使用 Organization JSON-LD；文章頁使用 Article JSON-LD；FAQ 頁使用 FAQPage JSON-LD。

## 14. CTA 策略
Hero 與導览皆使用 floating-hero-gradient-button（漸層膠囊按鈕）。頁面結尾使用發光 CTA band，搭配模糊光球與對比按鈕。主要轉換動作為「免費開始使用」，次要為「聯絡我們」與「觀看演示」。

## 15. RWD 規則
桌機 2–4 欄；平板最多 2 欄；手機全單欄。導覽列在 980px 以下收合為右側 drawer。Bento 磚在手機改為單欄堆疊。圖片不破版、按鈕好點、字級不低於 12px。支援 prefers-reduced-motion。

## 16. 可替換內容
品牌名稱、Logo、標語、產品機能、方案價格、客戶名稱與數據、文章標籤與內文、聯絡資訊、社群連結、圖片來源、Google Map 嵌入代碼、示範影片。

## 17. 禁止事項
禁止使用等寬字型、格線背景、銳利直角、單一青色調；禁止與 template-001 的 serif 風格或 template-002 的資安數據風格混淆；禁止簡體字；禁止「建置中 / 內容待補」；禁止生成器腳本批次產生頁面。

## 18. 與相似樣板的差異說明
- 與 template-002（Cyber Security）差異：以 AI 漸層與 Bento 新創感為核心，不同於資安的數據信任與終端機風格；使用圓角玻璃卡片而非銳利角與格線。
- 與 template-023（Coworking Space）差異：同樣是 Bento，但本樣板是深色漸層科技感，不同於白灰寫實開放空間；以 CSS 產品 UI 為主而非空間照片。
- 與 template-001（Luxury Bar）差異：完全捨棄 serif 與黑金氛圍，改用幾何無襯線與紫藍漸層；導覽為懸浮膠囊而非置中字標。

本樣板不是一般 Hero + 三卡片 + FAQ + CTA 的公版結構。
