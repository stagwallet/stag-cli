
import {Command, Flags, Interfaces} from '@oclif/core'

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<typeof BaseCommand['globalFlags'] & T['flags']>

export abstract class BaseCommand<T extends typeof Command> extends Command {
  // add the --json flag
  static enableJsonFlag = true

  // define flags that can be inherited by any command that extends BaseCommand
  static globalFlags = {
    'seed': Flags.string({
        char: 's',
        description: 'Mnemoic Backup Seed Phrase For Wallet.',
        summary: 'Mnemoic Backup Seed Phrase For Wallet.',
        helpGroup: 'GLOBAL',
        required: false
    }),
    privatekey: Flags.string({
        char: 'k',
        description: 'Private Key for Signing and Funds',
        required: false
    }),

  }

  protected flags!: Flags<T>

  public async init(): Promise<void> {
    await super.init()
    const {flags} = await this.parse(this.constructor as Interfaces.Command.Class)
    this.flags = flags
  }

  protected async catch(err: Error & {exitCode?: number}): Promise<any> {
    // add any custom logic to handle errors from the command
    // or simply return the parent class error handling
    return super.catch(err)
  }

  protected async finally(_: Error | undefined): Promise<any> {
    // called after run and catch regardless of whether or not the command errored
    return super.finally(_)
  }
}
