
import {Command, Flags} from '@oclif/core'
import { importWalletFromSeed, loadWallet } from '../../wallet'

export default class WalletCreate extends Command {

  static description = 'Create Import Existing Wallet From Seed Phrase'

  static examples = [
    `$ stag wallet import --seed $seedphrase --name midasmulligan@relayx.io`
  ]

  static flags = {

    seed: Flags.string({
      char: 's',
      description: 'Import recovery seed phrase instead of generating new keys',
      required: true
    }),

    name: Flags.string({
      char: 'n',
      description: 'Name of wallet - it must be unique',
      required: true
    })

  }

  async run(): Promise<void> {

    const {args, flags} = await this.parse(WalletCreate)

    if (flags.seed) {

      this.log(`import wallet from existing backup seed phrase`)

      const mnemonic = flags.seed

      const wallet = await importWalletFromSeed({mnemonic, name: flags.name})
    
      this.log(JSON.stringify(wallet))
      
    } else {

        const wallet = loadWallet({name: flags.name})

        this.log(JSON.stringify(wallet))

    }

  }
}
