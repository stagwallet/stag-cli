import {CliUx, Command, Flags} from '@oclif/core'

import { loadWallet } from '../../wallet'
import { BaseCommand } from '../../baseCommand'
import { loadConfig } from '../../config'


export default class ListWalletInfo extends BaseCommand<typeof ListWalletInfo> {
  static description = 'List Wallet Addresses and Balances'

  static examples = [
    `stag wallet info`,
  ]

  static flags = {
    name: Flags.string({
      char: 'n',
      description: 'Name of wallet - will use current wallet by default',
      required: false
    })
  }

  static args = []

  async run(): Promise<any> {
    const {flags} = await this.parse(ListWalletInfo)

    var { name } = flags

    var wallet: any = await loadWallet({ name })

    if (name && !wallet) {
      throw new Error(`Wallet ${name} not found`)
    }

    if (!name) {
      name = wallet.config.current_wallet_name
    }

    const config = await loadConfig()

    const current = config.wallets.filter((w: any) => w.name === name)[0]

    const homedir = require('os').homedir();

    const defaultOptions = {
      configDirectory: `${homedir}/.stag`
  }

    const directory = defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    const rows = Object.keys(current).map(key => {

      return {
        type: key,
        value: current[key]
      }
    })
    .filter(row => row.type !== 'seed' && row.type !== 'hdPrivateKey')

    CliUx.ux.table(rows, {
      type: {        
          get: row => row.type,
      },
      value: {        
          get: row => row.value,
      }

    }, {
      printLine: this.log.bind(this),
      ...flags, // parsed flags
    })

    return current

  }
}
