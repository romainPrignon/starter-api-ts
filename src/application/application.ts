import type { Application } from 'express'
import express from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'

import { router } from './router'
import { error } from '../middlewares/error.middleware'


const application: Application = express()

application.use(helmet())
application.use(compression())
application.use(bodyParser.json())
application.use(cors({ credentials: true, origin: config.get('CORS_ORIGIN') }))

application.use('/', router)

application.use(error)


export {
  application
}
