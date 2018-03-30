import { Router } from 'express'

import { getHealth } from './healthController'

const healthRouter: Router = Router()

healthRouter.get('/health', getHealth)

export default healthRouter
