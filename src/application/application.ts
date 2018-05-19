import express, { Application } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'

import { router } from './router'

export const application: Application = express()

application.use(helmet())
application.use(compression())
application.use(bodyParser.json())
application.use(cors())

application.use('/', router)
