---
id: quickstart-start-solv
title: クイックスタート
description: オープンソースの Solana バリデーター向けツール solv クイックスタート
---

## Solana バリデーターの管理用 CLI ツール - "solv"

solv を使用することで、Solana バリデーターノードサーバーの設定が容易になります。この強力なツールは、ブロックチェーンの操作を単純化し、わずか 1 つのコマンドで Solana バリデーターの起動を可能にします。

バリデーターのセットアップや運用の複雑さを排除することで、より多くの個人がブロックチェーンネットワークに参加するための扉を開き、Solana エコシステムをよりアクセスしやすくします。

経験豊富な開発者であろうと、バリデーター領域に足を踏み入れるブロックチェーン愛好家であろうと、solv は簡単で迅速なセットアップのためのソリューションです。

Solana の世界に飛び込み、solv の機能を探求し、努力を最小限にして最大の効率でブロックチェーン革命の一部となりましょう。

## 📖 サーバー仕様

- Linux Ubuntu 20.04 LTS
- Linux Ubuntu 22.04 LTS

## Solana バリデーターのセットアップ

```bash
$ sh -c "$(curl -sSfL "https://storage.googleapis.com/epics-bucket/resource/solv/v3.0.0/install")"
$ cd ~ && source ~/.profile
$ solv setup
```

## Solana バリデーターキーと設定の生成

Solana バリデーターのキーと設定を生成するには、以下のコマンドを使用します。

_テストネットバリデーターとして参加する場合、約 500 のテストネット SOL（無料）が必要です。事前にテストネット SOL を入手し、生成された testnet-validator-keypair.json の pubkey に転送してください。_

（TDS に参加する方向け：EpicsDAO ウォレットにテストネット SOL が残っている場合、提供します。詳細は Discord チャンネルにてご確認ください：https://discord.gg/Z8M8rZeX8R）

```bash
$ solv setup
```

### Solana Delegation Program

https://solana.org/delegation-program

## Solana バリデーターの開始

```bash
$ solv start
```

## Solana バリデーターの停止

```bash
$ solv stop
```

## Solana バリデーターの再起動

```bash
$ solv restart
```

デフォルトのコマンドは--no-incremental-snapshots です。

スナップショットをダウンロードしたい場合は、以下のコマンドを使用できます。

```bash
$ solv restart --snapshot
```

## Solana バリデータのステータス確認

```bash
$ solv status
```

## Solana バリデーターのログ確認

```bash
$ solv log
```

## Solana バリデーターの設定確認

このコマンドは、solana バリデーターに使用されるすべての設定パスを表示します。

```bash
$ solv get config
```

## solv CLI

```bash
$ solv --help
使用法: solv [オプション] [コマンド]

💎 Solana バリデーター管理用 CLI 💎

オプション:
  -v, --version        現在のバージョンを表示
  -h, --help           solvコマンドのヘルプを表示

コマンド:
  server|s             solvダッシュボードを開く
  start                Solanaバリデーターを開始
  restart [オプション]  Solanaバリデーターを再起動
  stop                 Solanaバリデーターを停止
  status               Solanaバリデーターのステータスを表示
  update|u [オプション] Solanaバリデーターのバージョンを更新
  log|l [オプション]    ログを表示
  install|i [オプション] Solanaのバージョンをインストール/更新
  stake                Solanaデリゲートステーク
  check                Solanaバリデーターをチェック
  get <cmd>            Solanaバリデーター情報を取得
  scp <cmd>            Solanaバリデーターキーペアをダウンロード/アップロード
  cron <cmd>           スケジュールされたタスクを実行
  setup [オプション]     Solanaバリデーターを設定
  help [cmd]           solvコマンドのヘルプを表示
```
