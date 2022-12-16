import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../wallet'

export default class ShowWalletSeedPhrase extends Command {
  static description = 'Show Wallet Backup Seed Phrase'

  static examples = [
    `stag wallet seed --name mywallet`
  ]

  static flags = {
    name: Flags.string({
      char: 'n',
      description: 'Name of wallet - it must already exist',
      required: false
    })
  }

  static args = []

  async run(): Promise<void> {

    const {flags: {name}} = await this.parse(ShowWalletSeedPhrase)

    const wallet = await loadWallet({ name })

    if (!wallet) { throw new Error('Wallet not found') }

    const words = wallet.seed

    this.log(words)
        
    return words
  }
}
