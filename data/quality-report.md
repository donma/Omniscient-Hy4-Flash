# 品質檢查報告

專案：全職設計視角 · 24 套輕量化 AI 樣板
檢查日期：2026-11-17
檢查工具：`tools/verify.py` + Microsoft Edge 手動抽驗

---

## 1. 整體統計

| 項目 | 數量 | 狀態 |
|---|---:|---|
| 樣板套數 | 24 | 完成 |
| 深色底 | 12 | 完成 |
| 淺色底 | 12 | 完成 |
| HTML 頁面總數 | 288 | 完成 |
| 每套中繼檔 | 5（template.json / tags.json / prompt.md / README.md / image-sources.md）| 完成 |
| 圖片引用總數 | 逾 900 處 | 每套 ≥ 25 張 |
| 失效 Unsplash 圖片 | 0 | 已修復 2 個失效 ID |

## 2. 自動化檢查結果

`python tools/verify.py` 檢查項目：

- [x] 12 頁檔案存在
- [x] 每頁 SEO：title / meta description / canonical / og:title / og:description / og:image
- [x] 每頁 `lang="zh-Hant"`、header / main / footer、style.css 與 main.js 引用
- [x] 每頁恰好一個 `<h1>`
- [x] 所有 `<img>` 皆有 `alt`
- [x] 無「建置中 / Coming Soon / 內容待補」
- [x] 無簡體字（掃描常見簡體字集合）
- [x] template.json / tags.json 為有效 JSON、`hasZip=false`、`pageCount=12`、`generatedBy` 已填寫
- [x] prompt.md 含全部 18 章節與強制句子
- [x] README.md 含 13 節與生成資訊

## 3. 圖片檢查（§12）

使用 HEAD 請求檢查所有首頁出現的 Unsplash photo ID：

- 檢查 143 個唯一 ID
- 138 個回傳 200
- 發現 2 個失效 ID 並已全面替換：
  - `photo-1536935338788846bb998181` → `photo-1445116572660-236099ec97a0`
  - `photo-1571266028243-d220c9b3b2d2` → `photo-1531058020387-3be344556be6`
- Edge 瀏覽器實測 21 套首頁：`naturalWidth === 0` 的破圖數量為 0

## 4. 選單與 RWD 檢查（§9–§11）

- 所有選單文字皆為繁體中文，無亂碼
- 桌面版導覽維持 6–8 個主要連結，完整 12 項置於手機抽屜
- 手機漢堡選單位置：每套皆為左側或右側（詳見各套 template.json 的 navigationPattern）
- T001 曾於約 1056px 發生置中品牌與右側選單重疊，已將漢堡斷點提前至 1280px 修復
- 掃描 24 套首頁 header 元素重疊：僅 T001 曾有真實重疊，其餘為容器內誤判

## 5. 版型差異檢查（§25）

24 套在 Hero Pattern、Navigation Pattern、Content Rhythm、Image Strategy、CTA Strategy、Portfolio Layout、Services Layout、Footer Layout 等維度皆至少 4 項不同。詳細差異定義見 `data/layout-assignment.json` 的 `differentFrom` 與 `differenceReason` 欄位。

代表差異舉例：

| 樣板 | Hero | Navigation | 標誌性版型 |
|---|---|---|---|
| T001 | 全螢幕黑金氛圍 | 置中字標 | 固定訂位列 |
| T002 | 資安控制台 Dashboard | 左 Logo 右膠囊 | 數據密集卡 + 終端機 |
| T003 | 左右編輯式 Lookbook | 寬字距極簡 | 非對稱作品配對 |
| T006 | 漸層發光 Bento | 懸浮膠囊導覽 | 玻璃 Bento 磁磚 |
| T012 | 左側導覽展覽 Hero | 垂直左側軌道 | 全站左 rail |
| T016 | 浪漫花藝拼貼 | 居中手寫字 | Masonry 花藝牆 |
| T021 | 大地故事 Hero | 章節錨點 | 長卷軸敘事 |

## 6. 待完成項目

- [ ] 點陣預覽圖（`previews/*.jpg`）由 Edge 截圖工具產生
- [ ] 最終報告 `final.report.md`
- [ ] ZIP 套件尚未打包（依規格 `hasZip=false`）
