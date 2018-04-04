import { Request, Response, NextFunction } from 'express'

import { will } from '../../application/middlewares'

export const getUsers = will(async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  console.log('getUsers')

  return res.send(`getUsers`)
})
