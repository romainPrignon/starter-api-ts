import { resolve } from 'path'
const env = process.env.NODE_ENV === 'development' ? 'local' : 'prod'

require('dotenv').config()
require('dotenv').config({ path: resolve(process.cwd(), `.env.${env}`) })

import * as express from 'express'
import { hostname } from 'os'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
  console.info(req.url)

  res.send(`hello from ${hostname()} with ENV_BASED_VAR: ${process.env.ENV_BASED_VAR} !`)
})

app.get('/err', (req, res) => {
  const err = new Error('there was an error')
  console.error(err)

  res.status(500).send(err.message)
})

const server = app.listen(process.env.PORT, () => {
  console.info(`listening on port ${process.env.PORT}`)
})

const exitSuccess = () => {
  server.close() // make it awaitable !
  console.info(`Exit ${hostname()} successfully`)
  process.exit(0)
}

const exitFailure = (err: Error) => {
  console.error(`UncaughtException on ${hostname()}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('SIGTERM', () => {
  exitSuccess()
})
process.on('uncaughtException', (err) => {
  exitFailure(err)
})
process.on('unhandledRejection', (err) => {
  exitFailure(err)
})
