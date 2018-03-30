import { resolve } from 'path'
import { env } from './env'

export const loadConfig = () => {
  const config = require('dotenv').config()
  const envConfig = require('dotenv').config({ path: resolve(process.cwd(), `.env.${env}`) })

  return {
    ...config.parsed,
    ...envConfig.parsed
  }
}
