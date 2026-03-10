# Backlog を Claude Code で操作する

Nulab が公式に提供する Backlog MCP Server を使えば、Claude Code から Backlog の課題を直接操作できます。

---

## セットアップ

### 1. API キーの発行

Backlog にログインし、「個人設定」→「API」から API キーを発行してください。

### 2. MCP の設定

`.mcp.json` に追加：

```json
{
  "mcpServers": {
    "backlog": {
      "command": "npx",
      "args": ["-y", "backlog-mcp-server"],
      "env": {
        "BACKLOG_DOMAIN": "your-space.backlog.com",
        "BACKLOG_API_KEY": "<your-api-key>"
      }
    }
  }
}
```

`your-space.backlog.com` は自分の Backlog スペースのドメインに置き換えてください。

---

## 使い方

```
「Backlog の〇〇プロジェクトの未完了課題を一覧にして」
「この内容で Backlog に課題を作って」
「Backlog の課題 XXX-123 の内容を要約して」
「今週完了した課題をまとめて」
```

---

## 活用パターン

| やりたいこと | 組み合わせ |
|---|---|
| 過去の課題から回答を作成 | Backlog（読む）→ 回答の下書きを生成 |
| 議事録からタスク化 | Google Docs（読む）→ Backlog（書く） |
| 進捗報告を自動生成 | Backlog（読む）→ Slack（書く） |
| Issue の整理・分類 | Backlog（読む）→ ラベル・優先度を更新 |

---

## 参考リンク

- [Backlog MCP Server（Nulab 公式）](https://github.com/nulab/backlog-mcp-server)
- [Backlog API ドキュメント](https://developer.nulab.com/docs/backlog/)
