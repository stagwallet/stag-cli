import {Command, Flags} from '@oclif/core'

const { onchain } = require('stag-wallet')

import { BaseCommand } from '../../baseCommand'

export default class OnchainStream extends BaseCommand<typeof OnchainStream> {
  static description = 'Find JSON Record Onchain or Create if Missing'

  static examples = [
    `$ stag onchain findorcreate --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --privatekey $KEY 
`,
  ]

  static flags = {
    app: Flags.string({char: 'a', description: 'App namespace', required: true}),
    type: Flags.string({char: 't', description: 'Type of message', required: true}),
    where: Flags.string({char: 'c', description: 'JSON string of message content', required: true}),
    defaults: Flags.string({char: 'c', description: 'JSON string of message content', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(OnchainStream)

    const [result, isNew] = await onchain.findOrCreate({

      where: {

      },

      defaults: {

      }
    })

    this.log(`onchain post --app=${flags.app} --type=${flags.type} --content=${flags.defaults}`)
  }
}
