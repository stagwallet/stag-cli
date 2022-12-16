
const { boostpow } = require('stag-wallet')

const txid = '8cc652514a6eb43e2b9fe0a6ce507b8bf9692af5c8c601160034eb9f2be8fb0c'

const { Miner } = require('boostminer')

import delay from 'delay'

async function run() {

  while (true) {

    try {

      const result = await boostpow({
        content: txid,
        difficulty: 0.01,
        satoshis: 100000
      })

      console.log({ result })

      await delay(2500)

      const miner = new Miner({

        privatekey: process.env.stag_private_key

      })

      const miningResult = await miner.workJob(result.txid)

      console.log({ miningResult })

    } catch(error) {

      console.error('error', error)

    }

  }

}

run()

