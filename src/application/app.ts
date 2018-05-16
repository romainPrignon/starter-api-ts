import express, { Application } from 'express'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'

import { router } from './router'

export const app: Application = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(cors())

app.use('/', router)
