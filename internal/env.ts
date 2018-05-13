import raise from './raise'

const isValid = (env: string): boolean =>
  env === 'development' || env === 'production'

const getEnv = (): string | never => {
  const { NODE_ENV } = process.env

  if (!NODE_ENV) return raise('ERR_INTERNAL_NODE_ENV_UNDEFINED', 'env variable "NODE_ENV" is undefined')
  if (!isValid(NODE_ENV)) return raise('ERR_INTERNAL_NODE_ENV_NOT_VALID', 'env variable "NODE_ENV" is not valid')

  return NODE_ENV
}

export default getEnv()
