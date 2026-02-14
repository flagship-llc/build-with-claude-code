# Claudeを使いこなすテクニック

基本操作に慣れてきたら、以下の機能を使ってClaudeをさらに活用できます。

---

## CLAUDE.md（プロジェクト設定ファイル）

プロジェクトのルートに `CLAUDE.md` ファイルを作成すると、Claudeがそのプロジェクトのルールや文脈を自動的に理解します。

**CLAUDE.mdに書く内容の例**:

```markdown
# プロジェクト概要

このプロジェクトは社内の経費精算システムです。

## 技術スタック
- フロントエンド: React + TypeScript
- バックエンド: Python (FastAPI)
- データベース: PostgreSQL

## コーディング規約
- 変数名は日本語コメントで説明を付ける
- エラーメッセージは日本語で表示する
- テストは必ず書く

## 注意点
- 本番環境のデータは扱わない
- APIキーは .env ファイルに保存する
```

**効果**:
- 毎回「このプロジェクトは...」と説明しなくて済む
- プロジェクトのルールに沿ったコードを生成してくれる
- チーム全員が同じ設定でClaudeを使える

**配置場所と使い分け**:

| 種類 | 場所 | 用途 |
|------|------|------|
| プロジェクト用 | `プロジェクトフォルダ/CLAUDE.md` | そのプロジェクト固有のルール（技術スタック、コーディング規約、ディレクトリ構成など） |
| グローバル | `~/.claude/CLAUDE.md` | 自分の好みの設定（コミットメッセージのスタイル、言語設定、作業スタイルなど） |

グローバル設定はすべてのプロジェクトに適用されます。プロジェクト用の設定がある場合は、両方が読み込まれます。

---

## MCPサーバー（外部サービス連携）

**MCP（Model Context Protocol）** を使うと、Claudeが外部サービスと連携できるようになります。

### MCPとは？

Claudeの能力を拡張する仕組みです。例えば：
- Slackのメッセージを読み書きする
- Shopifyの商品データを取得する
- データベースに直接クエリを実行する
- ファイルシステムを操作する

### 設定方法

VS Codeの設定（`settings.json`）でMCPサーバーを追加します。

**設定ファイルの開き方**:
1. `Cmd + Shift + P` でコマンドパレットを開く
2. 「Preferences: Open User Settings (JSON)」を選択

**設定例（Slack MCP）**:

```json
{
  "claude.mcpServers": {
    "slack": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-token-here",
        "SLACK_TEAM_ID": "T0123456789"
      }
    }
  }
}
```

### MCPサーバーの種類

MCPサーバーは提供するものによって3つのタイプに分類できます：

| タイプ | 説明 | 例 |
|--------|------|-----|
| **情報・ドキュメント提供型** | APIドキュメントやスキーマ情報を提供（参照用） | Shopify Dev MCP |
| **データ提供型** | 実際のデータにアクセス（読み書き可能） | GitHub、Shopify、Slack、PostgreSQL |
| **ツール・アクション型** | 操作や処理を実行 | Playwright、Filesystem、Fetch |

**例: Shopify関連のMCPの違い**

| MCP | タイプ | 用途 |
|-----|--------|------|
| **Shopify Dev MCP** | 情報提供型 | APIドキュメント検索、開発時の参照（認証不要） |
| **Shopify MCP** | データ提供型 | 実際の商品・在庫・注文データにアクセス（認証必要） |

### よく使うMCPサーバー

**情報・ドキュメント提供型**（参照用、認証不要が多い）

