import chalk from 'chalk'

export class CliLogger {
  warn(message: string): void {
    console.warn(chalk.yellow(message))
  }

  error(message: string): void {
    console.error(chalk.red(message))
  }

  info(message: string): void {
    console.info(chalk.blue(message))
  }
}
