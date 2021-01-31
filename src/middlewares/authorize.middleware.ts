import type { NextFunction, Request, Response } from 'express'

async function getAccess (): Promise<boolean> {
  return true
}

async function authorize (req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    await getAccess()

    next()
  } catch (err) {
    res
      .status(401)
      .send()
  }
}


export {
  authorize
}
