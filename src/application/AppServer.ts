import { Application } from 'express'
import { Server } from 'http'
import { AppServer } from '../../type/index'

import config from '../../internal/config'

const AppServer = (app: Application): AppServer => {
  let server: Server

  return {
    start: async (): Promise<Server> => {
      server = app.listen(config.PORT, () => {
        console.info(`listening on port ${config.PORT}`)
      })

      return server
    },
    stop: async (): Promise<Server> => {
      return server.close()
    }
  }
}
export default AppServer
