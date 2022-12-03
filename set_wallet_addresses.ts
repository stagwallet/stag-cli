require('dotenv').config()

const { onchain, fromBackupSeedPhrase } = require("stag-wallet")

const { Bip39 } = require('bsv-2')

const { HDPrivateKey } = require('bsv')

const polynym = require('polynym');

async function main() {

  const mnemonic = process.env.relayx_backup_seed_phrase

  const wallet = fromBackupSeedPhrase(mnemonic)

  const seed = Bip39.fromString(mnemonic).toSeed().toString('hex')

  console.log('seed', seed)

  const hdPrivateKey = HDPrivateKey.fromSeed(seed)

  console.log('hdPrivateKey', hdPrivateKey)

  const bsvKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey

  const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey

  const runKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey

  const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

  const paymailKey = hdPrivateKey.deriveChild(`m/0'/236'/0'/0/0`).privateKey

  const change = changeKey.toAddress().toString()
  const receive = bsvKey.toAddress().toString()
  const run = runKey.toAddress().toString()
  const author = paymailKey.toAddress().toString()
  const paymail = paymailKey.publicKey.toString()

  console.log('wallet', wallet)

  console.log('privatekey', bsvKey.toWIF())


  const [result, isNew] = await onchain.findOrCreate({

    where: {

      app: 'alpha.stagwallet.io',

      type: 'set_wallet_addresses',

      author

    },

    defaults: {

      app: 'alpha.stagwallet.io',

      key: 'set_wallet_addresses',

      val: {

        receive,

        change,

        run,

        author,

        paymail

      },

      author

    }

  })

  console.log(result, isNew)


}

main()

