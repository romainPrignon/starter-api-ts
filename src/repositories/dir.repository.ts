import type { LinuxPath, Optional } from '../../type' // use Optional from @romainprignon/utils
import type { Inode } from '../entities/dir.entity'

import childProcess from 'child_process'
import { promises as fs } from 'fs'
import path from 'path'
import util from 'util'


const exec = util.promisify(childProcess.exec)

async function findByPath (linuxPath: LinuxPath): Promise<Optional<Inode>> {
  // todo: use an effect layers
  try {
    const stat = await fs.stat(linuxPath)
    const { stdout: user } = await exec(`id -un ${stat.uid}`)
    const { stdout: group } = await exec(`id -gn ${stat.gid}`)

    return toEntity(
      stat.mode,
      user, group,
      stat.birthtime,
      linuxPath
    )
  } catch {
    return undefined
  }
}

// TODO: find best practise
function toEntity (permission: number, owner: string, group: string, date: Date, linuxPath: LinuxPath): Inode {
  return {
    permission: (permission & 0o777).toString(8),
    owner: owner,
    group: group,
    date: date,
    label: path.basename(linuxPath)
  }
}

export {
  findByPath
}
