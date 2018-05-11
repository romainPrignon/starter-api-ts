import { Application } from 'express'
import { Server } from 'http'
import { AppServer } from '../../type/index'

const appServer = (app: Application): AppServer => {
  let server: Server

  return {
    start: async () => {
      server = app.listen(process.env.PORT, () => {
        console.info(`listening on port ${process.env.PORT}`)
      })

      return server
    },
    stop: async () => {
      return server.close()
    }
  }
}
export default appServer
