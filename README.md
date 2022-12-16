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
stag-cli/0.2.0 darwin-x64 node-v16.13.1
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
* [`stag file`](#stag-file)
* [`stag file seed`](#stag-file-seed)
* [`stag file upload`](#stag-file-upload)
* [`stag help [COMMAND]`](#stag-help-command)
* [`stag init`](#stag-init)
* [`stag onchain create`](#stag-onchain-create)
* [`stag onchain findall`](#stag-onchain-findall)
* [`stag onchain findone`](#stag-onchain-findone)
* [`stag onchain findorcreate`](#stag-onchain-findorcreate)
* [`stag onchain stream`](#stag-onchain-stream)
* [`stag pay`](#stag-pay)
* [`stag pay addresses`](#stag-pay-addresses)
* [`stag pay seed`](#stag-pay-seed)
* [`stag plugins`](#stag-plugins)
* [`stag plugins:install PLUGIN...`](#stag-pluginsinstall-plugin)
* [`stag plugins:inspect PLUGIN...`](#stag-pluginsinspect-plugin)
* [`stag plugins:install PLUGIN...`](#stag-pluginsinstall-plugin-1)
* [`stag plugins:link PLUGIN`](#stag-pluginslink-plugin)
* [`stag plugins:uninstall PLUGIN...`](#stag-pluginsuninstall-plugin)
* [`stag plugins:uninstall PLUGIN...`](#stag-pluginsuninstall-plugin-1)
* [`stag plugins:uninstall PLUGIN...`](#stag-pluginsuninstall-plugin-2)
* [`stag plugins update`](#stag-plugins-update)
* [`stag run balances`](#stag-run-balances)
* [`stag run nfts PERSON`](#stag-run-nfts-person)
* [`stag wallet addresses`](#stag-wallet-addresses)
* [`stag wallet create`](#stag-wallet-create)
* [`stag wallet import`](#stag-wallet-import)
* [`stag wallet seed`](#stag-wallet-seed)

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

## `stag file`

Say hello

```
USAGE
  $ stag file -k <value> -a <value> -t <value> -c <value>

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --content=<value>     (required) JSON string of message content
  -k, --privatekey=<value>  (required) Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

DESCRIPTION
  Say hello

EXAMPLES
  $ stag onchain post --privatekey $KEY --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}'
```

_See code: [dist/commands/file/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.2.0/dist/commands/file/index.ts)_

## `stag file seed`

Say hello world

```
USAGE
  $ stag file seed

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag file seed
  hello world! (./src/commands/hello/world.ts)
```

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

## `stag init`

Create New Or Import Existing Wallet

```
USAGE
  $ stag init [-c <value>] [-f <value>] [-s <value>]

FLAGS
  -c, --config=<value>  Path to config file that will store recovery keys
  -f, --force=<value>   Destructively Overrides existing confiuration.
  -s, --seed=<value>    Import recovery seed phrase instead of generating new keys

DESCRIPTION
  Create New Or Import Existing Wallet

EXAMPLES
  $ stag init --config=/etc/stag/config.json'
```

_See code: [dist/commands/init/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.2.0/dist/commands/init/index.ts)_

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

## `stag pay`

Say hello

```
USAGE
  $ stag pay -k <value> -a <value> -t <value> -c <value>

FLAGS
  -a, --app=<value>         (required) App namespace
  -c, --content=<value>     (required) JSON string of message content
  -k, --privatekey=<value>  (required) Private Key for Signing and Funds
  -t, --type=<value>        (required) Type of message

DESCRIPTION
  Say hello

EXAMPLES
  $ stag onchain post --privatekey $KEY --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}'
```

_See code: [dist/commands/pay/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.2.0/dist/commands/pay/index.ts)_

## `stag pay addresses`

Say hello world

```
USAGE
  $ stag pay addresses

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag pay addresses
  hello world! (./src/commands/hello/world.ts)
```

## `stag pay seed`

Say hello world

```
USAGE
  $ stag pay seed

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag pay seed
  hello world! (./src/commands/hello/world.ts)
```

## `stag plugins`

List installed plugins.

```
USAGE
  $ stag plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ stag plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `stag plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stag plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ stag plugins add

EXAMPLES
  $ stag plugins:install myplugin 

  $ stag plugins:install https://github.com/someuser/someplugin

  $ stag plugins:install someuser/someplugin
```

## `stag plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ stag plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ stag plugins:inspect myplugin
```

## `stag plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ stag plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ stag plugins add

EXAMPLES
  $ stag plugins:install myplugin 

  $ stag plugins:install https://github.com/someuser/someplugin

  $ stag plugins:install someuser/someplugin
```

## `stag plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ stag plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ stag plugins:link myplugin
```

## `stag plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stag plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stag plugins unlink
  $ stag plugins remove
```

## `stag plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stag plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stag plugins unlink
  $ stag plugins remove
```

## `stag plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ stag plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ stag plugins unlink
  $ stag plugins remove
```

## `stag plugins update`

Update installed plugins.

```
USAGE
  $ stag plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
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

## `stag run nfts PERSON`

Say hello

```
USAGE
  $ stag run nfts [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

## `stag wallet addresses`

Say hello world

```
USAGE
  $ stag wallet addresses

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag wallet addresses
  hello world! (./src/commands/hello/world.ts)
```

## `stag wallet create`

Create New Or Import Existing Wallet

```
USAGE
  $ stag wallet create [--json] [-c <value>] [-f <value>] [-s <value>]

FLAGS
  -c, --config=<value>  Path to config file that will store recovery keys
  -f, --force=<value>   Destructively Overrides existing confiuration.
  -s, --seed=<value>    Import recovery seed phrase instead of generating new keys

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Create New Or Import Existing Wallet

EXAMPLES
  $ stag init --config=/etc/stag/config.json'
```

## `stag wallet import`

Create New Or Import Existing Wallet

```
USAGE
  $ stag wallet import [-c <value>] [-f <value>] [-s <value>]

FLAGS
  -c, --config=<value>  Path to config file that will store recovery keys
  -f, --force=<value>   Destructively Overrides existing confiuration.
  -s, --seed=<value>    Import recovery seed phrase instead of generating new keys

DESCRIPTION
  Create New Or Import Existing Wallet

EXAMPLES
  $ stag init --config=/etc/stag/config.json'
```

## `stag wallet seed`

Say hello world

```
USAGE
  $ stag wallet seed

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag wallet seed
  hello world! (./src/commands/hello/world.ts)
```
<!-- commandsstop -->
