# GAS（Google Apps Script）を Claude Code で開発する

Google Apps Script（GAS）は、Sheets の集計・転記やフォームの通知など、Google Workspace の自動化に広く使われています。
clasp（Command Line Apps Script Projects）を使えば、Claude Code から GAS の開発・デプロイが可能です。

---

## clasp とは

clasp は Google が提供する GAS の公式 CLI ツールです。ローカル環境で GAS のコードを編集し、コマンドラインからデプロイできます。

**Claude Code と組み合わせるメリット：**
- 「こういう処理を GAS で書いて」と指示するだけでコードを生成してくれる
- 既存の GAS プロジェクトを取り込んで改善を依頼できる
- デプロイまで Claude Code から完結できる

---

## セットアップ

### 1. clasp のインストール

```bash
npm install -g @google/clasp
```

### 2. Google アカウントで認証

```bash
clasp login
```

ブラウザが開くので、Google アカウントでログインして権限を許可してください。

### 3. Apps Script API を有効化

[Google Apps Script API の設定ページ](https://script.google.com/home/usersettings) にアクセスし、API を「オン」にしてください。

---

## 使い方

### 新しい GAS プロジェクトを作る

Claude Code に以下のように依頼します：

```
clasp を使って、Sheets の売上データを集計する GAS を作って。
毎週月曜に自動実行されるようにトリガーも設定して。
```

### 既存の GAS プロジェクトを取り込む

```bash
clasp clone <スクリプトID>
```

スクリプト ID は GAS エディタの URL から取得できます。取り込んだら Claude Code に：

```
この GAS のコードを読んで、何をしているか説明して。
その上で、エラーハンドリングを追加して改善して。
```

### デプロイ

```bash
clasp push    # コードをアップロード
clasp deploy  # デプロイ（バージョン作成）
```

---

## デプロイ前の確認チェックリスト

Claude Code が生成した GAS をそのまま `clasp push` しないでください。以下を必ず確認します。

| 確認項目 | 確認すること |
|---|---|
| **対象データ** | 操作対象のシートや範囲は正しいか？別のシートを壊さないか？ |
| **トリガー** | 実行頻度は適切か？毎分実行になっていないか？ |
| **権限スコープ** | 必要以上の権限を要求していないか？ |
| **メール送信** | 送信先・本文は正しいか？テスト用アドレスで試したか？ |

**特にメール送信や外部 API 呼び出しを含む GAS は、テスト用データで動作確認してから本番データに切り替えてください。**

---

## よくあるユースケース

| やりたいこと | Claude Code への指示例 |
|---|---|
| Sheets の集計を自動化 | 「毎月1日に先月の売上を集計する GAS を作って」 |
| フォーム回答を通知 | 「フォームに回答が来たら Slack に通知する GAS を作って」 |
| データの転記 | 「Sheet A のデータを Sheet B に転記する GAS を作って」 |
| メール送信 | 「Sheets の一覧に基づいて一斉メールを送る GAS を作って」 |

---

## 参考リンク

- [clasp（GitHub）](https://github.com/google/clasp)
- [clasp 公式ドキュメント](https://developers.google.com/apps-script/guides/clasp)
- [clasp 入門 Codelab](https://codelabs.developers.google.com/codelabs/clasp)
- [Google Apps Script 公式](https://developers.google.com/apps-script)
