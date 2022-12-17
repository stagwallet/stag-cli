oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g stag-cli
$ stag COMMAND
running command...
$ stag (--version)
stag-cli/0.3.0 darwin-x64 node-v16.13.1
$ stag --help [COMMAND]
USAGE
  $ stag COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`stag autocomplete [SHELL]`](#stag-autocomplete-shell)
* [`stag boost buy`](#stag-boost-buy)
* [`stag commands`](#stag-commands)
* [`stag conf [KEY] [VALUE]`](#stag-conf-key-value)
* [`stag file upload`](#stag-file-upload)
* [`stag help [COMMAND]`](#stag-help-command)
* [`stag onchain create`](#stag-onchain-create)
* [`stag onchain findall`](#stag-onchain-findall)
* [`stag onchain findone`](#stag-onchain-findone)
* [`stag onchain findorcreate`](#stag-onchain-findorcreate)
* [`stag onchain stream`](#stag-onchain-stream)
* [`stag run balances`](#stag-run-balances)
* [`stag run ft balance`](#stag-run-ft-balance)
* [`stag run ft deploy PERSON`](#stag-run-ft-deploy-person)
* [`stag run ft mint`](#stag-run-ft-mint)
* [`stag run ft send PERSON`](#stag-run-ft-send-person)
* [`stag social comment`](#stag-social-comment)
* [`stag social follow`](#stag-social-follow)
* [`stag social like`](#stag-social-like)
* [`stag social post`](#stag-social-post)
* [`stag social reply`](#stag-social-reply)
* [`stag social repost`](#stag-social-repost)
* [`stag social unfollow`](#stag-social-unfollow)
* [`stag social unlike`](#stag-social-unlike)
* [`stag wallet backup`](#stag-wallet-backup)
* [`stag wallet create`](#stag-wallet-create)
* [`stag wallet import`](#stag-wallet-import)
* [`stag wallet info`](#stag-wallet-info)
* [`stag wallet use NAME`](#stag-wallet-use-name)

## `stag autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ stag autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ stag autocomplete

  $ stag autocomplete bash

  $ stag autocomplete zsh

  $ stag autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v1.3.6/src/commands/autocomplete/index.ts)_

## `stag boost buy`

Place An Order To Buy BoostPow

```
USAGE
  $ stag boost buy -c <value> -d <value> -s <value> [--category <value>] [-t <value>] [-m <value>] [--seed
    <value>]

FLAGS
  -c, --content=<value>     (required) Txid of content to boost
  -d, --difficulty=<value>  (required) Difficulty for work order
  -m, --miner=<value>       Public address of miner for contract
  -s, --satoshis=<value>    (required) Value paid for job in satoshis
  -t, --tag=<value>         Tag will be converted to hex
  --category=<value>        Category will be converted to hex
  --seed=<value>            Backup Seed Phrase Words

DESCRIPTION
  Place An Order To Buy BoostPow

EXAMPLES
  $ boostpow buy --content $TXID --difficulty 2.18 --satoshis 10_000_000

  $ boostpow buy -c $TXID -d 2.18 -s 10_000_000
```

## `stag commands`

list all the commands

```
USAGE
  $ stag commands [--json] [-h] [--hidden] [--tree] [--columns <value> | -x] [--sort <value>] [--filter
    <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -h, --help         Show CLI help.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --hidden           show hidden commands
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)
  --tree             show tree of commands

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list all the commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.2.1/src/commands/commands.ts)_

## `stag conf [KEY] [VALUE]`

manage configuration

```
USAGE
  $ stag conf [KEY] [VALUE] [-h] [-k <value>] [-v <value>] [-d] [-p <value>] [-n <value>] [-d <value>]

ARGUMENTS
  KEY    key of the config
  VALUE  value of the config

FLAGS
  -d, --cwd=<value>      config file location
  -d, --delete           delete?
  -h, --help             show CLI help
  -k, --key=<value>      key of the config
  -n, --name=<value>     config file name
  -p, --project=<value>  project name
  -v, --value=<value>    value of the config

DESCRIPTION
  manage configuration
```

_See code: [conf-cli](https://github.com/natzcam/conf-cli/blob/v0.1.9/src/commands/conf.ts)_

## `stag file upload`

Upload b:// files to the blockchain

```
USAGE
  $ stag file upload -f <value> [-d <value>] [-n <value>] [-c <value>] [-k <value>]

FLAGS
  -c, --contentType=<value>  Name of file, defaults to name on the local file system
  -d, --dryrun=<value>       Print transaction info but do not sign or transmit
  -f, --filepath=<value>     (required) Path to file that you will upload to blockchain
  -k, --key=<value>          Private key for signing and funding
  -n, --name=<value>         Name of file, defaults to name on the local file system

DESCRIPTION
  Upload b:// files to the blockchain

EXAMPLES
  $ stag file upload --file /path/to/file.wav --name interview_with_her_snackness.wav
```

## `stag help [COMMAND]`

Display help for stag.

```
USAGE
  $ stag help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for stag.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `stag onchain create`

Create JSON Record Onchain

```
USAGE
  $ stag onchain create -a <value> -t <value> -c <value> [--json] [-s <value>] [-k <value>]

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --content=<value>     (required) JSON string of message content
  -k, --privatekey=<value>  Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

GLOBAL FLAGS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.
  --json              Format output as json.

DESCRIPTION
  Create JSON Record Onchain

EXAMPLES
  $ stag onchain create --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --seed $BACKUP_SEED_PHRASE 

FLAG DESCRIPTIONS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.

    Mnemoic Backup Seed Phrase For Wallet.
```

## `stag onchain findall`

Find all matching JSON records

```
USAGE
  $ stag onchain findall -a <value> [-t <value>] [-c <value>] [-l <value>] [-o <value>]

FLAGS
  -a, --app=<value>      (required) App namespace
  -c, --content=<value>  JSON string of message content
  -l, --limit=<value>    Number of records to return
  -o, --offset=<value>   Offset results by a number of records
  -t, --type=<value>     Type of message

DESCRIPTION
  Find all matching JSON records

EXAMPLES
  $ stag onchain findall --app midasvalley.net --type watch_domain
```

## `stag onchain findone`

Find JSON Record Onchain or Create if Missing

```
USAGE
  $ stag onchain findone -a <value> -t <value> [--json] [-s <value>] [-k <value>] [-i <value>] [-c <value>]

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --content=<value>     JSON string of message content
  -i, --author=<value>      Author Identity
  -k, --privatekey=<value>  Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

GLOBAL FLAGS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.
  --json              Format output as json.

DESCRIPTION
  Find JSON Record Onchain or Create if Missing

EXAMPLES
  $ stag onchain findone --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --privatekey $KEY 

FLAG DESCRIPTIONS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.

    Mnemoic Backup Seed Phrase For Wallet.
```

## `stag onchain findorcreate`

Find JSON Record Onchain or Create if Missing

```
USAGE
  $ stag onchain findorcreate -a <value> -t <value> -c <value> -c <value> [--json] [-s <value>] [-k <value>]

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --defaults=<value>    (required) JSON string of message content
  -c, --where=<value>       (required) JSON string of message content
  -k, --privatekey=<value>  Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

GLOBAL FLAGS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.
  --json              Format output as json.

DESCRIPTION
  Find JSON Record Onchain or Create if Missing

EXAMPLES
  $ stag onchain findorcreate --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --privatekey $KEY 

FLAG DESCRIPTIONS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.

    Mnemoic Backup Seed Phrase For Wallet.
```

## `stag onchain stream`

Find JSON Record Onchain or Create if Missing

```
USAGE
  $ stag onchain stream -a <value> -t <value> -c <value> -c <value> [--json] [-s <value>] [-k <value>]

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --defaults=<value>    (required) JSON string of message content
  -c, --where=<value>       (required) JSON string of message content
  -k, --privatekey=<value>  Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

GLOBAL FLAGS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.
  --json              Format output as json.

DESCRIPTION
  Find JSON Record Onchain or Create if Missing

EXAMPLES
  $ stag onchain findorcreate --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --privatekey $KEY 

FLAG DESCRIPTIONS
  -s, --seed=<value>  Mnemoic Backup Seed Phrase For Wallet.

    Mnemoic Backup Seed Phrase For Wallet.
```

## `stag run balances`

List balances of RUN fungible tokens

```
USAGE
  $ stag run balances -s <value>

FLAGS
  -s, --seed=<value>  (required) Import recovery seed phrase instead of generating new keys

DESCRIPTION
  List balances of RUN fungible tokens

EXAMPLES
  $ stag run balances
```

## `stag run ft balance`

Get your balance of a fungible token

```
USAGE
  $ stag run ft balance -o <value>

FLAGS
  -o, --origin=<value>  (required) Origin of Token to Send

DESCRIPTION
  Get your balance of a fungible token

EXAMPLES
  $ stag run ft balance         --origin=93f9f188f93f446f6b2d93b0ff7203f96473e39ad0f58eb02663896b53c4f020_o2
```

## `stag run ft deploy PERSON`

Deploy a new Run Fungible Token Coin contract

```
USAGE
  $ stag run ft deploy [PERSON] -n <value> -d <value> -i <value> -s <value> [-p <value>] [-r <value>]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -d, --description=<value>  (required) Description of token
  -i, --image=<value>        (required) b:// protocol image link
  -n, --name=<value>         (required) Name of Token
  -p, --decimals=<value>     Number of decimals
  -r, --dryrun=<value>       Output signed transaction but do not broadcast
  -s, --symbol=<value>       (required) Symbol of Token

DESCRIPTION
  Deploy a new Run Fungible Token Coin contract

EXAMPLES
  $ stag run ft deploy         --name='My Developer Token'         --description 'Use it to hire me and earn rewards'         --image=b://2373632532517983c948df2f32d89ec4a6c64ece1d71698c21b2ad027edfec60         --symbol=DEV         --decimals=8         --dryrun
```

## `stag run ft mint`

Mint fungible tokens

```
USAGE
  $ stag run ft mint -o <value> -a <value> -p <value> [-d <value>]

FLAGS
  -a, --amount=<value>   (required) Amount of new tokens to mint
  -d, --dryrun=<value>   Output signed transaction but do not broadcast
  -o, --origin=<value>   (required) Origin of existing token contract
  -p, --paymail=<value>  (required) Paymail to receive minted coins

DESCRIPTION
  Mint fungible tokens

EXAMPLES
  $ stag run ft mint --origin=$origin --amount=100  --paymail=midasmulligan@relayx.io --dryrun
```

## `stag run ft send PERSON`

Send a fungible token

```
USAGE
  $ stag run ft send [PERSON] -a <value> -o <value> -t <value> [-r <value>]

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -a, --amount=<value>  (required) Amount to Send
  -o, --origin=<value>  (required) Origin of Token to Send
  -r, --dryrun=<value>  Output signed transaction but do not broadcast
  -t, --to=<value>      (required) Paymail Address or Bitcoin Address

DESCRIPTION
  Send a fungible token

EXAMPLES
  $ stag run ft send         --origin=$origin         --to='1FCKGH5tTjSkLgiQEKzoaKzDcBCD5dVHX6'         --paymail=midasmulligan@relayx.io         --amount 21800         --dryrun=true
```

## `stag social comment`

Comment on a bSocial onchain post

```
USAGE
  $ stag social comment -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social follow`

Comment on a bSocial onchain post

```
USAGE
  $ stag social follow -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social like`

Comment on a bSocial onchain post

```
USAGE
  $ stag social like -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social post`

Post to the blockchain using bSocial protocol

```
USAGE
  $ stag social post -c <value> -d <value> -s <value> [--category <value>] [-t <value>] [-m <value>] [--seed
    <value>]

FLAGS
  -c, --content=<value>     (required) Txid of content to boost
  -d, --difficulty=<value>  (required) Difficulty for work order
  -m, --miner=<value>       Public address of miner for contract
  -s, --satoshis=<value>    (required) Value paid for job in satoshis
  -t, --tag=<value>         Tag will be converted to hex
  --category=<value>        Category will be converted to hex
  --seed=<value>            Backup Seed Phrase Words

DESCRIPTION
  Post to the blockchain using bSocial protocol

EXAMPLES
  $ stag social post --content='#Big Announcement' --content-type=text/markdown

  $ stag social post --file=/path/to/my/big_announcement.md

  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social reply`

Comment on a bSocial onchain post

```
USAGE
  $ stag social reply -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social repost`

Comment on a bSocial onchain post

```
USAGE
  $ stag social repost -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social unfollow`

Comment on a bSocial onchain post

```
USAGE
  $ stag social unfollow -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag social unlike`

Comment on a bSocial onchain post

```
USAGE
  $ stag social unlike -c <value> -t <value> [-a <value>]

FLAGS
  -a, --author=<value>   Whether or not to post with your bitcoin identity or anon
  -c, --comment=<value>  (required) Content of the comment
  -t, --txid=<value>     (required) Txid of post being commented upon

DESCRIPTION
  Comment on a bSocial onchain post

EXAMPLES
  $ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID
```

## `stag wallet backup`

Show Wallet Backup Seed Phrase

```
USAGE
  $ stag wallet backup [-n <value>]

FLAGS
  -n, --name=<value>  Name of wallet - it must already exist

DESCRIPTION
  Show Wallet Backup Seed Phrase

EXAMPLES
  $ stag wallet seed --name mywallet
```

## `stag wallet create`

Create New Or Import Existing Wallet

```
USAGE
  $ stag wallet create -n <value> [--json]

FLAGS
  -n, --name=<value>  (required) Name of wallet - it must be unique

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create New Or Import Existing Wallet

EXAMPLES
  $ stag wallet create --name mywallet
```

## `stag wallet import`

Create Import Existing Wallet From Seed Phrase

```
USAGE
  $ stag wallet import -s <value> -n <value>

FLAGS
  -n, --name=<value>  (required) Name of wallet - it must be unique
  -s, --seed=<value>  (required) Import recovery seed phrase instead of generating new keys

DESCRIPTION
  Create Import Existing Wallet From Seed Phrase

EXAMPLES
  $ stag wallet import --seed $seedphrase --name midasmulligan@relayx.io
```

## `stag wallet info`

List Wallet Addresses and Balances

```
USAGE
  $ stag wallet info [-n <value>]

FLAGS
  -n, --name=<value>  Name of wallet - will use current wallet by default

DESCRIPTION
  List Wallet Addresses and Balances

EXAMPLES
  $ stag wallet info
```

## `stag wallet use NAME`

Create New Or Import Existing Wallet

```
USAGE
  $ stag wallet use [NAME] [--json]

ARGUMENTS
  NAME  Name of wallet - it must already exist

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create New Or Import Existing Wallet

EXAMPLES
  $ stag wallet use midasmulligan@relayx.io
```
<!-- commandsstop -->
