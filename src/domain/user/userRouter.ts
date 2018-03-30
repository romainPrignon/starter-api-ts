import { Router } from 'express'

import { getUsers } from './userController'

const userRouter: Router = Router()

userRouter.get('/users', getUsers)

export default userRouter
