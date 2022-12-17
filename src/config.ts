
const homedir = require('os').homedir();


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

interface LoadConfigOptions {
    configDirectory?: string;
}


export async function loadConfig(options: LoadConfigOptions={}) {

    const directory = options.configDirectory || defaultOptions.configDirectory

    const configFilePath = `${directory}/config.json`    

    if (existsSync(directory)) {

        try {

            const config = JSON.parse(readFileSync(configFilePath, 'utf8'))

            return config

        } catch(error) {

            console.error(error)

            console.error(`Invalid config file at ${configFilePath}`)

            return null
        }
    } else {

        const config = {
            wallets: [],
            current_wallet_name: null
        }
           
        writeFileSync(configFilePath, JSON.stringify(config, null, 2))

        return config
        
    }
}