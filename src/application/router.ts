import { Router } from 'express'

import { userRouter } from '../domain/user/userRouter'
import { healthRouter } from '../domain/health/healthRouter'

export const router: Router = Router()

router.use(userRouter)
router.use(healthRouter)
