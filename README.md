# 〇〇の静的構築プロジェクト

〇〇の静的コーディングデータです。 node.js v20.0.0 で動作確認済み

## Version

- node v20.0.0
- npm v9.6.4
- astro v3.0.13

## Install

```
* [file clone] $ git clone xxxxx
* [node package install] $ npm install
```

## npm scripts

```
* [npm scripts development] $ npm run dev
```

```
* [npm scripts production] $ npm run build
```

## 概要

`npm run dev` コマンドで `/src/` の中身がタスクで処理され、ディレクトリ構造を保ちつつ `/dist/` に展開されます。

`npm run dev` コマンドでローカルサーバが立ち上がります。実行中は

```
http://192.168.30.48:8080/
```

を参照すれば構築中のページが確認できます。

`npm run build` コマンドで`/dist/`内の`html,css,js`が削除され、圧縮された納品用データが再度`/dist/`に出力されます。
