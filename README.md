# 全職設計視角｜24 套輕量化 AI 網站樣板展示系統

> Full-Site Design Perspective — 一套可以拿去參賽、展示、交付設計師修改的作品級樣板庫。
>
> **本專案全部內容皆由 Hy4 flash Free (opencode-go)（opencode-go）輔助產生。**

---

## 目录

- [一、这是什么](#一这是什么)
- [二、核心信念](#二核心信念)
- [三、生成模型標註](#三生成模型標註)
- [四、適合誰使用](#四適合誰使用)
- [五、專案數據一覽](#五專案數據一覽)
- [六、24 套樣板清單](#六24-套樣板清單)
- [七、技術架構](#七技術架構)
- [八、資料夾結構](#八資料夾結構)
- [九、如何開啟與使用](#九如何開啟與使用)
- [十、每套樣板內含什麼](#十每套樣板內含什麼)
- [十一、如何修改樣板](#十一如何修改樣板)
- [十二、如何更新資料與同步](#十二如何更新資料與同步)
- [十三、截圖與預覽規則](#十三截圖與預覽規則)
- [十四、圖片來源與授權](#十四圖片來源與授權)
- [十五、ZIP 打包說明](#十五zip-打包說明)
- [十六、驗收清單](#十六驗收清單)
- [十七、常見問題](#十七常見問題)
- [十八、下一步建議](#十八下一步建議)

---

## 一、這是什么

「全職設計視角」不是一個單頁模板下載站，而是一套**完整網站樣板展示系統**。

核心價值只有一句話：

```text
不是下載一個首頁，而是下載一整套可交付客戶的完整網站。
```

每個樣板都是一個行業的精華，內含 **12 個完整頁面**、專屬設計語言、繁體中文選單、完整 SEO、豐富圖片，以及可直接用瀏覽器開啟、設計師能動手修改的原始碼。

本專案共 **24 套樣板、288 個 HTML 頁面**，深色底與淺色底各 12 套。每一套都是從零手寫、獨立設計，不是換色換圖的量產模板。

## 二、核心信念

施工時始終以「獲獎無數的網頁設計大師」視角要求自己：

- 每一套代表一個產業的精華，要能參賽、能展示、能交付。
- 不可使用單一 generator 批次產生全部樣板。
- 不可只換顏色、只換文案、只換圖片、只換 Hero。
- 每套與其他套的版型重複度不得超過 20%。
- 子頁面必須跟首頁同一套設計語言，不可首頁高級、子頁變普通卡片。
- 所有選單皆為繁體中文，文字颜色與背景對比清楚，手機有漢堡選單。

詳細的差異規劃記錄在 `data/layout-assignment.json`，施工公約在 `data/BUILD-GUIDE.md`。

## 三、生成模型標註

本專案**全部樣板、全部頁面、全部說明文件、資料、腳本與截圖工具，皆由以下模型輔助產生**：

```md
## 生成資訊

本專案由以下模型輔助產生：

- Main Generation Model：Hy4 flash Free (opencode-go)
- Review / Planning Model：Hy4 flash Free (opencode-go)
- Generated Date：2026-11-17
- Operator：AI-assisted static website template generation
```

> 注意：本專案為 AI-assisted static website template gallery。正式交付客戶前，仍需人工檢查圖片授權、文案、連結與 SEO 設定。

## 四、適合誰使用

| 對象 | 用途 |
|---|---|
| 設計師 | 拿現成作品級版型當基底，快速改成客戶風格 |
| 業務 | 用 Preview 直接展示給客戶看完整網站樣貌 |
| 網站製作人員 | 取得 12 頁完整結構，不用從零刻Hero與內頁 |
| 接案工作者 | 依產業挑樣板，缩短提案與製作時間 |
| 中小企業網站團隊 | 建立統一的交付品質與版型規範 |

## 五、專案數據一覽

| 指標 | 數量 |
|---|---:|
| 樣板套數 | 24 |
| 深色底 / 淺色底 | 12 / 12 |
| 每套頁數 | 12 |
| HTML 頁面總數 | 288 |
| 圖片引用總數 | 1,431 處（全部含 alt）|
| 產業分類 | 11 類 |
| 版型類型 | 17 種 |
| Edge 預覽縮圖 | 24 張（1440×2200）|
| 自動化驗收 | `tools/verify.py` → 0 問題 |

## 六、24 套樣板清單

### 深色底 12 套

| 編號 | 名稱 | 產業 | 版型 |
|---|---|---|---|
| T001 | Luxury Bar | 餐飲甜點 | 大圖沉浸式 Hero（黑金酒吧）|
| T002 | Cyber Security | 科技商務 | Dashboard / Data 信任型 |
| T003 | Fashion Boutique | 零售商品 | Lookbook Gallery 型 |
| T004 | Fitness Coach | 美容健康 | Split Trust 專業信任型（高對比健身）|
| T005 | Film Studio | 創意設計 | Masonry / Portfolio 作品牆（電影感）|
| T006 | AI SaaS | 科技商務 | Bento Grid 現代資訊版（紫藍漸層）|
| T007 | Jazz Club | 餐飲甜點 | 影音 / 氛圍導向（復古黑膠）|
| T008 | Premium Car | 零售商品 | Product Catalog 商品目錄型（黑銀車商）|
| T009 | Night Spa | 美容健康 | Fullscreen Visual 沉浸視覺型（深綠療癒）|
| T010 | Architecture Dark | 空間生活 | Case Study Index 案例索引型 |
| T011 | Music Festival | 活動組織 | Event / Campaign 活動型（黑紫舞台）|
| T012 | Art Gallery | 活動組織 | Left Rail Navigation 左側導覽型 |

### 淺色底 12 套

| 編號 | 名稱 | 產業 | 版型 |
|---|---|---|---|
| T013 | Beauty Studio | 美妝美業 | 左右分割 Split Layout（奶茶柔和）|
| T014 | Family Clinic | 美容健康 | Split Trust 專業信任型（白藍醫療）|
| T015 | Brunch Cafe | 餐飲甜點 | Magazine 雜誌式首頁（奶油生活）|
| T016 | Flower Wedding | 創意設計 | Masonry / Portfolio 作品牆（米白花藝）|
| T017 | Organic Grocery | 零售商品 | Product Catalog 商品目錄型（淺綠自然）|
| T018 | Language School | 教育課程 | Pricing-first 方案導向型（明亮藍黃）|
| T019 | Home Decor | 空間生活 | Magazine 雜誌式首頁（暖白家居）|
| T020 | Pet Clinic | 寵物服務 | Split Trust 專業信任型（白綠寵物）|
| T021 | Local Farm | 地方品牌 | Storytelling 長卷軸（大地農場）|
| T022 | Bookstore | 地方品牌 | Knowledge Hub 知識中心型（暖棕紙感）|
| T023 | Coworking Space | 空間生活 | Bento Grid 現代資訊版（白灰共享空間）|
| T024 | Community Festival | 活動組織 | Event / Campaign 活動型（明亮高彩）|

## 七、技術架構

純前端靜態網站，可直接使用 `file://` 開啟，**不需安裝、不需 build**。

允許並使用的技術：

- HTML5 / CSS3 / JavaScript（原生）
- Bootstrap 5、Bootstrap Icons、Font Awesome（CDN，依樣板需求）
- Google Fonts（CDN）
- Unsplash 網路圖庫圖片
- Microsoft Edge + Playwright（截圖）

明確禁止：React、Vue、Angular、npm、Vite、Webpack、後端資料庫、登入系統、購物車、會員系統，以及任何需要 build 的流程。設計師必須能直接打開 HTML / CSS / JS 修改。

## 八、資料夾結構

```text
.
├── index.html                  主展示站（可直接打開）
├── template-detail.html        樣板詳情頁（讀取 ?id= query string）
├── README.md                   本說明
├── final.report.md             最終施工報告
│
├── assets/
│   ├── css/gallery.css         主展示站樣式
│   ├── js/gallery.js           主展示站邏輯（含 tags 容錯、篩選、搜尋、Grid/List）
│   ├── js/data.js              file:// 用的資料（與 templates.json 同步，24 筆）
│   └── img/previews/           24 張 Edge 預覽縮圖（template-001.jpg …）
│
├── data/
│   ├── templates.json          正式資料來源（24 筆）
│   ├── layout-assignment.json  24 套差異與防重複規劃
│   ├── quality-report.md       品質檢查報告
│   ├── BUILD-GUIDE.md          施工公約
│   └── IMAGE-CATALOG.md        共用圖片網址目錄
│
├── templates/
│   └── template-XXX-slug/
│       ├── index.html, about.html, services.html, service-detail.html,
│       │   portfolio.html, reviews.html, faq.html, booking.html,
│       │   process.html, blog.html, blog-detail.html, contact.html   （共 12 頁）
│       ├── template.json       樣板中繼資料
│       ├── tags.json           標籤（陣列）
│       ├── prompt.md           這套樣板的 AI prompt（18 章節）
│       ├── README.md           樣板自己的說明
│       └── assets/
│           ├── css/style.css       主視覺設計系統
│           ├── css/responsive.css  RWD 微調
│           ├── js/main.js          漢堡選單 / FAQ / 假表單 / 回頂部
│           └── img/
│               ├── preview.jpg     Edge 頁面截圖預覽
│               └── image-sources.md 圖片來源紀錄
│
├── downloads/
│   └── .gitkeep                ZIP 尚未打包（佔位）
│
└── tools/
    ├── capture_previews.py     Edge + Playwright 截圖工具
    ├── verify.py               自動化驗收工具
    └── audit_layout.py         桌面/手機版面巡邏工具
```

## 九、如何開啟與使用

**方式一（最簡單）**：直接雙擊根目錄 `index.html`，即可在瀏覽器看到主展示站。

**方式二（建議，避免 `file://` 限制）**：在本機啟動靜態伺服器。

```bash
# Python
python -m http.server 8099

# 或 npx
npx serve .
```

然後開啟：

- 主展示站：`http://localhost:8099/index.html`
- 詳情頁範例：`http://localhost:8099/template-detail.html?id=template-006`

主展示站功能：

- 依**產業分類 / 背景模式 / 版型類型**篩選
- 熱門標籤快速篩選
- 搜尋欄（樣板名、產業、標籤）
- Grid / List 切換
- 每張卡片可「預覽網站 / 查看詳情 / 查看 Prompt / ZIP 待打包」

## 十、每套樣板內含什麼

每套固定有 **12 個頁面**，內容皆充實，沒有「建置中」空殼：

| 檔案 | 頁面用途 |
|---|---|
| `index.html` | 首頁（專屬 Hero + 核心內容 + CTA）|
| `about.html` | 關於我們 / 品牌故事 |
| `services.html` | 服務項目 / 商品系列 / 課程 |
| `service-detail.html` | 單項服務或商品詳情 |
| `portfolio.html` | 作品 / 案例 / 空間 / 團隊 |
| `reviews.html` |  고객 / 學員 / 學員回饋 |
| `faq.html` | 常見問題（可展開手風琴）|
| `booking.html` | 預約 / 報名 / 訂位（假送出表單）|
| `process.html` | 流程 / 步驟說明 |
| `blog.html` | 文章列表 |
| `blog-detail.html` | 文章內容（含 Article Schema）|
| `contact.html` | 聯絡我們（資訊 + 地圖 + 表單）|

每頁都包含：`title`、`meta description`、canonical、Open Graph（title / description / image）、語意化 HTML5、單一 `h1`、圖片 `alt`，以及依產業放置的 Schema placeholder（LocalBusiness / Organization / Article / FAQPage 等）。

## 十一、如何修改樣板

1. 進入想改的 `templates/template-XXX-slug/`。
2. 修改 12 個 HTML 的文字（品牌名、電話、地址、文案）。
3. 修改 `assets/css/style.css`（主視覺：顏色、字體、間距）與 `responsive.css`（RWD）。
4. 修改 `assets/js/main.js`（漢堡選單、FAQ、假表單、回到頂部）。
5. 更新 `template.json`、`tags.json`、`prompt.md`、`README.md` 與 `assets/img/image-sources.md`。
6. 替換圖片：把 Unsplash 網址換成客戶自有或已授權圖片，並同步更新 `image-sources.md`。

手機漢堡選單位置記錄在每套 `template.json` 的 `navigationPattern`（左側或右側），請保持原本位置以維持一致的專業感。

## 十二、如何更新資料與同步

`data/templates.json` 是正式資料來源。修改後，**必須同步產生** `assets/js/data.js`，否則 `file://` 開啟會讀到舊資料。

```powershell
$json = Get-Content -Raw -Encoding UTF8 'data/templates.json'
$out = "const TEMPLATES_DATA = " + $json.Trim() + "`n"
[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'assets/js/data.js'), $out, (New-Object System.Text.UTF8Encoding($false)))
```

規則：

- `templates.json` 與 `data.js` 筆數必須一致（皆為 24）。
- `tags` 必須是陣列，不可寫成物件。
- `gallery.js` 的 fallback 只保留 3 筆示範資料，並保留 `getTemplateTags()` 容錯。

檢查同步狀態：

```bash
python tools/verify.py      # 驗收全部 24 套
python tools/audit_layout.py # 桌面/手機版面巡邏
```

## 十三、截圖與預覽規則

所有預覽縮圖皆使用 **Microsoft Edge + Playwright** 產生：

- 每張截圖前等待 **1000ms**（等字型、圖片、layout、動畫穩定）
- 尺寸：**1440 × 2200** 可視區，可見 Hero 與後續章節，能看出版型
- 輸出：`templates/template-xxx/assets/img/preview.jpg` 與 `assets/img/previews/template-xxx.jpg`

重新產生全部縮圖：

```bash
python tools/capture_previews.py
```

## 十四、圖片來源與授權

- 圖片網址集中在 `data/IMAGE-CATALOG.md`，各套使用紀錄在 `assets/img/image-sources.md`。
- 來源以 Unsplash 為主，全部檢查過可顯示（無 403 / 404、無浮水印）。
- 已修復 2 個失效圖片 ID，Edge 實測首頁破圖數為 0。

> 重要：所有圖片**僅作為設計示意**。正式交付客戶前，請替換為客戶自有或已授權圖片，避免版權爭議。

## 十五、ZIP 打包說明

所有樣板的 `hasZip` 皆為 `false`。展示站與詳情頁的 ZIP 按鈕顯示「**ZIP 待打包**」，為 disabled 狀態，不會連結到不存在的檔案。

未來確認授權與文案後，可打包：

```powershell
Compress-Archive -Path templates\template-001-luxury-bar\* `
  -DestinationPath downloads\template-001-luxury-bar.zip
```

打包後將 `data/templates.json` 與各 `template.json` 的 `hasZip` 改為 `true`，再依第十二節同步 `data.js`。

## 十六、驗收清單

**主展示站**

- [x] `index.html` 可直接開啟
- [x] `template-detail.html` 可讀取 query string
- [x] 卡片、篩選、Grid/List、搜尋可用
- [x] 選單全繁體中文、無亂碼、對比清楚
- [x] `templates.json` 與 `data.js` 同步（24 筆）
- [x] ZIP 按鈕顯示待打包

**每套樣板**

- [x] 12 頁完整且風格一致
- [x] 5 個中繼檔齊全
- [x] `style.css`、`responsive.css`、`main.js`、`preview.jpg` 齊全
- [x] `hasZip=false`、選單繁中、漢堡在左或右側
- [x] FAQ、假表單可用、圖片可顯示
- [x] SEO / OG / Schema 完整

**截圖**

- [x] 使用 Edge、等待 1 秒、1440×2200
- [x] 24 張 previews 與 24 張樣板預覽皆存在

## 十七、常見問題

**Q：為什麼卡片預覽是 1440×2200 而不是很長的整頁？**
A：整頁截圖在卡片 16:10 的框裡會被裁切，只能看到局部。改用可視區截圖，能同时看到 Hero 與開頭章節，更能看出版型。

**Q：可以直接雙擊 HTML 打開嗎？**
A：可以。若遇到字型或圖片載入問題，建議用本機伺服器（`python -m http.server 8099`）。

**Q：漢堡選單都在哪一側？**
A：依樣板設計在左側或右側，記録於各套 `template.json`。兩者都符合規格。

**Q：為什麼 ZIP 不能下載？**
A：依施工規格暫不打包，`hasZip=false`，按鈕僅顯示「待打包」。

## 十八、下一步建議

1. 依客戶產業挑選相近樣板，替換品牌名、圖片、Line / IG / 電話與地圖。
2. 正式交付前以真實手機再抽查漢堡選單與假表單。
3. 若要打包 ZIP，確認授權後修改 `hasZip` 並同步 `data.js`。
4. 可依此規格繼續擴充第 25 套以後的樣板（沿用 `data/BUILD-GUIDE.md`）。

---

## 版權與免責聲明

本專案全部內容由 **Hy4 flash Free (opencode-go)** 輔助產生，作為設計展示與樣板基底之用。圖片僅供示意，正式商業交付前請完成授權檢查、文案確認與 SEO 設定。

© 2026 全職設計視角
