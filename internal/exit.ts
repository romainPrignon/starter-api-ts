import { Server } from 'http'

import { hostname } from 'os'

const makeProcessExit = (server: Server) => ({
  processExitSuccess: () => {
    server.close(() => {
      console.info(`${hostname()}: Exit properly`)

      process.exit(0)
    })
  },
  processExitFailure: (err: Error) => {
    server.close(() => {
      console.error(`${hostname()}: Uncaught exception`)
      console.error(err)

      process.exit(1)
    })
  }
})

export default makeProcessExit
