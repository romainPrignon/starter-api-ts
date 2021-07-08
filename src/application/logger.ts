import pino from 'pino'
import config from 'config'

export const logger = pino({ prettyPrint: config.get('LOGGER_PRETTY'), level: config.get('LOGGER_LEVEL') })
