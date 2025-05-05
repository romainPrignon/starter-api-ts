const exit = (err?: Error): void => {
  if (err) {
    process.exit(1)
  } else {
    process.exit(0)
  }
}


export {
  exit
}
