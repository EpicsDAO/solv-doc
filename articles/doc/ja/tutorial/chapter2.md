---
id: chapter2
title: '第2章: 🔐🚚 セキュリティと移転の完全ガイド - シークレットキーの安全なバックアップ、交換、そして定期アップデート作業 💼'
description: この章では、シークレットキーの安全な管理方法を詳しく説明します。バックアップの取り方、キーの安全な交換方法、そして緊急時のリスタートプロセスについて、実践的なガイドラインを提供します。
---

※こちらの内容は Ver.2 までの古いものになっており、ただいま Ver.3 対応のため書き直し中です。もしご質問等ございましたら Epics DAO 公式 Discord サーバーまでお越しください。

https://discord.gg/GmHYfyRamx

セキュリティはバリデーター運営の中心です。この章では、シークレットキーの安全な管理方法を詳しく説明します。バックアップの取り方、キーの安全な交換方法、そして緊急時のリスタートプロセスについて、実践的なガイドラインを提供します。読者が安心してバリデーター運用を続けられるよう、最新のセキュリティ対策にも焦点を当てます。

## 🗝️ SSH 鍵の作成 - 強固なアクセス基盤の構築

`solv CLI`をインストールしたローカルコンピュータから以下のコマンドを実行します。
※すでに SSH キーをお持ちの方はこのステップをスキップして下さい。

```bash
solv scp init
Generating public/private rsa key pair.
Enter file in which to save the key (/home/ubuntu/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/ubuntu/.ssh/id_rsa
Your public key has been saved in /home/ubuntu/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:4fBtHns/xlPO7wHLS37ILhqQ8vUMQfh55dJobUYGyUw ubuntu@c3-large-x86-bue-1
The key's randomart image is:
+---[RSA 4096]----+
|        ..+Eo    |
|       ..  + +   |
|      . o.. O    |
|       +.=.= *   |
|     . oSo* +.   |
|      o oo+o. o .|
|       . .ooo=.= |
|          .oo+*.+|
|         .. o=o++|
+----[SHA256]-----+
```

`ssh` 接続のためのキーペアが作成されました。

## 🔗 バリデーターサーバーで SSH 接続設定 - セキュアなリモートアクセスの確立

バリデーターノードのサーバーへ `SSH`接続します。

```bash
ssh username@<your-server-ip-address>
```

`solv` ユーザーに切り替え設定を読み込みます。

```bash
su solv
cd ~ && source ~/.profile
```

設定に必要な SSH 公開鍵を表示します。

```bash
solv scp cat
```

この公開鍵をコピーしておきます。

次に以下のコマンドで SSH 接続設定を行います。

```bash
solv scp create
? Enter your SSH Public Key (xxxxxxxpubkeyxxxxxxxx)
```

ここで上記でコピーした SSH 公開鍵を貼り付けます。
これでローカルコンピューターとバリデーターノードの接続設定が完了しました。

## 📦 鍵のバックアップ（バリデーターノード → ローカルコンピュータ）

このステップでは `バリデーターノード` から `ローカルコンピュータ` へ鍵のバックアップを取る方法を紹介します。
`/mt/solana/` ディレクトリにある以下の 4 つの鍵がダウンロードされます。

- `/mt/solana/mainnet-validator-keypair.json`
- `/mt/solana/testnet-validator-keypair.json`
- `/mt/solana/vote-account-keypair.json`
- `/mt/solana/authority-keypair.json`

※鍵を `ローカルコンピュータ` から `バリデーターノード`へアップロードする方はこのステップをスキップして下さい。

ローカルコンピュータから以下のコマンドを実行します。
バリデーターノードサーバーの IP を入力してください

```bash
solv scp download
? Enter your Ubuntu Server IP (1.1.1.1)
✅ Successfully Generated - ~/solvKeys/download/testnet-validator-keypair.json
✅ Successfully Generated - ~/solvKeys/download/mainnet-validator-keypair.json
✅ Successfully Generated - ~/solvKeys/download/vote-account-keypair.json
✅ Successfully Generated - ~/solvKeys/download/authority-keypair.json
```

`~/solvKeys/download` ディレクトリに鍵が保存されました 🎉
この鍵は大切に保管し、USB ディスクなどにバックアップをとっておくことをお勧めします。

## 🔀 鍵の交換（ローカルコンピュータ → バリデーターノード）

ローカルコンピュータから以下のコマンドを実行し、
バリデーターノードの IP を入力します。

`~/solvKeys/upload`

に全章で作成された鍵が

`/mt/solana`

ディレクトリにアップロードされます。
(※同じファイル名がある場合上書きされるので必ずバックアップを取ることをお勧めします。)

```bash
solv scp upload
? Enter your Ubuntu Server IP (1.1.1.1)
```

## 🔍 鍵を探す

もしすべての鍵のバックアップをとったか定かではない場合、
`solv scp search` コマンドで鍵を探すことができます。

```bash
solv scp search
start searching...
 ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 20% | ETA: 30s | 2062/10000
🔍 Found 4 Potential Solana Key Pairs 🎉

/home/ubuntu/solvKeys/upload/testnet-validator-keypair.json
/home/ubuntu/solvKeys/upload/authority-keypair.json
/home/ubuntu/solvKeys/upload/vote-account-keypair.json
/home/ubuntu/solvKeys/upload/mainnet-validator-keypair.json

Only showing the first 10 results
```

## 🔄 バリデーターノードの再起動

交換した鍵を反映させるために、バリデーターノード内で以下のコマンドを実行しノードを再起動します。

```bash
solv restart --snapshot
```

`--snapshot` オプションをつけることで、新規スナップショットをダウンロードすることができます。

これで鍵の交換作業は完了です 🎉

## ⚙️ Solana バージョンの定期アップデート作業

一度バリデーターを起動してさえしまえば、
主なバリデーターとしての作業は `solana` のバージョンアップとじっとモニタリングするだけです。

solv では以下のコマンドで毎回の `solana` のアップデートに対応しています。

```bash
solv update
solv update --monitor
```

`ready to restart` とログに表示されれば無事に完了です。

モニタリングをスキップする場合は、

```bash
solv update -b
```

で更新を完了することができます。

あとからモニターする場合でも以下のコマンドで確認することができます。

```bash
solv monitor
```

次の章ではサーバーレス環境でバリデーターノードを監視する方法についてご紹介したいと思います。
