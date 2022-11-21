import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Say hello'

  static examples = [
    `$ stag onchain post --privatekey $KEY --app askbitcoin.ai --type question --content ''{"content": "Who is John Galt?"}'
`,
  ]

  static flags = {
    privatekey: Flags.string({char: 'k', description: 'Private Key for Signing and Funds', required: true}),
    app: Flags.string({char: 'a', description: 'App namespace', required: true}),
    type: Flags.string({char: 't', description: 'Type of message', required: true}),
    content: Flags.string({char: 'c', description: 'JSON string of message content', required: true}),
  }

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Hello)

    this.log(`onchain post --app=${flags.app} --type=${flags.type} --content=${flags.content}`)
  }
}
