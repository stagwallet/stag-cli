import {Command, Flags} from '@oclif/core'

const { fromBackupSeedPhrase } = require('stag-wallet')
//@ts-ignore
import { HDPrivateKey } from 'bsv'
//@ts-ignore
import { Bip39 } from 'bsv-2'

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

      const wallet = fromBackupSeedPhrase(flags.seed)

      const seed = Bip39.fromString(flags.seed).toSeed().toString('hex')

      const hdPrivateKey = HDPrivateKey.fromSeed(seed)
  
      console.log('hdPrivateKey', hdPrivateKey)
  
      const bsvKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey
      const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey
      const runKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey
      const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

      console.log({ bsvKey, changeKey, runKey, cancelKey })
      
    } else {

      this.log(`generate new seed phrase from random number generator`)

    }

  }
}
