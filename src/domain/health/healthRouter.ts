import { Router } from 'express'

import { getHealth } from './healthController'

export const healthRouter: Router = Router()

healthRouter.get('/health', getHealth)
