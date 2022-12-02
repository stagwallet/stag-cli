
const homedir = require('os').homedir();

// @ts-ignore
import { Bip39 } from 'bsv-2'

// @ts-ignore
import { HDPrivateKey } from 'bsv';

interface LoadWalletOptions {
    configDirectory?: string;
}

const defaultOptions = {
    configDirectory: `${homedir}/.stag`
}

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path';

export async function loadWallet(options: LoadWalletOptions= {}) {

    const directory = options.configDirectory || defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    if (existsSync(directory)) {

        try {

            const config = JSON.parse(readFileSync(configFilePath, 'utf8'))

            if (!config.wallet) {

                console.error(`config file does not contain wallet`)

            } else {

                const { wallet: { seed, hdPrivateKey } } = config

                const bsvKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey
                const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey
                const runKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey
                const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

                return {
                    seed, hdPrivateKey, bsvKey, changeKey, runKey, cancelKey
                }
            }

        } catch(error) {

            console.error(`Invalid config file at ${configFilePath}`)

            return null
        }
    }

}

export async function importWalletFromSeed(mnemonic: string) {

    const directory = defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    if (!existsSync(directory)) {

        mkdirSync(directory)

    }

    if (existsSync(join(directory, 'config.json'))) {

        throw new Error('wallet already imported')
    }

    try {

        const hdPrivateKey = HDPrivateKey.fromSeed(Buffer.from(mnemonic, 'utf8'))

        const bsvKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey
        const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey
        const runKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey
        const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

        const json = {
            mnemonic,
            hdPrivateKey: hdPrivateKey.toString()
        }

        writeFileSync(join(directory, 'config.json'), JSON.stringify(json, null, 2))

        return {
            mnemonic, hdPrivateKey, bsvKey, changeKey, runKey, cancelKey
        }

    } catch(error: any) {

        console.error(`failed to import with error:`, error.message)

        return null
    }

}
