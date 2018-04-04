import * as express from 'express'
import * as cors from 'cors'
import * as bodyParser from 'body-parser'

import router from './router'

const app: express.Application = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', router)

export default app
