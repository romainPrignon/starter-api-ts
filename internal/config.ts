import fs from 'fs'
import { resolve } from 'path'

import env from './env'
import raise from './raise'

type Config = {
  [key: string]: any
}

// TODO: relative path to project root
// TODO: validate defaultConfig & envConfig against a schema
const getConfig = (): Config => {
  const defaultConfigPath = `../config/default`
  const envConfigPath = `../config/${env}`

  const defaultConfig = require('../config/default')
  const envConfig = require(`../config/${env}`)

  return {
    ...defaultConfig.default,
    ...envConfig.default
  }
}

export default getConfig()
