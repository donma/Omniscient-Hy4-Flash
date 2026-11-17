# 毛孩動物醫院 — 樣板使用說明（template-020-pet-clinic）

## 1. 樣板介紹
本樣板為溫暖專業的動物醫院網站，以白綠暖調、圓潤肉墊 motif、50/50 Split Hero 與 24H 急診 CTA 為特色。首頁以「把毛孩，當成家人照顧」的信任訊息開場，透過交替服務列、醫師團隊、設施畫廊與飼主回饋建立信任，最後導向線上預約掛號。共 12 個完整繁體中文頁面，全站 50 張圖片引用。

## 2. 適合產業
動物醫院、寵物診所、獸醫診所、24 小時急診動物醫院、寵物美容、寵物保健與照護服務。

## 3. 版型說明
- Hero：white-green-warm-split-hero（左白綠文案面板、右暖調毛孩照片與浮動門診卡、肉墊徽章）
- 導覽：top-booking-nav（白底、肉墊品牌 mark、右側綠色預約按鈕、手機右側 drawer）
- 服務：service-split-rows（六組圖文交替列，含編號、名稱、說明、價格、了解詳情）
- 照護卡片：pet-care-service-cards（幼年、成年、高齡照護卡片）
- CTA：warm-booking-button＋綠色 CTA 帶與 24H 急診專線
- Footer：warm-green-footer（暖綠背景、四欄資訊、急診提示、肉墊分隔線）

## 4. 12 頁檔案說明
| 檔案 | 頁面 | 說明 |
|---|---|---|
| index.html | 首頁 | 信任 Hero、數據、服務、醫師、設施、回饋、FAQ、CTA（含 LocalBusiness schema） |
| about.html | 關於我們 | 成立理念、核心價值、成長歷程 |
| services.html | 醫療服務 | 六大服務交替列與照護方案卡片 |
| service-detail.html | 服務詳情 | 全家健康健檢深度說明、流程 |
| portfolio.html | 醫師團隊 | 醫師與照護成員介紹 |
| reviews.html | 飼主回饋 | 真實好評與真實故事 |
| faq.html | 常見問題 | 兩組 FAQ 手風琴 |
| booking.html | 預約掛號 | 預約表單（假送出） |
| process.html | 就診流程 | 六步驟與急診流程 |
| blog.html | 寵物知識 | 六篇照護文章列表 |
| blog-detail.html | 文章內容 | 單篇文章與 Article schema |
| contact.html | 聯絡我們 | 診所資訊、地圖示意、聯絡表單 |

## 5. 如何修改品牌名稱
於各 HTML 的 `<header>` 尋找 `<a class="brand">`，替換「毛孩動物醫院」與 `PAW CARE · PET CLINIC`；`<title>`、OG 標題、Footer 的 `.brand-name`、JSON-LD 的 `name` 也一併替換。肉墊 mark 使用 🐾 emoji，可直接更換。

## 6. 如何替換圖片
所有圖片為 Unsplash URL（`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80`），Hero 建議使用 `w=1400`。直接修改 `<img src>` 與 `alt` 即可。CSS 的 `.img-warm` 濾鏡會統一做暖亮調色，替換圖片後色調仍一致。來源清單詳見 `assets/img/image-sources.md`。

## 7. 圖片來源注意事項
圖片僅為設計示意，正式上線前請確認授權或替換為客戶自有的毛孩與診所照片。請勿直接將示意照片作為正式商業使用。

## 8. 如何修改 Line IG 電話
於各頁 Footer 的 `.socials` 與聯絡頁的 `.info-row` 尋找電話、Line、IG 文字並替換；社群連結的 `href="#"` 換成實際網址。急診專線 02-2700-1234 分散於各頁 Footer、CTA 與聯絡頁，請一併搜尋替換。

## 9. 如何修改 Google Map
`contact.html` 中的 `.map-frame` 為示意區塊。替換為 Google Maps 嵌入 iframe 時，保持容器的固定高度並移除原有文字，建議加上 `loading="lazy"`。

## 10. 如何修改 SEO title description
每頁 `<head>` 的 `<title>`、`<meta name="description">`、`<link rel="canonical">` 與 `og:title` / `og:description` 皆可獨立修改。描述建議 60–160 字繁體中文。canonical 網域 `https://example.com` 請替換為正式網址。首頁與文章頁的 JSON-LD 也請同步更新品牌資訊。

## 11. 如何修改 CTA
主要 CTA 使用 `.btn` 搭配 `.btn-green`（綠色）、`.btn-outline`、`.btn-white`、`.btn-cream`。修改按鈕文字與 `href` 即可；急診綠色 CTA 帶位於 `.cta-band`，電話顯示於 `.hotline`。

## 12. ZIP 尚未打包說明
`template.json` 與 `tags.json` 中 `hasZip` 皆為 `false`。壓縮檔尚未產生，正式交付時再打包並將欄位改為 `true`，同時更新 `zipFile` 路徑。

## 13. 生成資訊
本樣板由以下模型輔助產生：
- Model: Hy4 flash Free (opencode-go)
- Date: 2026-11-17
- Operator: AI-assisted static template generation
