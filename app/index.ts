import { resolve } from 'path'

export const env = process.env.NODE_ENV === 'development' ? 'local' : 'prod'

//TODO: merge config andreturn
export const loadConfig = () => {
  const dot = require('dotenv').config()
  console.log(dot)
  require('dotenv').config({ path: resolve(process.cwd(), `.env.${env}`) })
}
