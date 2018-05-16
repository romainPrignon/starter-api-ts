import { Request, Response, NextFunction } from 'express'

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return res.send(`getUsers`)
}
