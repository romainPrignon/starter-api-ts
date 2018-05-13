export type CodeError = {code: string}
export type EnhancedError = Error & CodeError

const raise = (code: string, message: string): never => {
  const err = new Error(message) as EnhancedError

  err.code = code

  throw err
}

export default raise
