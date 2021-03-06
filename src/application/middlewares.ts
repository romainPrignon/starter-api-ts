import { RequestHandler, Request, Response, NextFunction } from 'express'

export const will = (fn: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next))
      .catch(next)
