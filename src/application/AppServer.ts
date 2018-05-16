import { Application } from 'express'
import { Server } from 'http'

import config from 'config'

type AppServer = {
  start: () => Promise<Server>
  stop: () => Promise<Server>
}

export const AppServer = (app: Application): AppServer => {
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
