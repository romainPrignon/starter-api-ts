import { hostname } from 'os'

const exit = (err?: Error): void => {
  if (err) {
    console.error(`${hostname()}: ERROR`)
    console.error(err)

    process.exit(1)
  } else {
    console.info(`${hostname()}: Exit properly`)

    process.exit(0)
  }
}

export default exit
