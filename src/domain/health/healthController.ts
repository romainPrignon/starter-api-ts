import { Request, Response } from 'express'

import { hostname } from 'os'

import config from 'config'

export const getHealth = (req: Request, res: Response): Response => {
  return res.send(`hello from ${hostname()} with
    OVERRIDE_BY_ENV: ${config.get('OVERRIDE_BY_ENV')}
    SECRET_VAR: ${config.get('SECRET_VAR')}
  `)
}
