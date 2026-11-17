# 土地刻度 小農 — 樣板使用說明（template-021-local-farm）

## 1. 樣板介紹
本樣板為在地農場故事網站，以大地綠色的長卷軸敘事、章節編號浮水印、農夫肖像與四季作物時刻表為特色。首頁是一段連續滾動的故事，帶領訪客走過為什麼務農、一天的開始、農夫、季節作物到農場參觀，最後導向預約。全站為淺色大地色系，搭配溫暖相片濾鏡與手繪紙感質地，共 12 個完整繁體中文頁面。

## 2. 適合產業
在地農場、有機農場、小農品牌、地方創生、田園體驗、觀光農園、蔬菜箱配送、友善農產、生態教育與親子農事體驗。

## 3. 版型說明
- Hero：earth-green-story-hero（滿版農田照、暖色覆蓋、左側大標、捲動指示器）
- 導覽：top-section-anchor-nav（透明轉 solid、章節錨點、手機左側 drawer）
- 故事節奏：story-farmers-produce-visit（五個章節＋引言＋回饋＋FAQ＋CTA）
- 作品／內容：long-scroll-story-chapters（章節式照片卷軸）
- 服務：produce-season-list（四季作物與採收時刻表）
- CTA：scroll-story-cta（章節尾按鈕＋深色 visit-band）
- Footer：earthy-rooted-footer（soil 綠、故事引言、從土地到你的手中）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 長卷軸故事全章節、回饋、FAQ、visit CTA |
| about.html | 我們的故事 | 起源、三件事信念、發展刻度、農夫 |
| services.html | 季節作物 | 四季卡片與完整採收時刻表 |
| service-detail.html | 作物詳情 | 陽光番茄從種子到餐桌五階段 |
| portfolio.html | 農場日常 | 章節式田間照片卷軸 |
| reviews.html | 顧客回饋 | 推薦語與統計數據 |
| faq.html | 常見問題 | 手風琴問答 |
| booking.html | 預約參觀 | 預約表單（假送出） |
| process.html | 參觀流程 | 六步驟參觀時程 |
| blog.html | 田間筆記 | 文章列表 |
| blog-detail.html | 文章內容 | 單篇文章與 Article schema |
| contact.html | 聯絡我們 | 聯絡資訊、表單與地圖示意 |

## 5. 如何修改品牌名稱
於各 HTML 的 `<header>` 尋找 `<a class="brand">`，替換「土地刻度」與 `<small>` 內的英文；`<title>`、OG 標題、Footer 的 `.footer-brand b`、JSON-LD 的 `name` 也一併替換。字體建議保持 Noto Serif TC 明體。

## 6. 如何替換圖片
所有圖片為 Unsplash URL（`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`）。直接修改 `<img src>` 與 `alt` 即可；Hero 建議使用 `w=1920`。CSS 的 `.farm-img` 濾鏡會統一做暖大地調色，替換圖片後色調仍一致。來源清單詳見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅為設計示意，正式上線前請確認授權或替換為客戶自有作品。統計本樣板共使用 70+ 張圖片引用，分佈於 12 個頁面，每張皆有繁體中文 alt。

## 8. 如何修改 Line IG 電話
於各頁 Footer 的 `.socials` 與聯絡頁的 `.info-row` 尋找電話、Line、IG 文字並替換；社群連結的 `href="#"` 換成實際網址。電話也可於 visit-band 與 JSON-LD 中一併修改。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為示意區塊。替換為 Google Maps 嵌入 iframe 時，保持容器的固定高度並移除原有文字即可。

## 10. 如何修改 SEO title description
每頁 `<head>` 的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description` 皆可獨立修改。描述建議 60–160 字繁體中文。canonical 網域 `https://example.com` 請替換為正式網址。

## 11. 如何修改 CTA
所有 CTA 使用 `.btn` 系列（`.btn-green` / `.btn-wheat` / `.btn-outline` / `.btn-cream`）。修改按鈕文字與 `href` 即可。錨點捲動由 `main.js` 自動處理，前往其他頁面則直接更換連結檔名。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`。壓縮檔尚未產生，正式交付時再打包並將欄位改為 `true`，同時更新 `zipFile` 路徑。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
