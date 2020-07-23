# item-list-widget
スプレッドシートの情報を商品リストのHTMLにして返すGAS

# 初期化
## clasp導入
https://github.com/google/clasp
```
npm install -g @google/clasp
```
## 開発環境的なあれ
```
npm i typescript -g
npm i tslint -g
npx tslint --init
```
## プロジェクト作成
```
npx clasp create --title "itemListWidget"
npx clasp open
npx clasp pull
```
## .gitignore
```
vim .gitignore #.clasp.jsonを対象外
```
.clasp.json
```
{"scriptId":"{scriptIdを入れる}"}
```
ここまででfirstcomit