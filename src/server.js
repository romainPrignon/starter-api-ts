require('dotenv').config()

const express = require('express')
const os = require('os');

const app = express()

app.get('/', (req, res) => {
  console.info(req.url)

  res.send(`hello from ${os.hostname()} !`)
})

app.get('/err', (req, res) => {
  const err = new Error('there was an error')
  console.error(err)

  res.send(500, err.message)
})

const server = app.listen(process.env.PORT, () => {
  console.info(`listening on port ${process.env.PORT}`)
})

const exitSuccess = () => {
  // server.close() // make it awaitable !
  console.info(`Exit ${os.hostname()} successfully`)
  process.exit(0);
}

const exitFailure = (err) => {
    console.error(`UncaughtException on ${os.hostname()}`)
    console.error(err.stack)
    process.exit(1)
}

process.on('SIGTERM', () => {
    exitSuccess()
})
process.on('uncaughtException', (err) => {
    exitFailure(err)
})
process.on('unhandledRejection', (err) => {
    exitFailure(err)
})
