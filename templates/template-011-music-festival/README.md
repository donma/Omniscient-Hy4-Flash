# PULSE FEST 脈動音樂祭 — 樣板說明

## 1. 樣板介紹
本樣板為「事件／活動型」（Event / Campaign）網站，以黑紫霓虹舞台與巨型海報字體為核心視覺。內含 12 個完整繁體中文頁面、響應式版型、常駐購票按鈕、陣容海報卡、舞台時刻表與電子報 Footer，適合快速套用為音樂祭或演唱會官網。

## 2. 適合產業
音樂祭、演唱會、電子音樂派對、戶外活動、活動組織、展演策劃單位、藝文基金會與城市節慶主辦單位。

## 3. 版型說明
- Hero：全螢人海照片 + 紫桃紅漸層 + halftone 網點 + 堆疊海報標題 + 底部陣容跑馬燈
- Navigation：左字樣、中導覽、右發光購票按鈕；手機為右側 drawer
- 內容節奏：陣容海報卡 → 舞台時刻表 → 場地資訊 → 精彩回顧 → FAQ → 票價方案
- 服務布局：stage-schedule-grid（三大舞台分日時刻表）
- 作品布局：lineup-poster-cards（藝人海報卡）
- CTA：persistent-ticket-button（右側常駐購票鈕）
- Footer：festival-newsletter-footer（SEE YOU AT PULSE 大字 + 電子報）

## 4. 12 頁檔案說明
| 檔案 | 內容 |
|---|---|
| index.html | 首頁：海報 Hero、陣容、時刻、場地、回顧、FAQ、票價 |
| about.html | 關於音樂祭：起源、里程碑、舞台幕後 |
| services.html | 演出陣容：完整藝人海報卡與三大舞台時刻表 |
| service-detail.html | 藝人詳情：閃電樂團介紹、曲目、其他藝人 |
| portfolio.html | 演出時刻：三日完整時刻與會場動線 |
| reviews.html | 現場回顧：樂迷回饋與精彩瞬間 |
| faq.html | 常見問題：購票、入場、交通三大類 |
| booking.html | 購票資訊：票種方案與購票表單 |
| process.html | 交通指南：大眾交通、接駁、入場四步驟 |
| blog.html | 音樂祭日誌：文章列表 |
| blog-detail.html | 文章內容：藝人專訪（Article schema） |
| contact.html | 聯絡我們：聯絡資訊、表單與地圖 |

## 5. 如何修改品牌名稱
逐一開啟 12 個 HTML，將 `<title>`、`<meta property="og:title">`、`header` 的 `.brand-mark`、`.brand-sub`、footer 的 `.footer-big` 與 `.footer-brand` 中的「PULSE FEST」與「脈動音樂祭」替換為你的品牌。Schema 中的 `name` 也請同步修改。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，集中於各頁的 `<img src="https://images.unsplash.com/...">`。若要換成自有圖片，直接替換 `src` 並同步更新 `alt`。建議維持 16:10 與 3:4 的構圖比例以避免破版。圖片來源紀錄見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
本樣板圖片僅供設計示意。正式對外前，請務必替換為客戶自有或已授權的圖片，以避免著作權爭議。Duotone 色調是透過 CSS filter 達成，替換圖片後仍會套用。

## 8. 如何修改 Line IG 電話
開啟各頁 Footer 的 `.socials` 區塊，替換<a>的 `href` 與 `aria-label`；電話與 Email 請搜尋 `04-2250-8899` 與 `hello@pulsefest.tw`，替換為實際資料。LINE@ 帳號位於 `contact.html`。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為示意區塊。正式上線時請嵌入 Google Maps 的 iframe，並將 `src` 設為你的地點嵌入網址；周邊文字地址也請一併更新。

## 10. 如何修改 SEO title description
每頁 `<head>` 中各有獨立的 `<title>`、`<meta name="description">`、`og:title`、`og:description` 與 `canonical`。請逐頁修改為真實內容，description 建議 60–160 字。Schema（Event / Article / Organization）也請替換為真實資料。

## 11. 如何修改 CTA
全站 CTA 文字多為「立即購票 →」。請搜尋此字串並批次替換為你的轉換動作（例如「立即報名」）。右側常駐按鈕 `.float-ticket` 與導覽列 `.nav-cta` 需一併修改。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載用 ZIP。待所有頁面確認無誤後，由主導者統一打包為 `template-011-music-festival.zip` 並更新 `template.json` 與 `tags.json` 的 `hasZip` 欄位。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
