# ブラウザ操作・テスト自動化

Claude Code でブラウザを操作したり、テストを自動化する方法を紹介します。
用途と技術レベルに応じて4つの方法があります。

---

## どれから始める？

| あなたの状況 | おすすめ |
|---|---|
| まず試したい・非エンジニア | **Claude in Chrome** または **Cowork** |
| Claude Code のセットアップ済み | **Playwright MCP** |
| 定期的にテストを回したい | **Playwright Test Agents** |

---

## 方法1：Claude in Chrome

Chrome 拡張機能。ブラウザ上で Claude が画面を見ながらアシストしてくれます。
インストールするだけ。セットアップ不要。

- テスト手順を画面を見ながら一緒に確認できる
- 「この画面、正しく表示されてる？」のような質問もできる
- 非エンジニアでもすぐ使える

---

## 方法2：Cowork

[claude.ai/cowork](https://claude.ai/cowork) にアクセスするだけで使える画面共有機能。インストール不要。

- 「この画面のここをクリックして」と指示できる
- 操作手順を見せて「これを毎回やっている。自動化できる？」と聞ける

---

## 方法3：Playwright MCP

Claude Code がブラウザを直接操作します。繰り返しテストの自動化に最適。

### セットアップ

`.mcp.json` に追加：

```json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp"]
    }
  }
}
```

Node.js がインストール済みならこれだけで動きます。

### 使い方

```
「この URL を開いて、ログインして、注文一覧のスクリーンショットを撮って」
「このフォームにテストデータを10件入力して」
「商品ページ → カート → 決済まで進んで、各画面のスクショを撮って」
```

### Playwright CLI（Token 効率版）

`@playwright/cli` は MCP の代わりにシェルコマンドで Playwright を操作する方式です。
MCP 版と比べて **約4倍 Token 効率がよい**（114k → 27k tokens/タスク）。

```bash
npm install -g @playwright/cli
```

---

## 方法4：Playwright Test Agents

Microsoft が提供する AI テストエージェント。テスト計画 → コード生成 → テスト修復の全工程を AI が担当します。

| Agent | 役割 | やること |
|---|---|---|
| **Planner** | テスト計画 | アプリを探索して、テスト計画を自動生成 |
| **Generator** | コード生成 | テスト計画から Playwright テストコードを自動生成 |
| **Healer** | テスト修復 | テスト実行 → 失敗したテストを自動修正 → 再実行 |

### セットアップ

```bash
npx playwright init-agents
```

3つを順番に使うことで「テスト設計 → 実装 → メンテナンス」が半自動化されます。**自動生成されたテスト計画・テストコードは、意図した操作になっているか必ず確認してから実行してください。**

---

## テスト自動化の before/after

| | 従来 | Playwright + Claude Code |
|---|---|---|
| テスト計画 | 手作業で書く | Planner Agent が自動生成 |
| テストコード | 手作業で書く | Generator Agent が自動生成 |
| ブラウザ操作 | 手作業 | 自動実行 |
| スクリーンショット | 手作業で撮る | 各ステップで自動撮影 |
| テスト失敗時 | 手作業で修正 | Healer Agent が自動修復 |
| レポート作成 | 手作業 | 「結果をまとめて」で自動生成 |

---

## 参考リンク

- [Playwright MCP（Microsoft 公式）](https://github.com/microsoft/playwright-mcp)
- [Playwright CLI（Token 効率版）](https://www.npmjs.com/package/@playwright/cli)
- [Playwright Test Agents](https://playwright.dev/docs/test-agents)
- [Playwright 公式](https://playwright.dev/)
