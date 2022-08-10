import { environments } from '../../lib/environments'
const inquirer = require('inquirer');

export async function promptForEnvironment(): Promise<string> {
    
    let responses: any = await inquirer.prompt([{
        name: 'env',
        message: 'Select an environment',
        type: 'list',
        choices: environments,
      }])

    return responses.env
}

export function listEnvironments(): string[] {
  return environments.map(x => x.name)
}
