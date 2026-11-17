# T010 Architecture Dark — MONOLITH 巨石建築

## 1. 樣板介紹
本樣板為「案例索引型」（Case Study Index）建築事務所網站，以深色黑灰混凝土為基底、細格線與十字準星為母題，輔以單一信號橘。首頁不是照片 Hero，而是左側編號索引、右側預覽圖的互動結構；案例以整列索引呈現，完全不同於一般「Hero＋三卡片＋FAQ＋CTA」公版。

## 2. 適合產業
建築事務所、建築師工作室、空間與室內設計、都市規劃、永續顧問、景觀設計，以及任何以作品案例為核心說服力的專業服務品牌。

## 3. 版型說明
- Hero：index-list-architecture-hero（左 30% 索引／右 70% 預覽圖）
- Navigation：numbered-top-nav（編號前綴＋右側聯繫 CTA）
- Content Rhythm：index → projects → philosophy → disciplines → awards → testimonials → FAQ → contact
- Portfolio：numbered-case-index-list（大編號＋圖片＋資訊＋箭頭，左右交錯）
- Services：discipline-list（可展開的編號清單）
- Footer：architectural-grid-footer（細線格線＋圖說標題欄）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 索引 Hero、精選案例、理念、服務、獲獎、回饋、FAQ、CTA |
| about.html | 事務所簡介 | 沿革時間軸、數字統計、工作現場 |
| services.html | 服務領域 | 四大服務可展開清單、能力項目 |
| service-detail.html | 服務詳情 | 完整流程、細部、交付成果 |
| portfolio.html | 案例索引 | 01—08 編號案例列、類型瀏覽 |
| reviews.html | 客戶回饋 | 滿意度統計、六則回饋 |
| faq.html | 常見問題 | FAQ 手風琴（FAQPage Schema） |
| booking.html | 設計諮詢 | 諮詢表單（假送出） |
| process.html | 合作流程 | 六階段、承諾、典型時程 |
| blog.html | 建築觀點 | 六篇文章索引、分類 |
| blog-detail.html | 文章內容 | 完整文章（Article Schema）、相關閱讀 |
| contact.html | 聯絡我們 | 資訊、表單、示意地圖 |

## 5. 如何修改品牌名稱
在 12 個 HTML 中搜尋「MONOLITH」與「巨石建築」並全部替換。需同時修改：`<title>`、頁首品牌、頁尾品牌、drawer 標題、JSON-LD 中的 name、以及 manifesto 與 Quote 中的簽名。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，格式 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。直接替換 `src` 與相對應的 `alt`。首頁 Hero 的四張預覽圖另外寫在 `<li>` 的 `data-img` / `data-alt` 屬性上，請同步修改。詳細來源見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
本站圖片來自 Unsplash，僅供設計示意。正式對外或交付客戶前，請務必替換為客戶自有或已取得授權的圖片，並確認授權範圍與署名要求。

## 8. 如何修改 Line IG 電話
電話出現於各頁 info-list、頁尾與 JSON-LD（telephone）。若有 Line／IG，請在 `contact.html` 與頁尾適當位置加入連結。目前示範電話為 02-2700-1888。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為 CSS 格線示意圖。正式上線時，請以 Google Maps 嵌入 iframe 取代該區塊，並更新地址與座標。

## 10. 如何修改 SEO title description
每頁 `<head>` 內皆有獨立的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與完整的 OG 標籤。請逐頁修改，並保持描述在 60—160 字之間。JSON-LD 中的 name、url 也需一併更新。

## 11. 如何修改 CTA
全站採 inline-project-index-link 策略，安靜的「查看完整案例 →」連結散見各章節（class `.inline-link`）；最終聯絡 band 使用 class `.btn .btn-solid`。修改文案時搜尋「→」即可快速定位。

## 12. ZIP 尚未打包說明
目前 `hasZip: false`，尚未產生 `template-010-architecture-dark.zip`。待所有樣板完成並通過驗收後，由主導者統一打包下載檔。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
