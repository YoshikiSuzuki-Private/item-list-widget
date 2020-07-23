# item-list-widget
スプレッドシートの情報を商品リストのHTMLにして返すGAS

# 初期化
すべてローカルインストールするのでpackage.json追加した
```
npm init -y
```
## clasp導入
https://github.com/google/clasp
```
npm i @google/clasp
```
## 開発環境的なあれ
```
npm i typescript
npm i tslint
npx tslint --init
```
型補完に対応させた
```
npm i @types/google-apps-script --save-dev
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
# npx clasp runの手順
https://github.com/google/clasp/blob/master/docs/run.md