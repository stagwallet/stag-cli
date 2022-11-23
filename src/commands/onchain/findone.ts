import {Command, Flags} from '@oclif/core'

const { onchain } = require('stag-wallet')

import { BaseCommand } from '../../baseCommand'

export default class OnchainFindOne extends BaseCommand<typeof OnchainFindOne> {
  static description = 'Find JSON Record Onchain or Create if Missing'

  static examples = [
    `$ stag onchain findone --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}' --privatekey $KEY 
`,
  ]

  static flags = {
    app: Flags.string({char: 'a', description: 'App namespace', required: true}),
    author: Flags.string({char: 'i', description: 'Author Identity', required: false}),
    type: Flags.string({char: 't', description: 'Type of message', required: true}),
    content: Flags.string({char: 'c', description: 'JSON string of message content', required: false})
  }

  async run(): Promise<void> {

    try {
        const {args, flags} = await this.parse(OnchainFindOne)

        const { author, type, content, app } = flags

        console.log({ flags })
    
        const result = await onchain.findOne({
    
            app,
    
            author,
    
            type,
    
            content: content    
        })
    
        this.log(`onchain findone --app=${flags.app} --type=${flags.type} --content=${flags.content}`)

        console.log('result', result)

    } catch(error) {

        console.error('error', error)

    }

  }
}
