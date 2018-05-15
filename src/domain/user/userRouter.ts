import { Router } from 'express'

import { will } from '../../application/middlewares'

import { getUsers } from './userController'

export const userRouter: Router = Router()

userRouter.get('/users', will(getUsers))
