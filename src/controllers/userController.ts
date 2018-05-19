import { Request, Response, NextFunction } from 'express'

let users: Array<any> = []

export const getUsers = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  return res.json(users)
}
