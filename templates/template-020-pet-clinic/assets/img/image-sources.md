# 圖片來源清單 — template-020-pet-clinic（毛孩動物醫院）

本樣板所有圖片皆取自 `data/IMAGE-CATALOG.md` 提供的 Unsplash 穩定 URL，格式為：
`https://images.unsplash.com/photo-XXXX?auto=format&fit=crop&w=NNNN&q=NN`

全站共 **52 張圖片引用**（分佈於 12 頁），使用 **14 張** 來自「寵物」與「診所／醫療」類別的照片。所有 `<img>` 皆附有意義的繁體中文 alt。

> 免責聲明：圖片僅作為設計示意，正式交付前請替換為客戶自有或已授權圖片。

---

## 一、寵物類別（Pet）

| # | 照片 ID | 使用頁面（範例） | 代表性 alt |
|---|---|---|---|
| 1 | photo-1543466835-00a7907e9de1 | index（Hero）、services（照護卡片）、process（急診示意） | 獸醫師溫柔抱著快樂的狗狗 |
| 2 | photo-1450778869180-41d0601e046e | index（服務 02／回饋）、services、blog、blog-detail、reviews | 可愛的小狗與主人互動 |
| 3 | photo-1583511655857-d19b40a7a54e | index（服務 01／回饋）、services、service-detail、blog、blog-detail、booking | 甜甜的狗狗接受健康檢查 |
| 4 | photo-1514888286974-6c03e2ca1dba | index（服務 03）、services、blog、blog-detail、reviews | 貓咪優雅地休息著 |
| 5 | photo-1587300003388-59208cc962cb | portfolio（護理團隊） | 護理人員細心照顧毛孩 |
| 6 | photo-1517849845537-4d257902454a | index（服務 04）、services、blog、portfolio、reviews | 活潑的狗狗在戶外奔跑 |
| 7 | photo-1444212477490-ca407925329e | index（設施）、services、blog、reviews | 毛孩在舒適的環境中休息 |
| 8 | photo-1548199973-03cce0bbc87b | index（回饋）、about、services、blog、faq、reviews | 飼主與毛孩溫馨相處的畫面 |

## 二、診所／醫療類別（Clinic / Medical）

| # | 照片 ID | 使用頁面（範例） | 代表性 alt |
|---|---|---|---|
| 9 | photo-1559839734-2b71ea197ec2 | index、portfolio（林雅雯醫師） | 院長林雅雯醫師的專業形象 |
| 10 | photo-1612349317150-e413f6a5b16d | index、portfolio（陳冠宇醫師） | 外科主任陳冠宇醫師 |
| 11 | photo-1538108149393-fbbd81895907 | index、portfolio（張育慈醫師） | 急診醫師張育慈 |
| 12 | photo-1584982751601-97dcc096659c | index、portfolio（黃柏翰醫師） | 皮膚科醫師黃柏翰 |
| 13 | photo-1516549655169-df83a0774514 | index（設施）、contact | 明亮整潔的診療空間 |
| 14 | photo-1631217868264-e5b90bb7e133 | index（設施） | 現代化的醫療設備 |

---

## 三、完整 URL 範本（便於替換）

```text
https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80
https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1200&q=80
```

## 四、暖亮濾鏡說明
所有照片於 CSS 套用 `.img-warm`：

```css
.img-warm{filter:saturate(1.06) contrast(1.02) brightness(1.06) sepia(.05)}
```

此濾鏡讓照片呈現明亮、溫暖、親切的視覺一致性，符合白綠暖調的設計語言。頭像類小圖（如飼主頭像）亦沿用此濾鏡以維持一致。

## 五、preview.jpg 說明
`assets/img/preview.jpg` 目前為示意預留檔。正式交付時，請以本樣板首頁 Hero 的獸醫與毛孩照片（photo-1543466835-00a7907e9de1）或由主導者截圖產生 1200×630 的社群預覽圖取代，並同步更新各頁 `og:image`。
