import {Command, Flags} from '@oclif/core'

const { fromBackupSeedPhrase } = require('/Users/zyler/github/stagwallet/stag-wallet')  

export default class Hello extends Command {

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

    const {args, flags} = await this.parse(Hello)

    if (flags.seed) {

      this.log(`import wallet from existing backup seed phrase`)

      const wallet = fromBackupSeedPhrase(flags.seed)

      const [balance] = await wallet.balances()

      this.log(balance)
      
    } else {

      this.log(`generate new seed phrase from random number generator`)

    }

  }
}
