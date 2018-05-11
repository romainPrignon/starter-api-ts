import express, { Application } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import router from './router'

const app: Application = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

export default app
