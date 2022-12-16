import {Command, Flags} from '@oclif/core'

const bsv = require('bsv')

const { fromBackupSeedPhrase } = require('stag-wallet')

const axios = require('axios')

interface TokenBalancesResponse {
  balances: any;
  metadata: any;
}

async function listTokenBalances(address: string): Promise<TokenBalancesResponse> {

  const url = `https://staging-backend.relayx.com/api/user/balance2/${address}`

  const response = await axios.get(url)

  return response.data.data

}

export default class RunBalances extends Command {
  static description = 'List balances of RUN fungible tokens'

  static examples = [
    `stag run balances`
  ]

  static flags = {

    seed: Flags.string({
      char: 's',
      description: 'Import recovery seed phrase instead of generating new keys',
      required: true
    })

  }

  static args = []

  async run(): Promise<void> {

    const {args, flags} = await this.parse(RunBalances)

    const wallet = fromBackupSeedPhrase(flags.seed)

    const hdkey = bsv.HDPrivateKey.fromString(wallet.cards[0].hdprivatekey)

    const runAddress = hdkey.deriveChild(`m/44'/236'/0'/2/0`).privateKey.toAddress().toString()

    const bsvKey     = hdkey.deriveChild(`m/44'/236'/0'/0/0`).privateKey

    const changeKey  = hdkey.deriveChild(`m/44'/236'/0'/1/0`).privateKey

    const runKey     = hdkey.deriveChild(`m/44'/236'/0'/2/0`).privateKey

    const cancelKey  = hdkey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

    const paymailKey = hdkey.deriveChild(`m/0'/236'/0'/0/0`).privateKey

    const tokenBalances = await listTokenBalances(runAddress)

    console.log(tokenBalances)

  }
}
