import type { Request, Response } from 'express'

import * as userService from '../services/user.service'


async function getUsers (req: Request, res: Response): Promise<Response> {
  const users: any = await userService.findAllUser()

  return res.json(users)
}


export {
  getUsers
}
