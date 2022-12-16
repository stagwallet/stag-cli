import {Command, Flags} from '@oclif/core'

export default class SendRunFT extends Command {
  static description = 'Send a fungible token'

  static examples = [
    `$ stag run ft send \
        --origin=$origin \
        --to='1FCKGH5tTjSkLgiQEKzoaKzDcBCD5dVHX6' \
        --paymail=midasmulligan@relayx.io \
        --amount 21800 \
        --dryrun=true`,
  ]

  static flags = {
    amount: Flags.string({char: 'a', description: 'Amount to Send', required: true}),
    origin: Flags.string({ char: 'o', description: 'Origin of Token to Send', required: true}),
    to: Flags.string({char: 't', description: 'Paymail Address or Bitcoin Address', required: true}),
    dryrun: Flags.string({char: 'r', description: 'Output signed transaction but do not broadcast', defaultValue: false, required: false})
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {flags} = await this.parse(SendRunFT)

    this.log(`Send RUN FT ${flags.amount} ${flags.origin} tokens to ${flags.to}`)
  }
}
