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
stag-cli/0.1.1 darwin-x64 node-v16.13.1
$ stag --help [COMMAND]
USAGE
  $ stag COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`stag boost`](#stag-boost)
* [`stag boost addresses`](#stag-boost-addresses)
* [`stag boost seed`](#stag-boost-seed)
* [`stag file`](#stag-file)
* [`stag file seed`](#stag-file-seed)
* [`stag file upload`](#stag-file-upload)
* [`stag help [COMMAND]`](#stag-help-command)
* [`stag init`](#stag-init)
* [`stag onchain`](#stag-onchain)
* [`stag onchain world`](#stag-onchain-world)
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
* [`stag wallet`](#stag-wallet)
* [`stag wallet addresses`](#stag-wallet-addresses)
* [`stag wallet seed`](#stag-wallet-seed)

## `stag boost`

Say hello

```
USAGE
  $ stag boost -k <value> -a <value> -t <value> -c <value>

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

_See code: [dist/commands/boost/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/boost/index.ts)_

## `stag boost addresses`

Say hello world

```
USAGE
  $ stag boost addresses

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag boost addresses
  hello world! (./src/commands/hello/world.ts)
```

## `stag boost seed`

Say hello world

```
USAGE
  $ stag boost seed

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag boost seed
  hello world! (./src/commands/hello/world.ts)
```

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

_See code: [dist/commands/file/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/file/index.ts)_

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

_See code: [dist/commands/init/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/init/index.ts)_

## `stag onchain`

Say hello

```
USAGE
  $ stag onchain -k <value> -a <value> -t <value> -c <value>

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

_See code: [dist/commands/onchain/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/onchain/index.ts)_

## `stag onchain world`

Say hello world

```
USAGE
  $ stag onchain world

DESCRIPTION
  Say hello world

EXAMPLES
  $ stag onchain world
  hello world! (./src/commands/hello/world.ts)
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

_See code: [dist/commands/pay/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/pay/index.ts)_

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

## `stag wallet`

Say hello

```
USAGE
  $ stag wallet -k <value> -a <value> -t <value> -c <value>

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

_See code: [dist/commands/wallet/index.ts](https://github.com/stagwallet/stag-cli/blob/v0.1.1/dist/commands/wallet/index.ts)_

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
