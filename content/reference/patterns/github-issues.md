# GitHub Issues を Claude Code で操作する

Claude Code から GitHub Issues の作成・検索・更新ができます。
口頭の指示や曖昧な依頼を、整形された Issue に変換するのに便利です。

---

## 方法1：gh CLI（おすすめ）

GitHub 公式のコマンドラインツール。Claude Code がそのまま使えます。

### セットアップ

```bash
# インストール（Mac）
brew install gh

# GitHub アカウントで認証
gh auth login

# 確認
gh --version
```

### Claude Code での使い方

```
「この内容で GitHub Issue を作って：ログイン画面で○○すると△△になる不具合」
「このリポジトリの未対応 Issue を一覧にして」
「Issue #42 にコメントを追加して」
「ラベルが bug の Issue を一覧にして」
```

Claude Code が内容を整形（タイトル・本文・ラベル）し、確認を求めてから作成します。**確認ダイアログでタイトル・ラベル・本文が正しいか必ず目を通してから承認してください。**

---

## 方法2：GitHub MCP Server

GitHub が公式に提供する MCP サーバー。gh CLI より多くの操作に対応しています。

### セットアップ

Docker が必要です。`.mcp.json` に追加：

```json
{
  "mcpServers": {
    "github": {
      "command": "docker",
      "args": [
        "run", "-i", "--rm",
        "-e", "GITHUB_PERSONAL_ACCESS_TOKEN",
        "ghcr.io/github/github-mcp-server"
      ],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
      }
    }
  }
}
```

Personal Access Token は [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens) から作成してください。

### gh CLI と GitHub MCP の使い分け

| | gh CLI | GitHub MCP |
|---|---|---|
| セットアップ | 簡単 | Docker が必要 |
| 操作範囲 | Issues, PRs, リリース等 | より広範な GitHub API |
| おすすめ | まずはこちらから | gh CLI で不足を感じたら |

---

## 参考リンク

- [gh CLI 公式](https://cli.github.com/)
- [gh CLI インストール手順](https://github.com/cli/cli#installation)
- [GitHub MCP Server](https://github.com/github/github-mcp-server)
- [GitHub MCP 実践ガイド](https://github.blog/ai-and-ml/generative-ai/a-practical-guide-on-how-to-use-the-github-mcp-server/)
