import type { NextFunction, Request, Response } from 'express'
import { logger } from '../application/logger'


function error (err: Error, req: Request, res: Response, next: NextFunction): Response {
  if (res.headersSent) {
    next(err)
  }

  logger.error(err)

  switch (true) {
    case err.name === 'ERR_NOT_FOUND': {
      return res.status(404).json({
        name: err.name,
        message: err.message
      })
    }
    case req.accepts('json') === 'json':
    default: {
      return res.status(500).json(err)
    }
  }
}


export {
  error
}
