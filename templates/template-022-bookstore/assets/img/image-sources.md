# 圖片來源清單｜template-022-bookstore

本樣板所有照片皆取自 `data/IMAGE-CATALOG.md` 提供的穩定 Unsplash URL，格式：

```
https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80
```

全站共使用 39 張圖片引用（10 種不同照片，分布於 10 個頁面），每一張皆有繁體中文 alt。照片僅供設計示意，正式交付前請替換為客戶自有或授權圖片。

---

## 使用照片一覽

| # | 照片 ID | 類別 | 出現頁面 | 常見 alt |
|---|---|---|---|---|
| 1 | photo-1481627834876-b7833e8f5570 | 書店/閱讀 | index, about, portfolio, blog, blog-detail | 書店中整齊的書架／滿滿藏書的畫面 |
| 2 | photo-1507842217343-583bb7270b66 | 書店/閱讀 | index, about, services, portfolio, blog | 高大書架上的大量藏書 |
| 3 | photo-1524995997946-a1c2e315a42f | 書店/閱讀 | index, services, service-detail, portfolio | 攤開的書本與木質桌面 |
| 4 | photo-1512820790803-83ca734da794 | 書店/閱讀 | index, portfolio, blog, blog-detail | 書架間的溫暖閱讀時光 |
| 5 | photo-1456513080510-7bf3a84b82f8 | 書店/閱讀 | index, services, portfolio, blog, blog-detail | 翻開的書本與一杯熱飲 |
| 6 | photo-1495446815901-a7297e633e8d | 書店/閱讀 | index, services, portfolio, blog, blog-detail | 堆疊整齊的書本與眼鏡 |
| 7 | photo-1503676260728-1c00da094a0b | 教育/閱讀 | index, portfolio, blog, blog-detail | 書桌上的書本與筆記本 |
| 8 | photo-1497633762265-9d179a990aa6 | 教育/閱讀 | index, portfolio | 書架上層疊的書與光線 |
| 9 | photo-1523240795612-9a054b0db644 | 教育/閱讀 | index, process, blog, blog-detail | 閱讀與書寫的安靜角落 |
| 10 | photo-1509062522246-3755977927d7 | 教育/閱讀 | reviews | 讀者在書桌前閱讀的溫暖畫面 |

---

## 各頁面圖片來源明細

### index.html（首頁）
- Hero 右側：photo-1481627834876-b7833e8f5570（w=1200）
- 本期選書 4 張：photo-1524995997946、photo-1507842217343、photo-1495446815901、photo-1456513080510（w=700）
- 選書專題 3 張：photo-1512820790803、photo-1503676260728、photo-1523240795612（w=800）
- 店主推薦：photo-1497633762265（w=1000）

### about.html（關於我們）
- 創店故事：photo-1507842217343（w=1000）
- 空間介紹：photo-1481627834876（w=1000）

### services.html（選書目錄）
- 新書上架 4 張：photo-1524995997946、photo-1507842217343、photo-1495446815901、photo-1456513080510（w=700）

### service-detail.html（書籍詳情）
- 書籍意象：photo-1524995997946（w=1000）

### portfolio.html（主題專櫃）
- 主題書架 8 張：photo-1495446815901、photo-1507842217343、photo-1524995997946、photo-1456513080510、photo-1512820790803、photo-1497633762265、photo-1481627834876、photo-1503676260728（w=700）
- 陳列說明：photo-1512820790803（w=1000）

### reviews.html（顧客回饋）
- 企業形象：photo-1509062522246（w=1000）

### process.html（參與流程）
- 小提醒：photo-1523240795612（w=1000）

### blog.html（閱讀專欄）
- 最新文章 3 張：photo-1512820790803、photo-1503676260728、photo-1523240795612（w=800）
- 早期文章 3 張：photo-1507842217343、photo-1481627834876、photo-1456513080510（w=800）
- 投稿說明：photo-1495446815901（w=1000）

### blog-detail.html（文章內容）
- 文章封面：photo-1512820790803（w=1400）
- 文中插圖：photo-1481627834876（w=1200）、photo-1456513080510（w=1200）
- 延伸閱讀 3 張：photo-1503676260728、photo-1523240795612、photo-1495446815901（w=800）

### faq.html / booking.html / contact.html
- 此三頁以文字與表單為主，沿用自己的版面配置，無額外照片需求（仍符合全站 25 張以上之規定）。

---

## 暖紙濾鏡（Warm Paper Filter）

所有照片於 CSS 中統一套用，以維持書店紙感一致性：

```css
filter: sepia(.18) saturate(.8) contrast(.96);
```

書籍封面卡另於 hover 時放大 1.05 倍，增加觸感與生命力。
