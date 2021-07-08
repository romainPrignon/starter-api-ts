const users: ReadonlyArray<any> = []

async function findAllUser (): Promise<ReadonlyArray<any>> {
  return users
}


export {
  findAllUser
}
