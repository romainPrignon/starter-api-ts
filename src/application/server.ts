import { Application } from 'express'
import { Server } from 'http'
import { ExpressServer } from '../../type/index'

const expressServer = (app: Application): ExpressServer => {
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
export default expressServer
