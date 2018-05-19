import { Router } from 'express'

import { will } from './middlewares'

import { getHealth } from '../controllers/healthController'
import { getUsers } from '../controllers/userController'

export const router: Router = Router()

router.get('/users', will(getUsers))
router.get('/health', will(getHealth))
