import { loadConfig } from '../internal/config'
import makeProcessExit from '../internal/exit'

import app from './application/app'
import appServer from './application/server'

loadConfig()
const server = appServer(app)

const main = async () => {
  const httpServer = await server.start()
  const { processExitSuccess, processExitFailure } = makeProcessExit(httpServer)

  process.on('SIGINT', () => {
    processExitSuccess()
  })
  process.on('SIGTERM', () => {
    processExitSuccess()
  })
  process.on('uncaughtException', (err) => {
    processExitFailure(err)
  })
  process.on('unhandledRejection', (err) => {
    processExitFailure(err)
  })
}

main()
  .catch((err) => {
    console.error('Panic !')
    console.error(err)
  }
)
