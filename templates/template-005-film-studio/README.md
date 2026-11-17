# REFRAME 影構工作室 — 樣板使用說明（template-005-film-studio）

## 1. 樣板介紹
本樣板為電影感影像製作作品網站，以純黑 cinematic 美學、letterbox 黑邊 Hero、紅色 REC 錄影燈、時間碼與片尾字幕 Footer 為特色。首頁以 Showreel 與 Masonry 作品牆為核心，適合以視覺作品說服客戶的創意團隊。共 12 個完整繁體中文頁面。

## 2. 適合產業
影像製作、廣告與電影工作室、攝影工作室、後製調光、MV 製作、品牌形象片拍攝、創意設計公司。

## 3. 版型說明
- Hero：cinematic-letterbox-hero（滿版劇照、緩慢放大、上下黑邊、巨大 REFRAME 字標）
- 導覽：centered-small-wordmark-nav（字標置中、連結分列左右、手機漢堡在左）
- 作品牆：masonry-film-poster-wall（CSS columns 三欄、多種高度、hover 顯示資訊與播放鍵）
- 服務：production-phase-list（五階段水平時程）
- CTA：play-showreel-overlay（全螢幕模擬播放器）
- Footer：letterbox-credits-footer（片尾字幕樣式）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | Showreel、精選作品牆、服務、獎項、回饋、FAQ、CTA |
| about.html | 關於我們 | 團隊理念、發展歷程、獎項 |
| services.html | 服務項目 | 拍攝與後製服務總覽 |
| service-detail.html | 服務詳情 | 單一服務深度說明 |
| portfolio.html | 作品案例 | 完整 Masonry 作品牆 |
| reviews.html | 客戶回饋 | 客戶推薦語與案例 |
| faq.html | 常見問題 | 手風琴問答 |
| booking.html | 拍攝預約 | 拍攝需求表單（假送出） |
| process.html | 製作流程 | 五階段製作時程 |
| blog.html | 影像誌 | 文章列表 |
| blog-detail.html | 文章內容 | 單篇文章與 Article schema |
| contact.html | 聯絡我們 | 聯絡資訊與表單 |

## 5. 如何修改品牌名稱
於各 HTML 的 `<header>` 尋找 `<a class="brand">`，替換 `REFRAME` 與 `影 構 工 作 室`；`<title>`、OG 標題、Footer 的 `.credits-brand`、JSON-LD 的 `name` 也一併替換。Oswald 字體建議保持大寫英文。

## 6. 如何替換圖片
所有圖片為 Unsplash URL（`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`）。直接修改 `<img src>` 與 `alt` 即可；Hero 建議使用 `w=1920`。CSS 的 `--grade` 濾鏡會統一做電影調色，替換圖片後色調仍一致。

## 7. 圖片來源注意事項
圖片僅為設計示意，正式上線前請確認授權或替換為客戶自有作品。來源清單詳見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
於各頁 Footer 的 `.credits-grid` 與聯絡頁的 `.info-row` 尋找電話、Line、IG 文字並替換；社群連結的 `href="#"` 換成實際網址。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為示意區塊。替換為 Google Maps 嵌入 iframe 時，保持容器的 16:9 或固定高度並移除原有文字。

## 10. 如何修改 SEO title description
每頁 `<head>` 的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description` 皆可獨立修改。描述建議 60–160 字繁體中文。canonical 網域 `https://example.com` 請替換為正式網址。

## 11. 如何修改 CTA
Showreel 觸發點使用 `data-showreel` 屬性；General CTA 使用 `.btn`。修改按鈕文字即可，播放器圖片於各頁底部的 `.showreel-modal` 內調整 `.modal-slide` 的 `src` 與 `data-title`。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`。壓縮檔尚未產生，正式交付時再打包並將欄位改為 `true`，同時更新 `zipFile` 路徑。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
