import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../../wallet'

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

  async run(): Promise<void> {
    const {flags} = await this.parse(SendRunFT)
    
    var wallet;

    if (flags.name) {    
        wallet = await loadWallet({ name: flags.name })
    } else {
        wallet = await loadWallet()
    }

    if (!wallet) {
      throw new Error('Wallet not found. Please create a wallet first.')
    }

    const Run = require('run-sdk')

    const run = new Run({
      purse: wallet.bsvKey.toWIF(),
      owner: wallet.runKey.toWIF()
    })

    run.trust(flags.origin.split('_')[0])
    run.trust('*')

    const token = await run.load(flags.origin)

    console.log(token)

    await token.sync()

    console.log('synced token', token)

    this.log(`Send RUN FT ${flags.amount} ${flags.origin} tokens to ${flags.to}`)

    const tokenkit = require('@runonbitcoin/tokenkit')

    const box = await tokenkit.ft.getJigBox(flags.origin)

    console.log('box', box)

    const tx = await token.send(flags.to, flags.amount)

    console.log(tx, 'tx result')

  }
}
