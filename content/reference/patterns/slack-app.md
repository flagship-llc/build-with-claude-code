# Slack Appの作成ガイド

Slack Appを開発する際、Slack管理画面での設定が複雑に感じることがあります。**manifest.json** を使えば、アプリの設定を一括で定義でき、セットアップを大幅に簡略化できます。

---

## manifest.json とは

manifest.json は、Slack Appの設定をJSON形式でまとめたファイルです。通常は管理画面で1つずつ設定するBot名・権限（スコープ）・イベント購読などを、このファイル1つで一括定義できます。

**メリット**:
- 管理画面の操作ミスを防げる
- チーム内で設定を共有・レビューできる
- 環境の再現が容易になる
- Claude Codeにアプリの仕様を伝えるだけで生成してもらえる

---

## Claude Code で manifest.json を生成する

作りたいSlack Appの機能をClaude Codeに伝えるだけで、必要な権限やイベント設定を含んだ manifest.json を生成できます。

**Claude Codeへのプロンプト例**:

```
Please create a manifest.json for creating my Slack app so the setup will be easy for me.

My app will:
- Listen for messages in channels the bot is added to
- Respond to slash commands (/ask)
- Post messages to channels
```

Claude Codeがアプリの要件に応じた manifest.json を生成してくれます。たとえば上記のプロンプトであれば、`chat:write`、`channels:history`、`commands` などの必要なスコープやイベント購読が自動的に設定されます。

---

## manifest.json を使った Slack App の作成手順

### 1. manifest.json を生成する

Claude Codeに以下のように依頼します。自分のアプリの要件に合わせて内容を変えてください。

```
Please create a manifest.json for creating my Slack app.

My app needs to:
- [やりたいこと1]
- [やりたいこと2]
- [やりたいこと3]
```

### 2. Slack App を作成する

1. [Slack API: Your Apps](https://api.slack.com/apps) にアクセス
2. **「Create New App」** をクリック
3. **「From a manifest」** を選択
4. ワークスペースを選択
5. 生成した manifest.json の内容を貼り付ける
6. 内容を確認して **「Create」** をクリック

これだけで、Bot名・権限・イベント購読・スラッシュコマンドなどがすべて設定された状態のアプリが作成されます。

### 3. トークンを取得する

アプリ作成後、以下のトークンを取得してプロジェクトの `.env.local` に保存します。

1. 左メニューの **「OAuth & Permissions」** からワークスペースにインストール
2. 表示される **Bot User OAuth Token**（`xoxb-` で始まる）をコピー
3. 左メニューの **「Basic Information」** から **Signing Secret** をコピー

```
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_SIGNING_SECRET=your-signing-secret
```

`.env.local` が `.gitignore` に含まれていることを必ず確認してください。

### 4. 実装する

トークンの準備ができたら、Claude Codeにアプリの実装を依頼します。

**Claude Codeへのプロンプト例**:

```
Slack Bolt for JavaScript を使って、このSlack Appを実装してください。
- /ask コマンドを受け取ったらメッセージに返答する
- 環境変数は SLACK_BOT_TOKEN と SLACK_SIGNING_SECRET を使います
```

---

## よくあるアプリのパターン別プロンプト例

### パターン1: チャンネル通知Bot

特定のイベント（デプロイ完了、エラー発生など）をSlackチャンネルに通知する。

```
Please create a manifest.json for my Slack app.
The app will post notifications to a specific channel when called via API.
It only needs to send messages, not read them.
```

### パターン2: スラッシュコマンドBot

`/ask` や `/status` のようなスラッシュコマンドに応答する。

```
Please create a manifest.json for my Slack app.
The app responds to these slash commands:
- /ask [question] - answers a question
- /status - shows system status
```

### パターン3: メッセージ応答Bot

チャンネル内のメッセージに反応して返信する。

```
Please create a manifest.json for my Slack app.
The app listens for messages in channels it's added to and replies when mentioned.
It should also be able to react with emoji.
```

### パターン比較

| パターン | 必要なスコープ例 | イベント購読 | 実装の手間 |
|---------|----------------|-------------|-----------|
| チャンネル通知 | `chat:write` | 不要 | 低 |
| スラッシュコマンド | `commands`, `chat:write` | 不要 | 低 |
| メッセージ応答 | `chat:write`, `channels:history`, `reactions:write` | `message.channels` | 中 |

---

## 開発時の Tips

### ngrok でローカル開発

Slack Appはイベントをwebhookで送信するため、ローカル開発時には外部からアクセスできるURLが必要です。

**Claude Codeへのプロンプト例**:

```
ngrok を使ってローカルの開発サーバーをSlackからアクセスできるようにする方法を教えてください。
ポート3000で動いているNext.jsアプリに対して設定したいです。
```

### manifest.json の更新

アプリに新しい機能を追加する場合は、manifest.json を更新して Slack管理画面の **「App Manifest」** セクションから再度貼り付けることで設定を更新できます。

**Claude Codeへのプロンプト例**:

```
This is my current Slack app manifest.json: [paste content]
I want to add the ability to open a modal when users click a button.
Please update the manifest.json with the necessary scopes and features.
```
