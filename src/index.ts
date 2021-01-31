import { application } from './application/application'
import { exit } from './application/exit'
import { appServer } from './application/AppServer'

export const main = async () => {
  const app = appServer(application)

  try {
    await app.start()
  } catch (err) {
    await app.stop()

    exit(err)
  }
}

process.on('SIGINT', () => {
  exit()
})
process.on('SIGTERM', () => {
  exit()
})
process.on('uncaughtException', (err) => {
  exit(err)
})
process.on('unhandledRejection', (err) => {
  exit(err as Error)
})

main()
  .catch(err => exit(err))
