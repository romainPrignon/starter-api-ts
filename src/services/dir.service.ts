import type { LinuxPath, Optional } from '../../type'
import type { Inode } from '../entities/dir.entity'

import * as dirRepository from '../repositories/dir.repository'


async function findByPath (path: LinuxPath): Promise<Optional<Inode>> {
  return dirRepository.findByPath(path)
}

// async function findByString (str: string): Promise<string> {
//   const res = await dirRepository.findByPath(LinuxPath(str))
//   return res
// }


export {
  findByPath
}
