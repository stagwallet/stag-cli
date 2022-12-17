import {Command, Flags} from '@oclif/core'
import { loadWallet } from '../../../wallet'

import axios from 'axios'

const tokenkit = require('@runonbitcoin/tokenkit')

const Run = require('run-sdk')

export default class GetRunFTBalance extends Command {
  static description = 'Get your balance of a fungible token'

  static examples = [
    `$ stag run ft balance \
        --origin=93f9f188f93f446f6b2d93b0ff7203f96473e39ad0f58eb02663896b53c4f020_o2`
  ]

  static flags = {
    name: Flags.string({ char: 'n', description: 'Name of wallet to use', required: true}),
    origin: Flags.string({ char: 'o', description: 'Origin of Token to Send', required: true}),
  }

  async run(): Promise<void> {

    const {flags} = await this.parse(GetRunFTBalance)

    const wallet = await loadWallet({ name: flags.name })

    if (!wallet) {
      throw new Error('Wallet not found. Please create a wallet first.')
    }

    const run = new Run({
      purse: wallet.bsvKey.toWIF(),
      owner: wallet.runKey.toWIF()
    })

    run.trust('*')

    const url = `https://staging-backend.relayx.com/api/user/balance2/${wallet.runKey.toAddress().toString()}`

    const { data } = await axios.get(url)

    console.log('data', data)

    this.log(`Send RUN FT ${flags.amount} ${flags.origin} tokens to ${flags.to}`)
  }
}
