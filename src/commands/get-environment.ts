import { Command, Flags } from '@oclif/core'
import { environments } from '../lib/environments'
import { promptForEnvironment } from '../utilities/dev/environment'
import { CliLogger } from '../utilities/logging'
import {} from '../utilities/'

export class GetEnvironment extends Command {
  private readonly logger: CliLogger = new CliLogger()
  static aliases = ['env']

  static flags = {
    env: Flags.string({ options: environments.map(x => x.name), char: 'e' }),
  }

  async run() {
    const { flags } = await this.parse(GetEnvironment)
    const environment = flags.env ?? (await promptForEnvironment())

    this.logger.info(`the stage is: ${environment}`)
  }
}
