import { Router } from 'express'

import userRouter from '../domain/user/userRouter'
import healthRouter from '../domain/health/healthRouter'

const router: Router = Router()

router.use(userRouter)
router.use(healthRouter)

export default router
