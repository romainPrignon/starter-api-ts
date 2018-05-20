import { EnhancedError } from './raise.d'

export const raise = (code: string, message: string): never => {
  const err = new Error(message) as EnhancedError

  err.code = code

  throw err
}
