# MAISON NOIR 黑屋｜Fashion Boutique 樣板說明

## 1. 樣板介紹
本樣板是一套精品服飾選物網站，代號 template-003。設計語言為單色時尚編輯感：近黑底色、米白文字、純白重點與單一暖灰褐點綴。以「Less, but better.」為核心訊息，透過大膽留白、極寬字距、斜體襯線標題與灰階形象照，呈現安靜而耐久的購物體驗。全站共 12 頁，皆為手寫 HTML，可直接以 `file://` 開啟預覽。

## 2. 適合產業
精品服飾、設計師品牌、服飾選物店、電商服飾、時尚媒體、形象顧問、極簡生活品牌，以及任何希望能以高級雜誌感呈現商品的行業。

## 3. 版型說明
- Hero：42% 黑色文字面板 + 58% 滿高時尚照片的分割式形象 Hero，接縫處有垂直 SCROLL 標籤。
- 導覽：左側寬字距品牌字、右側極小大寫連結與 SHOP 文字連結，僅底線 hover 效果。
- 內容節奏：形象 Hero → 宣言 → 不對稱形象圖對 → 編號系列清單 → 品牌故事 → Lookbook 畫廊 → 引言 → 訂閱頁尾。
- 系列呈現：collection-line-list，以大號斜體編號、系列名、季節、件數與右側箭頭組成，非卡片式。
- 作品呈現：asymmetric-lookbook-pairs，以 CSS Grid 交錯大小與偏移量安排形象照。
- CTA：一律採用細底線文字連結；頁尾提供單一行內 Email 訂閱表單。
- 頁尾：巨型置中襯線品牌字，上方訂閱表單，下方極簡選單連結。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 主要內容 |
| --- | --- | --- |
| index.html | 首頁 | 分割 Hero、宣言、形象圖對、系列清單、故事、畫廊、引言 |
| about.html | 品牌故事 | 起源、Less, but better. 信念、里程碑、選物標準 |
| services.html | 商品系列 | 六個系列的編號清單、故事段落、選物三問 |
| service-detail.html | 單品詳情 | 結構羊毛長外套、尺寸選擇、規格、搭配建議、相關單品 |
| portfolio.html | 形象 Lookbook | 章節式不對稱形象照、灰階畫廊 |
| reviews.html | 顧客回饋 | 八則顧客評價、感謝文字 |
| faq.html | 常見問題 | 八題 FAQ 手風琴與到店提醒 |
| booking.html | 選物商店 | 本季精選單品、到店諮詢預約表單 |
| process.html | 購物流程 | 五步驟、售後承諾、配送退換明細 |
| blog.html | 選物文章 | 最新與過往文章列表 |
| blog-detail.html | 文章內容 | 完整文章、Article Schema、章節與圖片說明 |
| contact.html | 聯絡我們 | 門市資訊、地圖意象、聯絡表單 |

## 5. 如何修改品牌名稱
全站品牌字出現於導覽、抽屜、頁面標題、引言與頁尾巨型字。請以文字編輯器全站搜尋 `MAISON NOIR` 與 `黑屋` 並替換。頁尾巨型字建議保持在 10–14 個字元內，以免在手機版溢出。

## 6. 如何替換圖片
所有圖片皆為 Unsplash 遠端 URL，格式為 `https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`。可直接替換 `photo-XXXX` 與 `w`、`q` 參數；若改用本地圖片，請放入 `assets/img/` 並將 `src` 改成相對路徑。記得同步更新每張圖片的 `alt` 繁體中文說明。

## 7. 圖片來源注意事項
目前圖片僅作為設計示意，來源為 Unsplash 時尚類別照片。正式交付客戶前，請替換為客戶自有或已授權圖片，並確認授權範圍。詳細照片 ID 與使用位置請見 `assets/img/image-sources.md`。

## 8. 如何修改 Line IG 電話
本樣板未內嵌社群圖示，改以文字連結呈現。電話號碼出現在 `contact.html` 的 `tel:+886225001688` 與字幕文字；Email 出現在 `mailto:hello@maisonnoir.tw`。若需加入 Line / IG，請在頁尾 `.footer-links` 內新增文字連結即可，不必另加按鈕樣式。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 目前使用灰階照片作為地圖意象。若要嵌入真實地圖，可將該區塊的 `<img>` 換成 Google Maps 嵌入用 `<iframe>`，並保留 `.map-frame` 的外框與高度設定。

## 10. 如何修改 SEO title description
每頁 `<head>` 皆有 `<title>`、`meta description`、`link canonical` 與三組 `og:` 標籤。請逐頁修改為該頁繁體中文內容，description 建議 60–160 字。首頁另有 `LocalBusiness` JSON-LD，`blog-detail.html` 另有 `Article` JSON-LD，請一并更新品牌與日期資訊。

## 11. 如何修改 CTA
所有 CTA 皆使用 `.text-link` 樣式，只需修改連結文字與 `href`。例如將「探索系列 →」改為客戶指定文案即可，不需要調整 CSS。頁尾訂閱表單的文字可在 `.newsletter-block` 中修改。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生 `template-003-fashion-boutique.zip`。待主導者確認驗收後，再將整個資料夾打包放入 `../../downloads/`。打包時請確認 12 個 HTML、CSS、JS、中繼檔與 `preview.jpg` 皆在資料夾內。

## 13. 生成模型資訊

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
