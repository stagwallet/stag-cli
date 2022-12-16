import {Command, Flags} from '@oclif/core'

export default class MintRunFungibleToken extends Command {
  static description = 'Mint fungible tokens'

  static examples = [
    `$ stag run ft mint --origin=$origin --amount=100  --paymail=midasmulligan@relayx.io --dryrun`,
  ]

  static flags = {
    origin: Flags.string({char: 'o', description: 'Origin of existing token contract', required: true}),
    amount: Flags.string({char: 'a', description: 'Amount of new tokens to mint', required: true}),
    paymail: Flags.string({char: 'p', description: 'Paymail to receive minted coins', required: true}),
    dryrun: Flags.string({char: 'd', description: 'Output signed transaction but do not broadcast', defaultValue: false, required: false})
  }

  async run(): Promise<void> {
    const { flags} = await this.parse(MintRunFungibleToken)

    this.log(`Mint RUN FT ${flags.amount} ${flags.origin} tokens to ${flags.paymail}`)
  }
}
