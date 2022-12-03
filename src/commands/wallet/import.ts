
import {Command, Flags} from '@oclif/core'
import { importWalletFromSeed, loadWallet } from '../../wallet'

const { fromBackupSeedPhrase } = require('stag-wallet')  

export default class WalletCreate extends Command {

  static description = 'Create New Or Import Existing Wallet'

  static examples = [
    `$ stag init --config=/etc/stag/config.json'
`,
  ]

  static flags = {
    
    config: Flags.string({
      char: 'c',
      description: 'Path to config file that will store recovery keys',
      required: false
    }),

    force: Flags.string({
      char: 'f',
      description: 'Destructively Overrides existing confiuration.',
      required: false
    }),

    seed: Flags.string({
      char: 's',
      description: 'Import recovery seed phrase instead of generating new keys',
      required: false
    })

  }

  async run(): Promise<void> {

    const {args, flags} = await this.parse(WalletCreate)

    if (flags.seed) {

      this.log(`import wallet from existing backup seed phrase`)

      const wallet = await importWalletFromSeed(flags.seed)
    
      this.log(JSON.stringify(wallet))
      
    } else {

        const wallet = loadWallet()

        this.log(JSON.stringify(wallet))

    }

  }
}
