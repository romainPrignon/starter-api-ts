import { Request, Response } from 'express'

import { hostname } from 'os'

export const getHealth = (req: Request, res: Response): Response => {
  return res.send(`hello from ${hostname()} with ENV_BASED_VAR: ${process.env.ENV_BASED_VAR} !`)
}
