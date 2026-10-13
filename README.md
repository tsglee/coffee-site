# 四選淨豆 Coffee — 電商網站設計稿

主打「四次挑豆、去除瑕疵豆、乾淨順口」的健康精品咖啡豆品牌靜態網站（設計展示版）。

🔗 線上預覽：https://tsglee.github.io/coffee-site/

## 頁面

| 檔案 | 頁面 |
| --- | --- |
| `index.html` | 首頁 |
| `story.html` | 品牌故事 |
| `about.html` | 關於我們 |
| `shop.html` | 產品列表 |
| `product.html` | 單一產品頁 |
| `checkout.html` | 購物車 / 結帳 |
| `admin-orders.html` | 訂單管理後台 |

## 技術

- 設計由 Google Stitch 產生，匯出為靜態 HTML
- 樣式：Tailwind CSS（CDN）、Google Fonts（Noto Serif / Inter）
- RWD：已於 375 / 390 / 414 / 768 / 1280 px 測試，無水平溢出；手機版提供漢堡選單，後台側欄改為抽屜
- 圖片皆存於 `assets/`
- 部署：GitHub Pages（`main` 分支根目錄，含 `.nojekyll`）

## 本機預覽

```bash
python3 -m http.server 8000
# 開啟 http://localhost:8000
```

## 目前限制

- 設計展示用，加入購物車、篩選、結帳尚無實際功能
- Tailwind 使用 CDN 版本，正式上線建議改為編譯後的 CSS
- 文案已避免醫療療效宣稱，上線前仍建議依食品廣告規範複查

## 開發流程

1. 從 `main` 開新分支（`feat/…`、`fix/…`、`docs/…`）
2. 使用 [Conventional Commits](https://www.conventionalcommits.org/) 撰寫 commit 訊息
3. 發 Pull Request，檢查後合併至 `main`，GitHub Pages 自動更新
