# 行文書店｜template-022-bookstore

暖棕紙感的獨立書店知識中心樣板。以書架式排版、手寫推薦小卡與舒適的閱讀節奏，把選書、讀書會與專欄組織成一個讓人想慢下來的網站。

---

## 1. 樣板介紹
本樣板為 24 套 Gallery 中的第 022 套，產業為「獨立書店 / 地方品牌」，版型為「Knowledge Hub 知識中心型」。整體採 LIGHT 暖紙色調，不同於深色酒吧或亮色 SaaS 樣板。設計重點在於 paper-brown-knowledge-hero、category-shelf-list 分類書架與 shelf-book-grid 書籍卡。

## 2. 適合產業
- 獨立書店、二手書店、連鎖書店
- 藝文空間、地方文化品牌
- 出版社、閱讀推廣組織

## 3. 版型說明
- **Hero**：`paper-brown-knowledge-hero`，暖紙面板 + 右側書籍照片 + 左緣垂直書脊 + 搜尋貼紙。
- **Navigation**：`top-category-nav`，暖色 Header + 書本 Logo + 左側 drawer。
- **Content Rhythm**：選書 → 專欄 → 活動 → 店主 → 回饋 → FAQ → 來店 CTA。
- **Services**：`category-shelf-list`，文學/藝術/歷史/生活/童書書架列。
- **Portfolio**：`shelf-book-grid`，封面式書籍卡 Grid。
- **Footer**：`paper-texture-footer`，襯線引言 + 書本分隔 + 資訊欄。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 重點 |
|---|---|---|
| index.html | 首頁 | 知識 Hero、選書、專題、活動、店主、回饋、FAQ、CTA |
| about.html | 關於我們 | 創店故事、三大理念、數據、空間 |
| services.html | 選書目錄 | 五大類書架清單、新書上架 |
| service-detail.html | 書籍詳情 | 書籍資訊、店員導讀、Book Schema |
| portfolio.html | 主題專櫃 | 八座主題書架 |
| reviews.html | 顧客回饋 | 六則讀者留言與評分 |
| faq.html | 常見問題 | 八題 FAQ 手風琴 + FAQPage Schema |
| booking.html | 活動報名 | 活動列表 + 假送出表單 |
| process.html | 參與流程 | 四步驟時序 + FAQ |
| blog.html | 閱讀專欄 | 六篇文章卡 + 投稿 |
| blog-detail.html | 文章內容 | 完整文章 + drop cap + Article Schema |
| contact.html | 聯絡我們 | 店鋪資訊 + 地圖示意 + 表單 |

## 5. 如何修改品牌名稱
全文搜尋「行文書店」並取代為新品牌名。Logo 的書本 mark 由 CSS `.bookmark` 繪製，可保留或換成客戶 LOGO 圖片。`template.json`、`tags.json` 中的 `name` 也請同步更新。

## 6. 如何替換圖片
所有圖片皆為 Unsplash URL，格式：
`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`
直接替換 `src` 即可。建議維持 3:4（書籍封面）或 16:10（文章）比例，並保留 sepia 暖紙濾鏡以維持一致性。來源清單見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權的圖片。Unsplash 照片的使用請遵循其授權條款。

## 8. 如何修改 Line / IG / 電話
- 電話：搜尋 `02-2736-9988`，可在 HTML、JSON-LD 與頁尾一併更換。
- 粉絲專頁 / IG / Line：頁尾 `.socials` 中的 `href="#"` 改為實際網址；聯絡頁的社群說明文字也一併更新。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前是示意區塊。將該 `<div>` 換成 Google Maps 的 `<iframe>` 嵌入程式碼即可，樣式維持 `border:1px solid var(--line)`。

## 10. 如何修改 SEO title / description
每頁 `<head>` 都有 `<title>` 與 `<meta name="description">`，另含 og:title / og:description / canonical。修改時請保持繁體中文、description 約 60–160 字，並同步更新 canonical 網址。

## 11. 如何修改 CTA
- Hero 的「今日選書 →」：搜尋 `今日選書`。
- 活動「報名活動 →」：搜尋 `報名活動`。
- 全站「來店走走 →」：搜尋 `來店走走`。
- 按鈕樣式定義於 `style.css` 的 `.btn`、`.btn-ink`、`.btn-rust`、`.btn-outline`。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載壓縮檔。待主導者統一打包時，將整資料壓縮為 `../../downloads/template-022-bookstore.zip` 並將 `hasZip` 改為 `true` 即可。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
