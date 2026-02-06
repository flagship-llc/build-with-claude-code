# 環境構築手順書

Claude Code Campに参加するための環境構築手順です。
セットアップ会で一緒に進めますので、事前に完了していなくても大丈夫です。

---

## 必要なもの

- Mac
- インターネット接続
- Claudeのアカウント

---

## Step 0: 開発ツールの準備

まず、開発に必要な基本ツールをインストールします。

### Homebrewのインストール

Homebrewは、Macに開発ツールを簡単にインストールするためのパッケージマネージャです。

**確認: すでにインストール済みか確認**

ターミナルを開いて（アプリケーション → ユーティリティ → ターミナル）、以下を入力：

```bash
brew --version
```

バージョン番号が表示されればインストール済みです。「command not found」と出たら、次の手順でインストールしてください。

**インストール**

ターミナルで以下をコピー&ペーストして Enter：

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

途中でパスワードを求められたら、Macのログインパスワードを入力してください（入力中は画面に表示されません）。

インストール完了後、**ターミナルに表示される指示に従って**、パスを設定してください。通常は以下のようなコマンドを実行するよう指示されます：

```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Gitのインストール

Gitは、コードのバージョン管理ツールです。Claudeと開発を進める上で必要になります。

**確認: すでにインストール済みか確認**

ターミナルで以下を入力：

```bash
git --version
```

バージョン番号が表示されればOKです。「command not found」と出たら、次の手順でインストールしてください。

**インストール**

ターミナルで以下を入力：

```bash
brew install git
```

インストール完了後、再度 `git --version` でバージョンが表示されることを確認してください。

### Node.jsのインストール（推奨）

JavaScriptやWebアプリを作る場合に必要です。今すぐ使わなくても、入れておくと便利です。

**確認**

```bash
node --version
```

**インストール**

```bash
brew install node
```

---

## Step 1: VS Codeのインストール

VS Code（Visual Studio Code）は、コードを書くためのエディタです。

### 確認: すでにインストール済みか確認

アプリケーションフォルダに「Visual Studio Code」があるか確認してください。

### インストール

公式サイトからダウンロード：
https://code.visualstudio.com/

<!-- 画像: ./images/vscode-download.png - VS Code公式サイトのダウンロードページ -->

ダウンロードしたファイルを開き、アプリケーションフォルダにドラッグ&ドロップします。

### VS Codeを起動

アプリケーションフォルダから「Visual Studio Code」を起動します。

<!-- 画像: ./images/vscode-welcome.png - VS Codeの初期画面（Welcome タブ） -->

### VS Codeの日本語化

VS Codeを日本語表示にします。

1. 左サイドバーの **拡張機能アイコン**（四角が4つ並んだアイコン）をクリック

<!-- 画像: ./images/vscode-extensions-icon.png - 拡張機能アイコンを赤枠で囲んだスクリーンショット -->

2. 検索欄に「Japanese」と入力
3. 「**Japanese Language Pack for Visual Studio Code**」を見つけて「**Install**」をクリック

![Japanese Language Packの検索結果とInstallボタン](./images/vscode-japanese-pack.png)

4. インストール後、右下に「Change Language and Restart」ボタンが表示されるのでクリック
5. VS Codeが再起動し、日本語表示になります

---

## Step 2: Claude Codeのインストール

いよいよClaude Codeをインストールします。VS Codeの拡張機能から簡単にインストールできます。

1. VS Codeを開く
2. 左サイドバーの **拡張機能アイコン**（四角が4つ並んだアイコン）をクリック
3. 検索欄に「**Claude**」と入力
4. 「**Claude**」（Anthropic公式）を見つけて「**Install**」をクリック

<!-- 画像: ./images/vscode-claude-extension.png - Claude拡張機能の検索結果 -->

5. インストール完了を待つ

### 確認

VS Codeの左サイドバーに **Claudeのアイコン**（Anthropicのロゴ）が表示されればインストール完了です。

<!-- 画像: ./images/vscode-claude-icon.png - サイドバーにClaudeアイコンが表示されている状態 -->

---

## Step 3: Claude Codeの認証設定

Claude Codeを使うには、Anthropicアカウントでの認証が必要です。

### 認証を開始

1. VS Codeの左サイドバーで **Claudeのアイコン** をクリック
2. 「**Sign in**」ボタンをクリック

<!-- 画像: ./images/claude-signin.png - Sign inボタンが見えるスクリーンショット -->

3. ブラウザが開いてAnthropicのログイン画面が表示されます
4. 会社から提供されたアカウントでログイン
5. 認証が完了すると、VS Codeに戻ります

VS Code内のClaudeパネルにチャット画面が表示されれば成功です。

<!-- 画像: ./images/claude-chat-panel.png - 認証完了後のチャットパネル -->

---

## Step 4: 動作確認

すべての設定が完了したか確認しましょう。

### VS Codeでプロジェクトフォルダを作成

1. VS Codeを開く
2. メニューから「ファイル」→「フォルダーを開く」
3. 以下の場所にフォルダを作成して開く：
   - 場所: ホームフォルダ → `projects` → `my-first-app`
   - （`projects` フォルダがなければ新規作成）

### Claude Codeで話しかけてみる

1. VS Codeの左サイドバーで **Claudeのアイコン** をクリック
2. チャット欄に以下を入力してEnter：

```
こんにちは！今日の日付を教えて
```

Claudeから返答があれば、環境構築は完了です

<!-- 画像: ./images/claude-hello.png - Claudeに話しかけて返答が来ている状態 -->

---

## トラブルシューティング

### VS CodeでClaude拡張機能が見つからない

1. 検索欄に「Claude」と正確に入力しているか確認
2. インターネット接続を確認
3. VS Codeを再起動して再度検索

### Claudeアイコンが表示されない

1. 拡張機能が正しくインストールされているか確認（拡張機能一覧に「Claude」があるか）
2. VS Codeを再起動
3. それでもダメな場合は拡張機能をアンインストール → 再インストール

### 認証でエラーが出る

1. ブラウザでAnthropicにログインできるか確認
2. 会社から提供されたアカウント情報が正しいか確認
3. セットアップ会で一緒に確認しますので、そのままにしておいてもOK

---

## チェックリスト

環境構築が完了したか、以下で確認できます：

- [ ] Homebrewがインストールされている（`brew --version` で確認）
- [ ] Gitがインストールされている（`git --version` で確認）
- [ ] VS Codeがインストールされ、起動できる
- [ ] VS Codeが日本語表示になっている
- [ ] VS Codeの左サイドバーにClaudeアイコンが表示されている
- [ ] Claudeにログインできている
- [ ] Claudeに話しかけて返答がある

すべてチェックできたら準備完了です！

---

## 次のステップ

環境構築が終わったら、次は[Claudeの基本的な使い方](./claude-basics)を確認しましょう。
