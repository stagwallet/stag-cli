import {Command} from '@oclif/core'

const bip39 = require('bip39')

import { importWalletFromSeed, loadWallet } from '../../wallet'

export default class UseWallet extends Command {

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

  async run(): Promise<any> {

    const {args} = await this.parse(UseWallet)

    const { name } = args

    const wallet = await loadWallet({ name })

    this.log(JSON.stringify(wallet, null, 2))
  
  }

}