| MCP | 用途 | 活用例 |
|-----|------|-------|
| [Shopify Dev MCP](https://shopify.dev/docs/apps/build/devmcp) | Shopify開発支援 | API仕様の検索、Polaris/Hydrogen/Functionsの活用 |

**データ提供型**（実データアクセス、認証が必要）

| MCP | 用途 | 活用例 |
|-----|------|-------|
| [GitHub](https://github.com/modelcontextprotocol/servers) | GitHub連携 | Issue/PR管理、コードレビュー、リポジトリ操作 |
| [Slack](https://github.com/anthropics/mcp-server-slack) | Slackとの連携 | メッセージ投稿、チャンネル情報取得 |
| [Shopify](https://github.com/siddhantbajaj/shopify-mcp-server) | EC運営支援 | 商品データ取得、在庫確認、注文管理 |
| [Notion](https://github.com/anthropics/mcp-server-notion) | Notion連携 | ページ作成・編集、データベース操作 |
| [Google Drive](https://github.com/anthropics/mcp-server-gdrive) | ドライブ連携 | ファイル検索・取得 |
| [PostgreSQL](https://github.com/modelcontextprotocol/servers) | DB操作 | データ取得・更新、SQL実行 |
| [Memory](https://github.com/modelcontextprotocol/servers) | 知識グラフ | 情報の永続化、関連情報の記憶 |

**ツール・アクション型**（操作を実行）

| MCP | 用途 | 活用例 |
|-----|------|-------|
| [Playwright](https://github.com/anthropics/mcp-server-playwright) | ブラウザ自動化 | E2Eテスト、UI操作自動化 |
| [Filesystem](https://github.com/modelcontextprotocol/servers) | ファイル操作 | 特定フォルダ外のファイルアクセス |
| [Git](https://github.com/modelcontextprotocol/servers) | Gitリポジトリ操作 | コミット履歴検索、差分確認 |
| [Fetch](https://github.com/modelcontextprotocol/servers) | Web取得 | URLからコンテンツ取得、API呼び出し |
| [Time](https://github.com/modelcontextprotocol/servers) | 時刻・タイムゾーン | 時刻変換、タイムゾーン計算 |
| [Sequential Thinking](https://github.com/modelcontextprotocol/servers) | 思考支援 | 複雑な問題の段階的解決 |

詳細は [MCP公式リポジトリ](https://github.com/modelcontextprotocol/servers) や [Awesome MCP Servers](https://mcp-awesome.com/) を参照してください。

### Shopify Dev MCP

Shopifyアプリ**開発時**に便利なMCPサーバーです。認証不要でローカルで動作します。

**タイプ**: 情報・ドキュメント提供型（実データへのアクセスはなし）

**できること**:
- Shopify APIドキュメントの検索
- Admin GraphQL APIのスキーマ探索
- Polaris、Hydrogen、Storefront Web Componentsの情報取得
- Shopify Functionsの開発支援

**設定例**:

```json
{
  "claude.mcpServers": {
    "shopify-dev": {
      "command": "npx",
      "args": ["-y", "@shopify/dev-mcp"]
    }
  }
}
```

### Shopify MCP（データ提供型）

Shopifyストアの**実データ**にアクセスするMCPサーバーです。認証が必要です。

**タイプ**: データ提供型（実際の商品・在庫・注文にアクセス）

**活用例**:

ECサイト運営で以下のようなことができます：

```
在庫が10個以下の商品を一覧にして
```

```
先週の売上トップ10を集計して
```

```
商品「サマーTシャツ」の価格を2,980円に更新して
```

---

## Slack連携の活用

SlackのMCPサーバーを設定すると、Claudeから直接Slackを操作できます。

### できること

**情報収集**:
```
#general チャンネルの今日のメッセージを要約して
```

```
@田中さん からの未読メンションを確認して
```

**投稿作成**:
```
#dev-team に今週の進捗報告を投稿して。内容は以下:
- 機能Aを実装完了
- 機能Bはテスト中
```

**分析**:
```
#support チャンネルの過去1週間の問い合わせを分析して、
よくある質問をまとめて
```

### 設定に必要なもの

1. **Slack Bot Token**: Slackワークスペースで作成
2. **Team ID**: Slackの設定から取得
3. **必要な権限**: channels:read, chat:write など

詳しい設定方法はメンターに相談してください。

---

## サブエージェント（自動タスク分割）

Claudeは複雑なタスクを自動的に小さなタスクに分割して、並列で処理することがあります。これを**サブエージェント**と呼びます。

### どんなとき使われる？

- 複数ファイルを同時に検索・編集するとき
- 大きなリファクタリングを行うとき
- テストを並列実行するとき

### 例

```
プロジェクト内のすべてのJavaScriptファイルで、
var を let または const に置き換えて
```

→ Claudeが自動的に:
1. 対象ファイルを探すエージェント
2. 各ファイルを修正するエージェント
3. 変更を検証するエージェント

を起動して、効率的に処理します。

### 確認方法

サブエージェントが動いているとき、チャットに「Agent」などの表示が出ることがあります。
複数の処理が同時に進むので、単純なタスクより結果が出るまで時間がかかる場合があります。

---

## Agent Teams（チーム機能）

**Agent Teams**は、サブエージェントをさらに発展させた機能です。ユーザーが**役割を定義したエージェントチーム**を作成し、協調して作業させることができます。

### サブエージェントとの違い

| 機能 | サブエージェント | Agent Teams |
|------|-----------------|-------------|
| タスク分割 | Claudeが自動で判断 | ユーザーが役割を定義 |
| 専門性 | 汎用的 | 役割に特化（QA、フロントエンド等） |
| 連携 | 独立して処理 | エージェント間でメッセージ交換 |
| 設定 | 不要 | CLAUDE.md等で定義 |

### 役割の例

Agent Teamsでは、以下のような専門家を定義できます:

- **QAエキスパート**: テスト作成、品質チェック担当
- **フロントエンド担当**: UI/UX、React/Vue等の実装
- **バックエンド担当**: API、データベース、サーバー処理
- **セキュリティ担当**: 脆弱性チェック、セキュリティレビュー
- **ドキュメント担当**: README、API仕様書の作成

### 使用例

```
このプロジェクトにQAチームとして参加して、
テストカバレッジを改善してください
```

→ QAエキスパートとしての視点で、テスト戦略を提案し、テストコードを作成します。

### 現在の状況

Agent Teamsは実験的機能として提供されています。基本的なサブエージェント機能は自動的に使われますが、詳細なチーム定義機能は今後さらに発展していく予定です。

まずはサブエージェントの自動分割機能を活用し、必要に応じてAgent Teamsの設定を検討してください。
