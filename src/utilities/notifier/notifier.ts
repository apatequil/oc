import * as notifier from 'node-notifier'

export class Notifier {
  async notify(message: string, title?: string) {
    notifier.notify({
      title: title ?? '',
      message: message,
    })
  }
}
