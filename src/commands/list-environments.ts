import { Command, Flags } from '@oclif/core'
import { environments } from '../lib/environments'
import { listEnvironments, promptForEnvironment } from '../utilities/dev/environment'
import { CliLogger } from '../utilities/logging'

export class GetEnvironment extends Command {
  private readonly logger: CliLogger = new CliLogger()
  static aliases = ['env']

  static flags = {
    env: Flags.string({ options: environments.map(x => x.name), char: 'e' }),
  }

  async run() {
    const { flags } = await this.parse(GetEnvironment)
    const environments = listEnvironments()

    this.logger.info('Possible environments:')

    for (const x of environments) {
      this.logger.info(`\t${x}`)
    }

    this.logger.info
  }
}
