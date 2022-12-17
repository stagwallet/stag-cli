import {CliUx, Command, Flags} from '@oclif/core'
import { loadWallet } from '../wallet'

import axios from 'axios'
import { BaseCommand } from '../baseCommand'

const tokenkit = require('@runonbitcoin/tokenkit')

const Run = require('run-sdk')

interface Row {
    origin: string;
    value: number;
    metadata: string;
}

export default class ListBalances extends BaseCommand<typeof ListBalances> {
  static description = 'List all your balances'

  static examples = [
    `$ stag balances --name midasmulligan@relayx.io`
  ]

  static flags = {
    ...CliUx.ux.table.flags(),
    name: Flags.string({ char: 'n', description: 'Name of wallet to use', required: false})
  }

  async run(): Promise<Row[]> {

    const {flags} = await this.parse(ListBalances)

    var wallet;

    if (flags.name) {    
        wallet = await loadWallet({ name: flags.name })
    } else {
        wallet = await loadWallet()
    }

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

    const balances = data.data.balances

    const rows = Object.keys(balances).map(key => {
        return {
            origin: key,
            value: balances[key],
            metadata: data.data.metadata[key]
        }
    })

    CliUx.ux.table(rows, {
        symbol: {        
            get: row => row.metadata.symbol,
        },
        name: {        
            get: row => row.metadata.name
        },
        value: {
            minWidth: 7,
        },
        origin: {
          minWidth: 7,
        },


      }, {
        printLine: this.log.bind(this),
        ...flags, // parsed flags
      })

      return rows
  }
}
