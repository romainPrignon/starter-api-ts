import { Server } from 'http'
import { Application } from 'express'
import { AppServer } from './AppServer.d'

import config from 'config'

export const appServer = (app: Application): AppServer => {
  let server: Server

  return {
    start: async (): Promise<Server> => {
      server = app.listen(config.get('PORT'), () => {
        console.info(`listening on port ${config.get('PORT')}`)
      })

      return server
    },
    stop: async (): Promise<Server> => {
      return server.close()
    }
  }
}
