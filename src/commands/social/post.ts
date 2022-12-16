import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../wallet';

const { boostpow, Wallet, fromBackupSeedPhrase } = require('stag-wallet');

export default class SocialPost extends Command {
  static description = 'Post to the blockchain using bSocial protocol'

  static examples = [
    `$ stag social post --content='#Big Announcement' --content-type=text/markdown`,
    `$ stag social post --file=/path/to/my/big_announcement.md`,
    `$ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID`,
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

      const {flags} = await this.parse(SocialPost)

      const { difficulty, content, satoshis } = flags

      const params = {
        content,
        satoshis,
        difficulty: parseFloat(difficulty)
      }

      var wallet = await loadWallet()

      if (flags.seed) {

        wallet = fromBackupSeedPhrase(flags.seed)

      }

      this.log(JSON.stringify(params))

      const result = await boostpow(params)

      this.log(JSON.stringify(result))

    } catch(error) {

      console.error(error)
    }

  }
}
