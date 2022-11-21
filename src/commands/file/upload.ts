import {Command, Flags} from '@oclif/core'
const { BFile, publish, networks } = require('@runonbitcoin/easy-b') 

export default class UploadFile extends Command {
  static description = 'Upload b:// files to the blockchain'

  static examples = [
    `stag file upload --file /path/to/file.wav --name interview_with_her_snackness.wav`,
  ]

  static flags = {
    dryrun: Flags.string({char: 'd', description: 'Print transaction info but do not sign or transmit', required: false}),
    filepath: Flags.string({ char: 'f', description: 'Path to file that you will upload to blockchain', required: true }),
    name: Flags.string({ char: 'n', description: 'Name of file, defaults to name on the local file system', required: false }),
    contentType: Flags.string({ char: 'c', description: 'Name of file, defaults to name on the local file system', required: false }),
    key: Flags.string({ char: 'k', description: 'Private key for signing and funding', required: false})

  }

  static args = []

  async run(): Promise<void> {
    const {args, flags} = await this.parse(UploadFile)

    this.log('Upload file to blockchain using available funds.')

    var purse = process.env.stag_private_key

    if (!purse) {

      purse = flags.key

      if (!purse) {

        console.log("purse not found")
        console.log("use either stag_private_key environment variable or --key command line option")

        process.exit(1)

      }

    }

    const bFile = await BFile.fromFilePath(flags.filepath)
    const txid = await publish(bFile, networks.MAINNET, purse)
    console.log(txid)
  }
}
