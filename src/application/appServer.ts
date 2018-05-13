import { Application } from 'express'
import { Server } from 'http'
import { AppServer } from '../../type/index'

import config from '../../internal/config'

const appServer = (app: Application): AppServer => {
  let server: Server

  return {
    start: async () => {
      server = app.listen(config.PORT, () => {
        console.info(`listening on port ${config.PORT}`)
      })

      return server
    },
    stop: async () => {
      return server.close()
    }
  }
}
export default appServer
