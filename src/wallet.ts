
const homedir = require('os').homedir();

// @ts-ignore
import { Bip39, Bip32 } from 'bsv-2'

// @ts-ignore
import { HDPrivateKey } from 'bsv';

interface LoadWalletOptions {
    configDirectory?: string;
    name?: string;
}

const defaultOptions = {
    configDirectory: `${homedir}/.stag`
}

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'

import { join } from 'path';

interface StagConfigJsonWallet {
    name: string;
    seed: string;
    hdPrivateKey: string;
    paymail?: string;
    receiveAddress?: string;
    changeAddress?: string;
    runAddress?: string;
}

interface StagConfigJson {
    wallets: StagConfigJsonWallet[];
    current_wallet_name: string;
}

export async function loadWallet(options: LoadWalletOptions={}) {

    const directory = options.configDirectory || defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    var name = options.name

    if (existsSync(directory)) {

        try {

            const config = JSON.parse(readFileSync(configFilePath, 'utf8'))

            if (!name) {

                if (!config.current_wallet_name) {

                    throw new Error(`No wallet selected`)

                } else {

                    name = config.current_wallet_name
                }

            }

            if (!config.wallets) {

                console.error(`config file does not contain wallets`)

            } else {

                const wallet: any = config.wallets.filter((wallet: any) => wallet.name === options.name)[0]

                if (!wallet) {
                    throw new Error(`Wallet ${options.name} not found`)
                }

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

export async function importWalletFromSeed({mnemonic, name }: {mnemonic: string, name: string}) {

    const directory = defaultOptions.configDirectory

    if (!existsSync(directory)) {

        mkdirSync(directory)

    }

    var config: StagConfigJson | null = null;

    const configFilePath = join(directory, 'config.json')


    if (existsSync(configFilePath)) {

        config = JSON.parse(readFileSync(configFilePath, 'utf8'))

        if (config && config.wallets.filter((wallet: StagConfigJsonWallet) => wallet.name === name).length > 0) {
                
                throw new Error(`Error wallet already exists with name ${name}`)
        }
    }

    try {


    const seed = Bip39.fromString(mnemonic).toSeed().toString('hex')

    const hdPrivateKey = HDPrivateKey.fromSeed(seed)

    return createWallet({hdPrivateKey,name, mnemonic})

    } catch(error: any) {

        console.error(`failed to import with error:`, error.message)

        return null
    }

}

export async function createWallet({ mnemonic, hdPrivateKey, name }: { hdPrivateKey: any, name: string, mnemonic: string }): Promise<StagConfigJson> {

    const directory = defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`

    if (!existsSync(directory)) {

        mkdirSync(directory)

    }

    var config: StagConfigJson | null = null;

    if (existsSync(join(directory, 'config.json'))) {

        config = JSON.parse(readFileSync(configFilePath, 'utf8'))

        if (config && config.wallets.filter((wallet: StagConfigJsonWallet) => wallet.name === name).length > 0) {
                
                throw new Error(`Error wallet already exists with name ${name}`)
        }

    }

    const bsvKey    = hdPrivateKey.deriveChild(`m/44'/236'/0'/0/0`).privateKey
    const changeKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/1/0`).privateKey
    const runKey    = hdPrivateKey.deriveChild(`m/44'/236'/0'/2/0`).privateKey
    const cancelKey = hdPrivateKey.deriveChild(`m/44'/236'/0'/3/0`).privateKey

    if (config === null) {

        config = {
            wallets: [],
            current_wallet_name: name
        }
    }

    config.wallets.push({

        name,

        seed: mnemonic,

        hdPrivateKey: hdPrivateKey.toString(),

        receiveAddress: bsvKey.toAddress().toString(),
    
        changeAddress: changeKey.toAddress().toString(),
    
        runAddress: runKey.toAddress().toString()
    
    })

    writeFileSync(configFilePath, JSON.stringify(config, null, 2))

    return config

}
