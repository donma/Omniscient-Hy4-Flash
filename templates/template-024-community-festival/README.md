# 繽紛里 社區節慶 — 樣板使用說明（template-024-community-festival）

## 1. 樣板介紹
本樣板為明亮高彩的社區節慶活動網站，以白色為底、黃橘綠紫四色積木、彩紙 confetti 與票券緞帶為特色。首頁以繽紛嘉年華 Hero 與「一起，把日子過成節慶！」標題吸引目光，輔以六大活動專區、三日行程、人氣攤位與社區回饋。共 12 個完整繁體中文頁面，適合親子同樂的活動組織使用。

## 2. 適合產業
社區節慶、里民活動、活動組織、親子樂園、市集節慶、學校園遊會、公益活動、地方創生與家庭日活動。

## 3. 版型說明
- Hero：colorful-carnival-hero（滿版節慶人群、黃橘紫漸層、彩色貼紙與 emoji）
- 導覽：bright-top-nav（白底深色文字、黃色 CTA 按鈕、右側 drawer）
- 活動分區：activity-zone-grid（六大彩色圓角卡片與 icon）
- 節目卡片：event-program-cards（照片、日期徽章、時間與加入行程）
- CTA：colorful-ticket-button（珊瑚橘按鈕、紫色票券緞帶、我們不見不散 band）
- Footer：festive-colorful-footer（四色條紋、專欄、電子報、社群）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 嘉年華 Hero、節目亮點、活動分區、三日行程、攤位、回饋、FAQ、CTA |
| about.html | 關於活動 | 緣起、理念、發展歷程與幕後團隊 |
| services.html | 節目內容 | 六大活動專區總覽與照片 |
| service-detail.html | 節目詳情 | 里民大舞台深度介紹與 Event schema |
| portfolio.html | 活動時刻 | 三日節目卡片與加入行程 |
| reviews.html | 參與者回饋 | 家庭與里民心聲、滿意度數據 |
| faq.html | 常見問題 | 12 題手風琴問答與 FAQPage schema |
| booking.html | 活動報名 | 報名表單（假送出） |
| process.html | 報名流程 | 四步驟報名說明 |
| blog.html | 活動花絮 | 文章列表與照片日記 |
| blog-detail.html | 文章內容 | 單篇文章與 Article schema |
| contact.html | 聯絡我們 | 聯絡資訊、地圖與表單 |

## 5. 如何修改品牌名稱
於各 HTML 的 `<header>` 尋找 `<a class="brand">`，替換「繽」「紛」「里」與「社區節慶」；`<title>`、OG 標題、Footer 的 `.f-logo`、JSON-LD 的 `name` 也一併替換。Fredoka 字體建議保持英文與數字圓潤風格。

## 6. 如何替換圖片
所有圖片為 Unsplash URL（`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`）。直接修改 `<img src>` 與 `alt` 即可；Hero 建議使用 `w=1920`。CSS 已統一套用 `saturate(1.3)` 提升鮮豔度，替換圖片後色調仍一致。

## 7. 圖片來源注意事項
圖片僅為設計示意，正式上線前請確認授權或替換為客戶自有作品。來源清單詳見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
於各頁 Footer 的 `.footer-social`、`.footer-col` 與聯絡頁的 `.mini-card`、`.info-row` 尋找電話、Email、Line、IG 文字並替換；社群連結的 `href="#"` 換成實際網址。

## 9. 如何修改 Google Map
各頁的 `.map-frame` 為示意區塊（使用照片與 `.map-pin` 標記）。替換為 Google Maps 嵌入 iframe 時，保持容器的固定高度並移除原有標記文字。

## 10. 如何修改 SEO title description
每頁 `<head>` 的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description` 皆可獨立修改。描述建議 60–160 字繁體中文。canonical 網域 `https://example.com` 請替換為正式網址。

## 11. 如何修改 CTA
主要 CTA 使用 `.btn` 系列（`.btn-coral`、`.btn-yellow`、`.btn-teal`、`.btn-purple`）。修改按鈕文字與 `href` 即可；按鈕點擊時會由 `main.js` 觸發 confetti 小動畫，可在 JS 末段關閉。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`。壓縮檔尚未產生，正式交付時再打包並將欄位改為 `true`，同時更新 `zipFile` 路徑。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
