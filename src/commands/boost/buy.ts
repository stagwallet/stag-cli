import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../wallet';

const { boostpow, Wallet, fromBackupSeedPhrase } = require('/Users/zyler/github/stagwallet/stag-wallet');

export default class Buy extends Command {
  static description = 'Place An Order To Buy BoostPow'

  static examples = [
    `$ boostpow buy --content $TXID --difficulty 2.18 --satoshis 10_000_000`,
    `$ boostpow buy -c $TXID -d 2.18 -s 10_000_000`,
  ]

  static flags = {
    content: Flags.string({char: 'c', description: 'Txid of content to boost', required: true}),
    difficulty: Flags.string({char: 'd', description: 'Difficulty for work order', required: true}),
    satoshis: Flags.integer({char: 's', description: 'Value paid for job in satoshis', required: true}),
    category: Flags.string({description: 'Category will be converted to hex', required: false}),
    tag: Flags.string({ char: 't', description: 'Tag will be converted to hex', required: false}),
    miner: Flags.string({ char: 'm', description: 'Public address of miner for contract', required: false}),
    seed: Flags.string({ description: 'Backup Seed Phrase Words', required: false}),
  }

  async run(): Promise<void> {

    try {

      const {flags} = await this.parse(Buy)

      const { difficulty, content, satoshis } = flags

      const params = {
        content,
        satoshis,
        difficulty: parseFloat(difficulty)
      }

      var wallet = await loadWallet()

      if (flags.seed) {

        console.log('SEED', flags.seed)

        wallet = fromBackupSeedPhrase(flags.seed)

      }

      this.log(JSON.stringify(params))

      const result = await boostpow(params)

      console.log('boostpow.result', result)

      this.log(result)

    } catch(error) {

      console.error(error)
    }

  }
}
