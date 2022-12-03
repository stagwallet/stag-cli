import {Command, Flags, CliUx} from '@oclif/core'

const { fromBackupSeedPhrase } = require('stag-wallet')
//@ts-ignore
import { HDPrivateKey } from 'bsv'
//@ts-ignore
import { Bip39 } from 'bsv-2'

import { createWallet } from '../../wallet'

export default class WalletCreate extends Command {

  static description = 'Create New Or Import Existing Wallet'

  static examples = [
    `$ stag init --config=/etc/stag/config.json'`
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

  async run(): Promise<any> {

    const {args, flags} = await this.parse(WalletCreate)

    var hdPrivateKey = new HDPrivateKey()

    if (flags.seed) {

      this.log(`import wallet from existing backup seed phrase`)

      const wallet = fromBackupSeedPhrase(flags.seed)

      const seed = Bip39.fromString(flags.seed).toSeed().toString('hex')

      const hdPrivateKey = HDPrivateKey.fromSeed(seed)

    }

    const bsvKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey

    const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey

    const runKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey

    const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

    const result = await createWallet(hdPrivateKey)

    this.log(JSON.stringify(result))

    const entries = Object.entries(result).map(entry => {
      return {
        key: entry[0],
        value: entry[1]
      }
    })

    CliUx.ux.table(entries, {
      key: {
        minWidth: 7,
      },
      value: {
        minWidth: 7,
      }
    }, {
      printLine: this.log.bind(this),
      ...flags, // parsed flags
    })
        
    return result
  }

}
