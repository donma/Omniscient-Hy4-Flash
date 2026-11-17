# GALLERY NO.9 九號藝廊 — 樣板說明

## 1. 樣板介紹
這是一套適合藝廊、當代藝術空間與活動策展組織的深色樣板。全站以固定的 92px 左側導覽列作為視覺署名，內容區向右偏移，呈現博物館般的沉靜節奏。影像以細框包覆並配美術館說明牌，點綴色為陶土橘，不使用金色、霓虹或漸層。共 12 個完整繁體中文頁面。

## 2. 適合產業
藝廊、畫廊、美術館、藝術基金會、策展單位、文化展演場館、藝術商店與收藏顧問。

## 3. 版型說明
- **左側 rail（桌面）**：固定 92px，含旋轉字標「GALLERY NO.9」、12 個編號導覽連結、垂直「預約參觀 →」與「OPEN 11:00–19:00」。
- **頂列**：位於內容區，右側為「EN / 中文」；手機另顯示「菜單 ☰」按鈕。
- **手機**：rail 收合為頂列 + 左側抽屜，內容偏移歸零、單欄排布。
- **Hero**：大幅展覽影像 + 說明牌（展覽編號、標題、日期、策展短語、預約連結）。
- **節目**：programme-list，附「展出中／即將推出／已結束」狀態標籤。
- **作品**：exhibition-plate-grid，每張圖下方有編號、標題、藝術家、年份的說明牌。
- **Footer**：與左側 rail 對齊的極簡頁尾，含網站導覽、地址、營業時間與地圖連結。

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 內容重點 |
| --- | --- | --- |
| index.html | 首頁 | 當期展覽 Hero、節目、作品、參觀、商店、回饋、CTA |
| about.html | 關於藝廊 | 品牌故事、三個信念、團隊、里程碑 |
| services.html | 展覽節目 | 年度展覽列表與狀態、當期特展、延伸活動 |
| service-detail.html | 展覽詳情 | 主視覺、策展論述、展出精選、參觀資訊 |
| portfolio.html | 展出作品 | 作品 plate 網格、過往展出、參展藝術家 |
| reviews.html | 顧客回饋 | 語錄卡片、數字統計 |
| faq.html | 常見問題 | FAQ 手風琴（8 題） |
| booking.html | 預約參觀 | 假送出預約表單與提醒 |
| process.html | 參觀資訊 | 參觀流程、交通、展場禮儀、開放時間 |
| blog.html | 藝廊誌 | 最新文章與存檔 |
| blog-detail.html | 文章內容 | Article schema、完整內文 |
| contact.html | 聯絡我們 | 資訊列、地圖、聯絡表單 |

## 5. 如何修改品牌名稱
以編輯器全域搜尋 `GALLERY NO.9` 與 `九號藝廊`，替換為新品牌名。別忘了同步修改 12 頁的 `<title>`、`og:title`、`description`、JSON-LD 的 `name`，以及左側 rail 字標（`.rail-mark`）與 drawer、footer 中的品牌文字。

## 6. 如何替換圖片
所有照片皆為 Unsplash 示意圖，集中以 `https://images.unsplash.com/photo-…` 形式引用。直接替換 `<img src="...">` 或 `background-image:url('...')` 中的網址即可。建議維持約 4:5 或 16:10 的比例，並保留 `alt` 繁體中文說明。來源清冊見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
本樣板圖片僅供設計示意。正式上線前，請替換為藝廊自有或已取得授權的作品與空間照片，並確認肖像權與著作權。說明牌上的藝術家、作品名與年份亦為示範內容，請一併更新。

## 8. 如何修改 Line、IG、電話
電話出現在各頁 footer 與 contact.html，搜尋 `02-2700-1189` 與 `+886227001189` 替換。社群的部分在 contact.html 的「社群」資訊列（目前為 Instagram `@galleryno9` 與 Facebook「九號藝廊」）；若要加 Line，可新增一行 `.info-row`。

## 9. 如何修改 Google Map
contact.html 的 `.map-frame` 使用照片當作示意底圖，其「Google 地圖開啟 →」連結指向 Google Maps 搜尋頁。將 `href` 換成你的地圖分享連結，並更新 `geo` 座標（JSON-LD 的 latitude / longitude）與地址文字。

## 10. 如何修改 SEO title / description
每頁 `<head>` 內皆含 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description`。請逐頁檢查並改為真實網域與實際文案；`example.com` 為示意網域，須全數替換。

## 11. 如何修改 CTA
全站「預約參觀 →」出現在左側 rail（`.rail-cta`）、各章節尾聲的 `.thin-link` 與按鈕 `.btn`。若要改文案或目標，全域搜尋 `預約參觀` 與 `booking.html` 一併調整。表單假送出邏輯位於 `assets/js/main.js`。

## 12. ZIP 尚未打包說明
目前 `hasZip` 為 `false`，尚未產生下載用 zip。待主導者統一是截圖與壓縮後，預計輸出至 `../../downloads/template-012-art-gallery.zip`，並將 `template.json`、`tags.json` 的 `hasZip` 改為 `true`。

## 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
