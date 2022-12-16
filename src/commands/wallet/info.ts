import {Command, Flags} from '@oclif/core'

import { loadWallet } from '../../wallet'


export default class ListWalletInfo extends Command {
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

    const { flags} = await this.parse(ListWalletInfo)
    
    const wallet = loadWallet({ name: flags.name})

    if (!wallet) { throw new Error('Wallet not found') }

    return { success: true }

  }
}
