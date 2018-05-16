import { app } from './application/app'
import { exit } from './application/exit'
import { AppServer } from './application/AppServer'

const main = async () => {
  const appServer = AppServer(app)

  try {
    await appServer.start()
  } catch (err) {
    await appServer.stop()

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
  exit(err)
})

main()
  .catch(err => exit(err))
