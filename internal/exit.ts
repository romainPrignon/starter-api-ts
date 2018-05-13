import { Server } from 'http'

import { hostname } from 'os'

const makeProcessExit = (httpServer: Server) => ({
  processExitSuccess: () => {
    httpServer.close(() => {
      console.info(`${hostname()}: Exit properly`)

      process.exit(0)
    })
  },
  processExitFailure: (err: Error) => {
    httpServer.close(() => {
      console.error(`${hostname()}: Uncaught exception`)
      console.error(err)

      process.exit(1)
    })
  }
})

export default makeProcessExit
