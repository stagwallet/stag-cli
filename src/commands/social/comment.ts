import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../wallet';

const { boostpow, Wallet, fromBackupSeedPhrase } = require('stag-wallet');

export default class SocialPost extends Command {
  static description = 'Comment on a bSocial onchain post'

  static examples = [
    `$ stag social comment --comment="Wow quite a profound statement you made there --txid=$OP_TXID`,
  ]

  static flags = {
    comment: Flags.string({char: 'c', description: 'Content of the comment', required: true}),
    txid: Flags.string({char: 't', description: 'Txid of post being commented upon', required: true}),
        author: Flags.string({ char: 'a', description: 'Whether or not to post with your bitcoin identity or anon', required: false})
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
