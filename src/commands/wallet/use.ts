import {CliUx, Command} from '@oclif/core'

import { importWalletFromSeed, loadWallet } from '../../wallet'
import { writeFileSync } from 'fs';
import { BaseCommand } from '../../baseCommand';

const homedir = require('os').homedir();


const defaultOptions = {
  configDirectory: `${homedir}/.stag`
}


export default class UseWallet extends BaseCommand<typeof UseWallet> {

  static enableJsonFlag: boolean = true

  static description = 'Create New Or Import Existing Wallet'

  static examples = [
    `$ stag wallet use midasmulligan@relayx.io`
  ]

  static args = [{

    name: 'name',
    required: true,
    description: 'Name of wallet - it must already exist',

  }]

  static flags = {
    ...CliUx.ux.table.flags()
  }

  async run(): Promise<any> {

    const {args} = await this.parse(UseWallet)

    const { name } = args

    // find wallet if it exists, if not, prompt user for seed

    var wallet: any = await loadWallet({ name })

    if (!wallet) {

      const mnemonic = await CliUx.ux.prompt(`Enter Backup Seed Phrase for ${name} (hidden)`, {type: 'hide'})

      await importWalletFromSeed({mnemonic, name})

    }

    wallet = await loadWallet({ name })

    const config: any = Object.assign(wallet.config, {
      current_wallet_name: name
    })

    const current = config.wallets.filter((w: any) => w.name === name)[0]

    const directory = defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    writeFileSync(configFilePath, JSON.stringify(config, null, 2))

    this.log(`Current wallet set to ${name}`)

    const {flags} = await this.parse(UseWallet)

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
