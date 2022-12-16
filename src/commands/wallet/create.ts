import {Command, Flags} from '@oclif/core'

const bip39 = require('bip39')

import { importWalletFromSeed } from '../../wallet'

export default class WalletCreate extends Command {

  static enableJsonFlag: boolean = true

  static description = 'Create New Or Import Existing Wallet'

  static examples = [
    `$ stag wallet create --name mywallet`
  ]

  static flags = {

    name: Flags.string({
      char: 'n',
      description: 'Name of wallet - it must be unique',
      required: true
    })

  }

  async run(): Promise<any> {

    const {flags} = await this.parse(WalletCreate)

    const mnemonic = flags.seed || bip39.generateMnemonic()

    const { name } = flags    

    const result = await importWalletFromSeed({ mnemonic, name})

    if (result) {
      this.log(JSON.stringify(result.wallets.filter(wallet => wallet.name === name)[0], null, 2))
    }
  
    return result
  }

}
