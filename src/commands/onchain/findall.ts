import {Command, Flags} from '@oclif/core'

const { onchain } = require('stag-wallet')

export default class OnchainFindAll extends Command {
  static description = 'Find all matching JSON records'

  static examples = [
    `$ stag onchain findall --app midasvalley.net --type watch_domain`,
  ]

  static flags = {
    app: Flags.string({char: 'a', description: 'App namespace', required: true}),
    type: Flags.string({char: 't', description: 'Type of message', required: false}),
    content: Flags.string({char: 'c', description: 'JSON string of message content', required: false}),
    limit: Flags.integer({char: 'l', description: 'Number of records to return', required: false }),
    offset: Flags.integer({char: 'o', description: 'Offset results by a number of records', required: false })
  }

  async run(): Promise<void> {

    try {

      const {args, flags} = await this.parse(OnchainFindAll)

      const { author, type, content, app } = flags

      console.log({ flags })
  
      const result = await onchain.findAll({
  
          app,
  
          author,
  
          type,
  
          content: JSON.parse(content || '{}')
      })
  
      this.log(`onchain findone --app=${flags.app} --type=${flags.type} --content=${flags.content}`)

      console.log('result', result)

  } catch(error) {

      console.error('error', error)

  }
  }
}