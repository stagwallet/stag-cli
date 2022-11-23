import {Command, Flags} from '@oclif/core'

const { onchain } = require('stag-wallet')

import { BaseCommand } from '../../baseCommand'

export default class OnchainCreate extends BaseCommand<typeof OnchainCreate> {
  static description = 'Create JSON Record Onchain'

  static examples = [
    `$ stag onchain create --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --seed $BACKUP_SEED_PHRASE 
`,
  ]

  static flags = {
    app: Flags.string({char: 'a', description: 'App namespace', required: true}),
    type: Flags.string({char: 't', description: 'Type of message', required: true}),
    content: Flags.string({char: 'c', description: 'JSON string of message content', required: true})
  }

  async run(): Promise<void> {

    try {
        const {args, flags} = await this.parse(OnchainCreate)

        this.log(`onchain post --app=${flags.app} --type=${flags.type} --content=${flags.content}`)

        const { app, type, content } = flags

        console.log({ app, type, content })

        const result = await onchain.post({

            val: content,

            app,

            key: type
        })

        console.log(result)

    } catch(error){

        console.error(error)
    }
  }
}
