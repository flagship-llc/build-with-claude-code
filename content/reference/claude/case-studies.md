# Claude Code 活用事例

Claude Codeで実際に作られたプロジェクトや、企業での導入事例を紹介します。

---

## 海外事例

### スタートアップ事例

#### Vulcan Technologies（YC S25）

**背景**: 創業者3人のうち、プログラミング経験があるのは1人のみ。CEOは高校のJavaScriptが最後のプログラミング経験。

**作ったもの**: AI による規制分析プラットフォーム

**成果**:
- 4ヶ月で州政府・連邦政府との契約を獲得
- 1,100万ドルのシード資金を調達
- バージニア州の新築住宅価格を平均24,000ドル削減（年間10億ドル以上の節約）
- バージニア州知事がAI規制レビューを義務付ける行政命令に署名

**ポイント**: 非エンジニアでも政府契約を勝ち取れるプロダクトを開発

参考: [How three YC startups built their companies with Claude Code](https://claude.com/blog/building-companies-with-claude-code)

---

#### HumanLayer（YC F24）

**作ったもの**: AIエージェントが人間にフィードバック・承認を求めるためのAPI/SDK

**成果**:
- 通常1〜2週間かかる作業を7時間で完了
- Claude Code を使った複数エージェント並列実行ツール「CodeLayer」を開発

参考: [How three YC startups built their companies with Claude Code](https://claude.com/blog/building-companies-with-claude-code)

---

### 企業導入事例

#### 楽天

**プロジェクト**: vLLM（1,250万行のコードベース）にアクティベーションベクトル抽出機能を実装

**成果**:
- 7時間で自律的に実装完了
- 数値精度 99.9% を達成

参考: [Eight trends defining how software gets built in 2026](https://claude.com/blog/eight-trends-defining-how-software-gets-built-in-2026)

---

#### TELUS

**成果**:
- 13,000以上のカスタムAIソリューションを作成
- エンジニアリングコードの出荷速度が30%向上
- 累計50万時間以上の作業時間を削減

参考: [Eight trends defining how software gets built in 2026](https://claude.com/blog/eight-trends-defining-how-software-gets-built-in-2026)

---

#### Brex

**成果**:
- 75%のエンジニアがSQLエージェントを活用
- 週8〜10時間以上の時間削減を実現

参考: [Eight trends defining how software gets built in 2026](https://claude.com/blog/eight-trends-defining-how-software-gets-built-in-2026)

---

### 個人開発事例

#### IoT + AWSデータレイク

**作ったもの**: 組み込みセルラーIoTアプリケーション + AWS完全バックエンド

**開発期間**: 1週間

**ポイント**: 通常は小規模チームでも1ヶ月以上かかる規模のプロジェクト

参考: [Build Apps in Days with Claude Code: A Case Study & Guide](https://www.arsturn.com/blog/can-you-really-build-a-fully-functional-app-in-days-with-claude-code-a-case-study)

---

#### プロジェクト管理アプリ

**開発期間**: 2日間

**使用モデル**: Claude 4.6

参考: [I Built a Full Project Management App in 2 days Using Claude 4.6](https://dev.to/olaproeis/i-built-a-full-project-management-app-in-2-days-using-claude-47-1e1g)

---

## 国内事例

### 企業導入事例

#### エムスリー

**導入状況**: 2024年初夏からエンジニア全員に無制限使用を解禁

**活用例**:
- TDD（テスト駆動開発）ワークフローの自動化
- BigQueryデータセット権限申請の自動審査
- Obsidianと連携したTODO管理
- 過去のスタイルを学習したメール文面生成

**ポイント**: QAエンジニアなど、開発者以外の職種でも活用

参考: [突撃！隣のClaude Code！！](https://www.m3tech.blog/entry/charge-claude-code)

---

#### ReadyFor

**導入期間**: 3ヶ月

**定量的成果**:
- 83%のエンジニアが生産性向上を実感
- 66%が1日1〜2時間の時間短縮を達成
- プロダクトIssue対応数が目に見えて増加

**活用範囲**: コード生成だけでなく、Git操作やPR作成など開発フロー全体

参考: [Claude Code導入3ヶ月後の社内アンケートから分かったこと](https://zenn.dev/readyfor_blog/articles/a1cfd81a562e07)

---

#### ユニークビジョン

**導入状況**: 2025年6月の調査で6割以上のエンジニアが自発的に利用

**成果**: 体感的に生産性が大きく向上したという意見が多数

参考: [ユニークビジョン、最先端AIコーディング支援「Claude Code」を導入](https://www.uniquevision.co.jp/news/claude-code)

---

#### 株式会社GIG

**導入期間**: 3ヶ月

**得意なこと**:
- 新規アプリケーションの環境構築
- 新しいライブラリの導入
- 新しいファイル作成

参考: [Claude Codeを3ヶ月使ってわかった「できること・できないこと・できるようになること」](https://giginc.co.jp/blog/giglab/claude-code-use)

---

### 個人開発事例

#### iOSアプリ（App Storeリリース）

**背景**: 非エンジニア

**作ったもの**: iOSネイティブアプリ

**開発期間**: 5日間

**使用モデル**: Claude Code（Opus 4.5）

**ポイント**: 非エンジニアでもネイティブアプリをApp Storeにリリースできた。「AIに全部任せる」の実際の範囲についても解説。

参考: [@ktknd - 年始にClaude CodeでiOSアプリを5日でリリースした記録](https://x.com/ktknd/status/2019635288558170386)

---

#### TODOアプリ

**開発期間**: 5分（デプロイまで含めて30分）

**機能**: タスク追加・削除、完了/未完了切り替え、フィルタリング、ローカルストレージ保存

**ポイント**: ワンプロンプトで完成、GitHub PagesとVercelにデプロイ

参考: [シンプルなTODOアプリを、Claude Codeを使って5分で作って30分で公開する](https://gihyo.jp/article/2025/11/get-started-claude-code-03)

---

## 事例から見える傾向

### Claude Code が得意なこと

1. **新規プロジェクトの立ち上げ** - 環境構築、ボイラープレート生成
2. **プロトタイプ開発** - アイデアを素早く形にする
3. **定型作業の自動化** - CRUD機能、テストコード生成
4. **大規模コードベースの理解と修正** - 既存コードを読み解いて適切に変更

### 成功のポイント

1. **明確な指示** - 何を作りたいかを具体的に伝える
2. **段階的な進行** - 一度に全てを依頼せず、ステップごとに確認
3. **レビューの習慣** - 生成されたコードを必ず確認する

---

## ワークショップとの関連

これらの事例は、プログラミング経験がなくても Claude Code を使えば実用的なものが作れることを示しています。

ワークショップでは、1日で「動くもの」を作ることを目標としていますが、上記の事例のように:

- TODOアプリなら **5分〜30分**
- 業務ツールなら **数時間〜1日**
- 本格的なプロダクトでも **数日〜1週間**

で形にできる可能性があります。
