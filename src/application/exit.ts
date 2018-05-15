export const exit = (err?: Error): void => {
  if (err) {
    console.error(err)

    process.exit(1)
  } else {
    console.info(`Exit properly`)

    process.exit(0)
  }
}
