# README — Template 013 · Beauty Studio（MUSE 繆思美學）

## 1. 樣板介紹
Beauty Studio 是一套專為美容工作室與美妝美業設計的 12 頁靜態網站樣板。以「奶茶柔和」為視覺主軸：奶油白底色、腮紅粉表面、灰玫瑰點綴與深褐文字，搭配 50/50 左右分割版型與圓角柔暖風格，呈現高信任、低壓力的品牌形象，並以預約為主要轉換目標。

## 2. 適合產業
美容工作室、美妝沙龍、SPA 美容、美甲美睫、彩妝造型、皮膚管理、芳療紓壓與形象設計等生活美業。

## 3. 版型說明
- Layout：左右分割 Split Layout
- Hero：milk-tea-split-hero（左文案／右人像＋浮動好評卡）
- Navigation：soft-top-nav（手機為左側 drawer）
- Content Rhythm：分割 Hero → 信任數據 → 分割服務 → 品牌故事 → 顧客回饋 → 作品案例 → FAQ → 預約 CTA → Footer
- Services：split-service-rows 交替圖片與文字
- Portfolio：service-photo-split-pairs 雙欄柔美卡片
- CTA：split-soft-booking-button 灰玫瑰圓角按鈕＋柔暖 CTA band
- Footer：warm-soft-footer（品牌＋電子報訂閱＋連結）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 品牌形象與完整轉換路徑，含 LocalBusiness Schema |
| about.html | 關於我們 | 創辦故事、三大信念、空間介紹 |
| services.html | 服務項目 | 五項服務的分割列呈現 |
| service-detail.html | 服務詳情 | 臉部保養完整流程與六步驟 |
| portfolio.html | 作品案例 | 柔美作品雙欄卡片 |
| reviews.html | 顧客回饋 | 真實好評與評分數據 |
| faq.html | 常見問題 | 預約與服務手風琴問答 |
| booking.html | 預約服務 | 線上預約表單（假送出） |
| process.html | 服務流程 | 六階段服務旅程 |
| blog.html | 美學日記 | 保養與生活靈感文章列表 |
| blog-detail.html | 文章內容 | 深讀文章，含 Article Schema |
| contact.html | 聯絡我們 | 店鋪資訊、聯絡表單與地圖 |

## 5. 如何修改品牌名稱
在 12 個 HTML 中搜尋「MUSE」與「繆思美學」並全部取代即可。頁首 `<title>`、`<meta>`、og:title、JSON-LD、Footer 與各頁 H1 都要一併檢查。字體樣式不需變動。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `src`，並同步修改 `alt` 為新畫面的繁體中文說明。首頁 Hero 人像建議維持直式、柔暖色調。來源清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅供設計示意，正式交付客戶前請替換為客戶自有或已授權圖片。所有圖片皆套用統一的暖色濾鏡以維持奶茶感，替換時請留意色調一致性。

## 8. 如何修改 Line / IG / 電話
- LINE：搜尋 `https://line.me/` 與 `@muse_studio`，改成客戶官方帳號連結與 ID。
- IG / FB：搜尋 `instagram.com`、`facebook.com` 替換為客戶帳號。
- 電話：搜尋 `02-2700-1688`（含 JSON-LD 中的 `+886227001688`）全部取代。

## 9. 如何修改 Google Map
`contact.html` 底部的 `.map-frame` 目前為樣式化示意區塊。正式上線時，可將此區塊替換為 Google Maps 嵌入 iframe（嵌入網址由客戶地圖頁「分享 → 嵌入」取得），並保留外層容器内徑圓角樣式。

## 10. 如何修改 SEO title / description
每個 `<head>` 內皆有 `<title>`、`<meta name="description">` 與 `og:title` / `og:description`，並有 `canonical`。建議描述維持 60–160 字繁體中文，並含品牌名與該頁核心關鍵字；首頁另需同步更新 LocalBusiness JSON-LD。

## 11. 如何修改 CTA
所有主要 CTA 按鈕使用 `.btn .btn-rose`（灰玫瑰圓角）。按鈕文字多為「預約體驗 →」或「預約 →」，搜尋取代即可。次要 CTA 使用 `.text-link` 或 `.line-link`。頁尾 CTA band 位於各頁 `.cta-band` 區塊。

## 12. ZIP 尚未打包說明
本樣板目前 `hasZip=false`，尚未產生 `template-013-beauty-studio.zip`。可直接以資料夾預覽，或由主導者統一打包壓縮。打包時請保留 `assets/` 完整路徑結構。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
