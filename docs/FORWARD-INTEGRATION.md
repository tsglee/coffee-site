# 佛我咖啡：熟豆商店與課程整合

分支：`forward`。本分支由 `main` 的 `3807226` 建立，依使用者要求將品牌改為「佛我咖啡 / FORWARD COFFEE」，並整合本機 `coffee_class_site` 的「好好手沖 Good Good Pour」課程。

## 內容與範圍

- 全站前台、後台標題、預設商店名稱與中英文文案改用新品牌。
- 保留熟豆購物車、訂單、庫存與烘焙批次邏輯；相容的 localStorage key 不變。舊預設「四選淨豆」與「一遇」在此分支讀取時轉成佛我咖啡，原訂單、購物車與庫存不清空，自訂店名不覆寫。
- 首頁主要導覽、hero 第二個按鈕、完整課程推薦區、各頁商店導覽與後台頁首皆可進入 `courses.html`；課程內也可返回咖啡選購。
- 課程沿用現有網站的溫暖色盤與排版，不嵌入原站 iframe，也不要求安裝原課程專案的建置套件。
- 保留中文與英文切換及語言參數；課程頁包含手沖 SOP、4:6 沖法、四個互動參數、精品／商業豆比較、五段學習流程、教材、兩位講師、真實上課照片、六題 FAQ，以及手機固定洽詢列。

課程事實保留來源設定：每人 NT$1,800、四小時、阿勳與露露授課、林口／樹林／土城可安排、一人也可開班、包含 SOP 學習卡與筆記講義、不包含贈送器材。透過既有 LINE `https://lin.ee/5bkhZu1` 確認日期、地址與準備事項。網站沒有建立課程購物車、虛構日期／剩餘名額、付款或報名資料庫；豆子交易依然是 localStorage 展示流程。

## 原始來源

來源為使用者提供的本機 `coffee_class_site` 專案，課程資料取自 `content/course.mjs`，版型資訊參考 `scripts/site.mjs`，照片直接複製已存在的網站資產。來源專案未修改。

- `assets/course-data.js`：獨立課程資料；品牌統一為佛我咖啡。
- `assets/courses.js`：課程頁渲染、手機選單與參數提示。
- `assets/courses.css`：首頁課程區、課程版型、RWD 與固定洽詢列。
- `assets/en-dictionary.js`：包含課程英文文案。
- `assets/courses/`：8 張既有生成情境圖、4 張既有講師／上課真實照片。
- `docs/course-integration-provenance.json`：來源分支、commit、相對來源路徑與 12 個檔案 SHA-256。
- `docs/course-image-prompts.json`：保留來源專案的既有圖片提示詞紀錄。紀錄中的路徑可能屬於原專案，並非本網站的執行依賴。

原課程品牌「露露咖啡日記」的 Logo 未移入；此分支統一使用佛我咖啡文字品牌。講師露露的姓名保留。

## 開啟預覽

```sh
python3 -m http.server 4180 --bind 127.0.0.1
```

- 首頁：`http://127.0.0.1:4180/?lang=zh`
- 課程：`http://127.0.0.1:4180/courses.html?lang=zh`
- 英文課程：`http://127.0.0.1:4180/courses.html?lang=en`

本分支尚未合併至 `main`。既有 GitHub Pages 公開網址仍跟隨 `main`，不是 `forward` 預覽；請勿把公開站未改品牌誤認為此分支失效。

## 檢查

```sh
node tests/store.test.cjs
node tests/i18n.test.cjs
node tests/course.test.cjs
```

共 21 項：12 項商店資料流程／品牌相容、5 項語言、4 項課程來源／資產與導覽檢查。另以瀏覽器 viewport 檢查 320、390、768、1280px 的首頁與課程中英文版，沒有頁面橫向溢出。課程比較表在自身容器內橫向捲動。

實測手機選單展開／Escape 關閉與焦點還原、參數提示展開、FAQ、語言切換保留章節、首頁至課程及課程至選購的連結。確認洽詢按鈕都指向原 LINE 連結；未送出訊息或報名。這是瀏覽器尺寸模擬，非實體手機測試。
