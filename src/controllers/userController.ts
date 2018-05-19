import { Request, Response, NextFunction } from 'express'

import { findAllUser } from '../repositories/userRepository'

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const users: any = await findAllUser()

  return res.json(users)
}
