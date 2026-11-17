# 圖片來源清單 — template-021-local-farm（土地刻度 小農）

本樣板所有圖片皆取自 Unsplash，網址格式：

```
https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=1200&q=80
```

全站共 74 張圖片引用（20 張 unique 照片 ID），分佈於 12 個頁面，每張 `<img>` 皆附有意義的繁體中文 `alt`。照片僅作為設計示意，正式上線前請確認授權或替換為客戶自有圖片。

---

## 農田 / 自然場景（主要 Hero 與章節）

| 照片 ID | 使用位置 | 說明 |
|---|---|---|
| photo-1500382017468-9049fed747ef | index Hero、index 全景、portfolio interlude、reviews、blog、contact 等 | 清晨農田與遠山，最主要的農田風景 |
| photo-1500937386664-56d1dfef3854 | index CH.01、about Hero、process、blog | 農人在田間照料作物 |
| photo-1472396961693-142e6e269027 | index interlude、about interlude、portfolio interlude、reviews interlude、blog、blog-detail 等 | 薄霧中的田野與樹林 |
| photo-1492496913980-501348b61469 | index CH.05 | 田間的新鮮蔬菜 |
| photo-1416879595882-3373a0480b5b | index CH.05、portfolio、blog-detail | 雙手種下幼苗 |

## 農人 / 肖像

| 照片 ID | 使用位置 | 說明 |
|---|---|---|
| photo-1523348837708-15d4a09cfac2 | index CH.03/CH.05、about、faq Hero、portfolio、blog、blog-detail 等 | 溫室秧苗與農人形象 |
| photo-1559056199-641a0ac8b55e | index CH.03 | 農場伙伴抱著新鮮蔬菜 |
| photo-1540420773420-3366772f4999 | index CH.03、service-detail | 菜園中巡視作物 |
| photo-1500648767791-00dcc994a43e | about、reviews 頭像 | 農夫阿坤伯肖像 |
| photo-1494790108377-be9c29b29330 | about、reviews 頭像 | 農夫雅玲肖像 |
| photo-1507003211169-0a1dd7228f2d | about、reviews 頭像 | 農夫志明肖像 |
| photo-1544005313-94ddf0286df2 | index、reviews 頭像 | 訪客頭像 |
| photo-1438761681033-6461ffad8d80 | index、reviews 頭像 | 訪客頭像 |
| photo-1508214751196-bcfd4ca60f91 | reviews 頭像 | 訪客頭像 |

## 作物 / 蔬菜 / 農產

| 照片 ID | 使用位置 | 說明 |
|---|---|---|
| photo-1511690743698-d9d85f2fbf38 | index CH.02、services Hero、about、portfolio、blog、blog-detail 等 | 新鮮採收的蔬菜 |
| photo-1542838132-92c53300491e | index 春季、services、portfolio、blog | 葉菜與市場蔬菜 |
| photo-1518977676601-b53f82aba655 | index 夏季、services、service-detail Hero | 成熟的番茄 |
| photo-1506976785307-8732e854ad03 | index 秋季、services、portfolio | 秋季南瓜田 |
| photo-1598170845058-32b9d6a5da37 | index 冬季、services、portfolio | 冬季高麗菜田 |
| photo-1464226184884-fa280b87c399 | index CH.05、services、booking Hero、portfolio、service-detail 等 | 農田漫步與採收裝箱 |

---

## 使用備註

- 替換圖片時，直接修改 `<img src>`，並同步更新 `alt` 文字。
- Hero 圖片建議維持 `w=1920`，一般內容使用 `w=1200` 或 `w=800`。
- 所有圖片統一由 CSS `.farm-img` 套用 sepia 暖大地濾鏡，更換後仍保持一致色調。
- 若某張圖片無法顯示，可換用 `data/IMAGE-CATALOG.md` 的有機／農產／農場類別其他照片 ID。
