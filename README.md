# メンズケア相談室

男性が人に相談しにくい悩み（ヒゲ脱毛・薄毛など）の基礎知識サイト。GitHub Pagesで公開する静的HTML。

公開URL: https://g-monotukun.github.io/mens-care-lab/

## 編集ルール（医療広告ガイドライン・薬機法・景表法への配慮）
- 治療の体験談・口コミ、ビフォーアフター写真は載せない
- 「最安」「No.1」「必ず」「確実に」など、比較優良・効果保証の表現を使わない
- 料金・条件は断定せず、公式サイトでの確認を促す
- 医療系の記事には「診断・治療の代わりではない」旨を表示する（build.py で自動付与）
- ASP案件ページの禁止事項・SNS掲載可否を必ず確認する

## ページの更新方法
- 記事の原稿は `src/articles/`、固定ページは `src/` に置き、`python3 build.py` で全ページを生成する
- 原稿の先頭のメタ情報の書き方は `build.py` 冒頭のコメント参照
- 広告リンクは `links.js` に、商品紹介は `build.py` の `PRODUCTS` に登録する

## Threads
Threads アカウントは全サイト共通。投稿は claude-affiliate リポジトリの `threads/queue.json` で管理する。
