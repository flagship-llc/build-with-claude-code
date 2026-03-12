# 採用業務を自動化したい人へ

## Claude Code でできること

採用業務には「転記」「テンプレ作成」「日程調整」など、繰り返しの多い作業が含まれます。
どのツールを使っているかによってアプローチが変わるので、まずは自分の業務フローを整理するところから始めるのがおすすめです。

## まず試してほしいこと

Claude Code（または Claude.ai）にこう聞いてみてください：

```
採用業務で毎週やっている作業はこれです：
- （自分の作業を箇条書きで書く）

使っているツールはこれです：
- （使っているツールを書く：例 Slack, Google Calendar, Sheets, HRMOS, Lever など）

この中で自動化できそうなところを教えて。
```

Claude が「どこから手をつけるか」を整理してくれます。

## よくあるパターンと対応する方法

| やりたいこと | 使いそうな方法 |
|---|---|
| 面接日程を候補者にメール | Google Calendar MCP + Gmail |
| 候補者情報を Sheets にまとめる | Google Sheets MCP |
| 面接後のフィードバックを集約 | Google Forms + Sheets MCP |
| 選考ステータスを Slack で通知 | Slack MCP |
| ATS（採用管理ツール）の操作 | ツールによる（下記参照） |

## ATS（採用管理ツール）について

HRMOS、Lever、Greenhouse などの ATS を使っている場合：
- API が公開されているなら、Claude Code から操作できる可能性がある
- 「〇〇（ツール名） API」で調べるか、Claude Code に「〇〇の API はある？」と聞いてみる
- API がなくても、Playwright MCP でブラウザ操作として自動化できる場合がある

## 調べるときのキーワード

- **自分が使っている ATS名 + API** — API 連携できるか確認
- **Google Workspace MCP** — Calendar / Sheets / Gmail の自動化
- **Playwright MCP** — ブラウザ操作の自動化（API がないツール向け）

## 参考リンク

- [Google Workspace ガイド](/reference/patterns/google-auth)
- [Slack ガイド](/reference/patterns/slack-app)
- [ブラウザ自動化ガイド](/reference/patterns/browser-automation)
