# Build with Claude Code: Zero to One

AIとペアプログラミングして、1日で自分だけのツールを作るワークショップの資料サイトです。

**ドキュメントサイト**: https://build-with-claude-code.vercel.app/

---

## ローカル開発

### セットアップ

```bash
cd docs-site
npm install
```

### 起動

```bash
npm run dev
```

http://localhost:3000 で確認できます。

### ポートを変更する場合

他のアプリで port 3000 を使っている場合は、ポートを指定して起動してください:

```bash
npm run dev -- -p 3003
```

---

## コンテンツの編集

`docs-site/pages/` 内のコンテンツを編集・追加する際は、必ず**両言語**を更新してください:

- `pages/ja/` - 日本語コンテンツ
- `pages/en/` - 英語コンテンツ

構造を変えた場合、このサイトの構造を説明する「はじめに」なども更新して下さい。
