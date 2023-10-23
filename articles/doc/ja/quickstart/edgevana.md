---
id: quickstart-edgevana
title: クイックスタート - Edgevana
description: オープンソースのSolana バリデーター向けツールsolvのクイックスタート - Edgevana
---

solv は Solana ネットワークのバリデータ向けの包括的なコマンドラインユーティリティです。Solana のバリデータの設定、監視、および管理を簡単にし、効率的な操作と高度なパフォーマンスの洞察を提供します。経験豊富な Solana バリデータであっても、初めての方であっても、solv は Solana ブロックチェーン上での最適なバリデータの操作を保証するためのツールを提供します。

## Solana バリデータのセットアップ

Linux Ubuntu 20.04 TS

User: solv

```bash
$ sh -c "$(curl -sSfL "https://storage.googleapis.com/epics-bucket/resource/solv/v1.5.7/install")"
$ cd ~ && source ~/.profile
$ solv setup
```

![solv](https://storage.googleapis.com/epics-bucket/Validator/apt-install-solv.gif)

## Solana バリデータのキーと設定の生成

Solana のバリデータのキーと設定を生成するには以下のコマンドを使用します。
_テストネットバリデーターとして投票に参加する場合は、およそ 500 テストネット SOL（無料） が必要です。あらかじめテストネットの SOL を獲得しておき、生成された `testnet-validator-keypair.json` のアドレスへ送金して下さい。_

(TDS に参加する方は、EpicsDAO のウォレットにテストネットの SOL が残っている場合は差し上げますので、ディスコードチャンネルまでお越し下さい：https://discord.gg/5PPu6hc2EP)

```bash
$ solv setup
```

## Solana バリデータの起動

```bash
$ solv start
```

## Solana バリデータの停止

```bash
$ solv stop
```

## Solana バリデータの再起動

```bash
$ solv restart
```

デフォルトの solana-validator.sh コマンドは `--no-incremental-snapshots` です。

スナップショットをダウンロードしたい場合は、以下のコマンドを使用します。

```bash
$ solv restart --snapshot
```

このコマンドは自動的に`--no-incremental-snapshots` を削除し、`--no-genesis-fetch` と`--no-snapshot-fetch` をあなたの`solana-validator.sh` コマンドに追加します。

## Solana バリデータのステータス

```bash
$ solv status
```

## Solana バリデータのログ

```bash
$ solv log
```

または エラー/警告のみを表示する場合は以下のコマンドを使用します。

```bash
$ solv log -e
```

## Solana バリデータの設定の表示

このコマンドは solana バリデータで使用されるすべての設定パスを表示します。

```bash
$ solv config
```

## Solana Delegation プログラム

https://solana.org/delegation-program

## solv CLI

```bash
$ solv --help
使用方法: solv [options] [command]

Solana バリデータのためのCLI

オプション:
  -V, --version                         バージョン番号を出力
  -h, --help                            コマンドのヘルプを表示

コマンド:
  solv                                  Solv AAを表示
  epoch                                 現在のエポックを取得
  slot                                  現在のスロットを取得
  config|c                              Solv バリデータの設定を表示
  status                                Solana バリデータのステータスを表示
  start                                 Solana バリデータを起動
  restart [options]                     Solana バリデータを再起動
  stop                                  Solana バリデータを停止
  check                                 Solana バリデータの環境を確認
  install|i [options]                   Solanaのインストール/更新コマンド
  mt [options]                          Linuxのマウントコマンド
  umt [options]                         Solanaのアンマウントコマンド
  mtr                                   マウントの再読み込みコマンド
  setup [options]                       Solana バリデータの全機能設定
  df                                    ディスク空き容量コマンド
  lsblk|ls                              Solanaディスク使用状況コマンド
  stake [options] <stakeAccountPubkey>  Solanaのステーク委任コマンド
  update|u [options]                    Solanaバージョンの更新、再起動、及び不正なステークの監視
  log|l [options]                       ログを表示
  release|r [options] <version>         リリースを公開
  help [command]                        コマンドのヘルプを表示
```
