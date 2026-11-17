# NOCTURNE 夜酌 — 樣板使用說明（template-001-luxury-bar）

## 1. 樣板介紹
本樣板為黑金低光源精品餐酒館網站，以全螢幕氛圍 Hero、置中字標導覽、編輯式酒單排版、三空間拼貼與底部固定訂位列為特色。首頁以沉浸式氛圍與招牌酒單為核心，適合以氣氛與故事取勝的夜晚系餐飲品牌。共 12 個完整繁體中文頁面。

## 2. 適合產業
精品酒吧、餐酒館、調酒專門店、爵士酒吧、威士忌吧、紅酒吧、創意調酒空間、高級餐廳附設酒吧。

## 3. 版型說明
- Hero：fullscreen-atmosphere-hero（滿版低光源照片、垂直金線、超大置中字標、兩顆 CTA）
- 導覽：centered-wordmark-nav（字標置中、左側據點小字、右側選單、手機漢堡在右）
- 酒單：editorial-menu-grid（兩欄編號式酒單，含英文名、繁中名、描述與價格）
- 空間：collage-gallery（一大兩小三圖拼貼，Hover 放大）
- CTA：fixed-reservation-bar（底部固定電話與金色訂位按鈕）
- Footer：四欄式品牌頁尾（品牌、探索、服務、造訪）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 氛圍 Hero、哲理與數據、酒單、空間拼貼、活動、訂位 CTA |
| about.html | 品牌故事 | 創辦理念、十年里程碑、調酒師團隊、獎項 |
| services.html | 菜單料理 | 招牌／經典／無酒精／餐點四大分類完整酒單 |
| service-detail.html | 調酒詳情 | 旗艦調酒「夜曲九號」食材、靈感、製作與營養資訊 |
| portfolio.html | 空間環境 | 吧台區／沙發區／包廂三空間與設計細節 |
| reviews.html | 顧客評價 | 六則評價、評分分布與媒體報導 |
| faq.html | 常見問題 | 十題手風琴問答 |
| booking.html | 線上訂位 | 預約表單（假送出）與訂位須知 |
| process.html | 訂位流程 | 五步驟訂位時程 |
| blog.html | 酒吧誌 | 六篇文章列表與分類 |
| blog-detail.html | 文章內容 | 完整文章 + Article schema + 相關文章 |
| contact.html | 聯絡我們 | 聯絡資訊、地圖示意與表單 |

## 5. 如何修改品牌名稱
於各 HTML 的 `<header>` 尋找 `<a class="brand">`，替換 `NOCTURNE` 與 `夜 酌 · 餐 酒 館`；`<title>`、OG 標題、Footer 的 `.footer-brand`、JSON-LD 的 `name` 也一併替換。Playfair Display 字體建議保持大寫英文。

## 6. 如何替換圖片
所有圖片為 Unsplash URL（`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`）。直接修改 `<img src>` 與 `alt` 即可；Hero 與 page-hero 建議使用 `w=1920`。CSS filter 會統一壓低照片亮度與飽和度，替換圖片後色調仍一致。

## 7. 圖片來源注意事項
圖片僅為設計示意，正式上線前請確認授權或替換為客戶自有作品。來源清單詳見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
於各頁 Footer 的 `.socials`、`.footer-col` 與聯絡頁的 `.info-row` 尋找電話、Line、IG 文字並替換；社群連結的 `href="#"` 換成實際網址。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為示意區塊。替換為 Google Maps 嵌入 iframe 時，保持容器高度並移除原有文字；請確認嵌入地圖已設定為可公開瀏覽。

## 10. 如何修改 SEO title description
每頁 `<head>` 的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description` 皆可獨立修改。描述建議 60–160 字繁體中文。canonical 網域 `https://example.com` 請替換為正式網址。首頁的 LocalBusiness 與文章頁的 Article JSON-LD 欄位也請一併更新。

## 11. 如何修改 CTA
所有主要 CTA 使用 `.btn` 與 `.btn-gold` / `.btn-outline`，並統一導向 `booking.html`。修改按鈕文字即可；底部固定訂位列位於各頁 `.reserve-bar`，電話與按鈕一併調整。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`。壓縮檔尚未產生，正式交付時再打包並將欄位改為 `true`，同時更新 `zipFile` 路徑。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
