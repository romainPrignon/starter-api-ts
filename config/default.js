module.exports = {
  PORT: 4000,
  CORS_ORIGIN: '*',
  LOGGER_PRETTY: true,
  LOGGER_LEVEL: 50, // error

  ALWAYS_THE_SAME: 'alwaysTheSame',
  OVERRIDE_BY_ENV: 'default',
  SECRET_VAR: process.env.SECRET_VAR
}
