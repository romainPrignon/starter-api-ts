import * as userRepository from '../repositories/user.repository'


async function findAllUser (): Promise<ReadonlyArray<any>> {
  return userRepository.findAllUser()
}


export {
  findAllUser
}
