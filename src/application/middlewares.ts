import type { RequestHandler, Request, Response, NextFunction } from 'express'
import type { Runtype } from 'runtypes'

// TODO: infer
const will = (fn: RequestHandler): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next))
      .catch(next)


const validate = (schema: Runtype) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const validation = schema.validate(req)

    if (!validation.success) {
      return res
        .status(400)
        .json({
          error: validation.message
        })
    }

    return next()
  }

export {
  will,
  validate
}
