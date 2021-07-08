import { Router } from 'express'

import { validate, will } from './middlewares'

import { getHealth } from '../controllers/health.controller'
import { getUsers } from '../controllers/user.controller'

import { getDir, postDir } from '../controllers/dir.controller'
import { authorize } from '../middlewares/authorize.middleware'
import { getDirRequest } from '../schemas/getDir'
import { postDirRequest } from '../schemas/postDirRequest'

const router = Router()

router.get('/users', will(authorize), will(getUsers))
router.get('/health', will(getHealth))

// @ts-ignore
router.get('/dir', will(validate(getDirRequest)), will(getDir))
router.post('/dir', will(validate(postDirRequest)), will(postDir))

export {
  router
}
