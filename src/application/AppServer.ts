import type { Server } from 'http'
import type { Application } from 'express'
import type { AppServer } from './AppServer.d'

import config from 'config'


const appServer = (app: Application): AppServer => {
  let server: Server

  return {
    start: async (): Promise<Server> => {
      server = app.listen(config.get('PORT'), () => {
        console.info(`listening on port ${config.get('PORT')}`)
      })

      return server
    },
    stop: async (): Promise<Server> => server.close()
  }
}


export {
  appServer
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class AppServerAsClass {
  #app: Application
  server?: Server

  constructor (app: Application) {
    this.#app = app
  }

  async start (): Promise<Server> {
    this.server = this.#app.listen(config.get('PORT'), () => {
      console.info(`listening on port ${config.get('PORT')}`)
    })

    return this.server
  }

  async stop (): Promise<Server> {
    if (!this.server) {
      throw new Error('Call "start" before "stop"')
    }

    return this.server.close()
  }
}
