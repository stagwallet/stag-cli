import {Command, Flags} from '@oclif/core'

export default class DeployRunCoin extends Command {
  static description = 'Deploy a new Run Fungible Token Coin contract'

  static examples = [
    `$ stag run ft deploy \
        --name='My Developer Token' \
        --description 'Use it to hire me and earn rewards' \
        --image=b://2373632532517983c948df2f32d89ec4a6c64ece1d71698c21b2ad027edfec60 \
        --symbol=DEV \
        --decimals=8 \
        --dryrun`,
  ]

  static flags = {
    name: Flags.string({char: 'n', description: 'Name of Token', required: true}),
    description: Flags.string({ char: 'd', description: 'Description of token', required: true}),
    image: Flags.string({char: 'i', description: 'b:// protocol image link', required: true}),
    symbol: Flags.string({char: 's', description: 'Symbol of Token', required: true}),
    decimals: Flags.string({char: 'p', description: 'Number of decimals', defaultValue: 8, required: false}),
    dryrun: Flags.string({char: 'r', description: 'Output signed transaction but do not broadcast', defaultValue: false, required: false})
  }

  static args = [{name: 'person', description: 'Person to say hello to', required: true}]

  async run(): Promise<void> {
    const {flags} = await this.parse(DeployRunCoin)

    this.log(`Deploy RUN FT ${flags.name} ${flags.symbol} ${flags.decimals} ${flags.image} ${flags.description}`)
  }
}
