---
id: quickstart-edgevana
title: Quickstart - For Edgevana
description: Quickstart of solv, an open-source tool for Solana validator for Edgevana
---

solv is a comprehensive command-line utility designed for Solana network
validators. It simplifies the process of setting up, monitoring, and
managing Solana validators, offering streamlined operations and enhanced
performance insights. Whether you're a seasoned Solana validator or just
getting started, solv provides the tools you need to ensure optimal validator
operations on the Solana blockchain.

## Solana Validator Setup

Linux Ubuntu 20.04 TS - Edgevana

User: solv

```bash
$ sh -c "$(curl -sSfL "https://storage.googleapis.com/epics-bucket/resource/solv/v1.5.7/install")"
$ cd ~ && source ~/.profile
$ solv setup
```

![solv](https://storage.googleapis.com/epics-bucket/Validator/apt-install-solv.gif)

## Generate Solana Validator Keys and Config

To generate keys and configuration for a Solana validator, use the following command.

_If you're participating as a testnet validator, you'll need approximately 500 Testnet SOL (Free). Please acquire Testnet SOL in advance and transfer it to the address in the generated `testnet-validator-keypair.json`'s pubkey._

(For those participating in TDS, if there's any remaining testnet SOL in the EpicsDAO wallet, we'll provide it. Please join our Discord channel for further details: https://discord.gg/Z8M8rZeX8R)

```bash
$ solv setup
```

## Start Solana Validator

```bash
$ solv start
```

## Stop Solana Validator

```bash
$ solv stop
```

## Restart Solana Validator

```bash
$ solv restart
```

Default `solana-validator.sh` command is `--no-incremental-snapshots`.

If you want to download snapshot, you can use the following command.

```bash
$ solv restart --snapshot
```

This command will automatically remove `--no-incremental-snapshots` and add `--no-genesis-fetch`, `--no-snapshot-fetch` to your`solana-validator.sh` command.

## Solana Validator Status

```bash
$ solv status
```

## Solana Validator Logs

```bash
$ solv log
```

or only check Error or Warning logs

```bash
$ solv log -e
```

## Show Solana Validator Config

This command will show your all config paths which are used by solana validator.

```bash
$ solv config
```

## Solana Delegation Program

https://solana.org/delegation-program

## solv CLI

```bash
$ solv --help
Usage: solv [options] [command]

CLI for Solana Validators

Options:
  -V, --version                         output the version number
  -h, --help                            display help for command

Commands:
  solv                                  Show Solv AA
  epoch                                 Get Current Epoch
  slot                                  Get Current Slot
  config|c                              Show Solv Validator Config
  status                                Show Solana Validator Status
  start                                 Start Solana Validator
  restart [options]                     Restart Solana Validator
  stop                                  Stop Solana Validator
  check                                 Check Solana Validator Environment
  install|i [options]                   Solana Install/Update Command
  mt [options]                          Linux Mount Command
  umt [options]                         Solana Umount Command
  mtr                                   Mount Reload Command
  setup [options]                       Setup Solana Validator All-in-One
  df                                    Disk Free Command
  lsblk|ls                              Solana Disk Usage Command
  stake [options] <stakeAccountPubkey>  Solana Delegate Stake Command
  update|u [options]                    Solana Version Update, Restart and Monitoring Delinquent Stake
  log|l [options]                       tail logs
  release|r [options] <version>         publish release
  help [command]                        display help for command
```
