import {Command, Flags} from '@oclif/core'

const tokenkit = require('@runonbitcoin/tokenkit')

export default class GetRunFTBalance extends Command {
  static description = 'Get your balance of a fungible token'

  static examples = [
    `$ stag run ft balance \
        --origin=93f9f188f93f446f6b2d93b0ff7203f96473e39ad0f58eb02663896b53c4f020_o2`
  ]

  static flags = {
    origin: Flags.string({ char: 'o', description: 'Origin of Token to Send', required: true}),
  }


  async run(): Promise<void> {

    const {flags} = await this.parse(GetRunFTBalance)

    const box = await tokenkit.ft.getJigBox(flags.origin)

    this.log(`Send RUN FT ${flags.amount} ${flags.origin} tokens to ${flags.to}`)
  }
}
