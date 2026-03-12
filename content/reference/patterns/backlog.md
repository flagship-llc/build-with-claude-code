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

## 使う前の確認チェックリスト

Claude Code が生成・更新した内容をそのまま反映しないでください。

| 確認項目 | 確認すること |
|---|---|
| **課題の内容** | タイトル・説明・担当者は正しいか？ |
| **ラベル・優先度** | 分類は適切か？既存の運用ルールに合っているか？ |
| **進捗報告** | 数値や完了率は事実と合っているか？ |
| **一括操作** | 複数課題をまとめて更新する場合、対象は正しいか？ |

**特に「進捗報告を自動生成」する場合、Claude が生成した数値・ステータスが実態と一致しているか必ず確認してください。** 自動生成の報告をそのまま共有するのはワークスロップです。

---

## 参考リンク

- [Backlog MCP Server（Nulab 公式）](https://github.com/nulab/backlog-mcp-server)
- [Backlog API ドキュメント](https://developer.nulab.com/docs/backlog/)
