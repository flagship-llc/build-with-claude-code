# モバイルアプリを Claude Code で作る

React Native + Expo を使えば、1つのコードで iOS・Android 両方のアプリが作れます。
コード未経験でも、Claude Code と対話しながらアプリを完成させることができます。

---

## なぜ Expo がおすすめか

- **1つのコードで iOS・Android 両対応** — Swift や Kotlin を個別に覚える必要がない
- **Expo Go で即座に確認** — スマホの Expo Go アプリで QR コードを読むだけ
- **シミュレーター不要** — Xcode や Android Studio をインストールしなくてもよい
- **Claude Code との相性が良い** — 「ボタンを押したら次の画面に」のような自然な指示で作れる

---

## 始め方

### 1. プロジェクトを作る

Claude Code に以下のように伝えてください：

```
Expo で〇〇アプリを作りたい。まずプロジェクトのセットアップをして。
```

Claude Code が `npx create-expo-app` でプロジェクトを作成し、必要な設定をしてくれます。

### 2. 実機で確認する

1. スマホに **Expo Go** アプリをインストール（[iOS](https://apps.apple.com/app/expo-go/id982107779) / [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)）
2. Claude Code に「開発サーバーを起動して」と伝える
3. 表示される QR コードをスマホで読み取る
4. アプリがスマホ上で動く

### 3. 機能を追加していく

```
「ログイン画面を追加して」
「ボタンを押したら一覧画面に遷移するようにして」
「カメラで写真を撮って保存する機能をつけて」
「デザインをもっときれいにして」
```

小さく作って、動作確認しながら進めるのがコツです。**Claude が生成したコードは必ず実機で動作を確認してから次に進んでください。**

---

## Claude Code への指示例

| やりたいこと | 指示例 |
|---|---|
| 画面遷移 | 「3つの画面（ホーム・一覧・詳細）を作って。タブで切り替えられるように」 |
| データ保存 | 「入力したデータをローカルに保存して、次回起動時に復元して」 |
| API 連携 | 「この API からデータを取得して一覧表示して」 |
| デザイン調整 | 「もっとシンプルでモダンなデザインにして」 |

---

## Swift / Xcode で作りたい場合

iOS ネイティブで作りたい場合は以下が必要です：

- **Xcode** — Mac App Store からインストール（約15GB）
- **Apple ID** — 個人の Apple ID でOK（開発者登録は不要）

Claude Code に「Swift で iOS アプリを作りたい」と伝えれば、Xcode プロジェクトの作成からガイドしてくれます。

### Xcode 26.3 のエージェント機能

2026年2月リリースの Xcode 26.3 では、Xcode 自体に AI エージェント機能が搭載されました。

- **Anthropic の Claude Agent** と **OpenAI の Codex** が Xcode 内で直接動作
- エージェントがビルド・テスト・プレビュー確認を自律的に実行
- Apple ドキュメントの検索やプロジェクト設定の変更も可能
- オープンスタンダード準拠で、Claude Code など他のツールとも連携可能

Swift で開発する場合、Claude Code から指示を出す方法に加えて、Xcode のエージェント機能を直接使う選択肢もあります。詳しくは [AIコーディングツール比較](/reference/claude/ai-tools) を参照してください。

---

## 参考リンク

- [Expo 公式](https://expo.dev/)
- [Expo Go（スマホアプリ）](https://expo.dev/go)
- [React Native 公式](https://reactnative.dev/)
