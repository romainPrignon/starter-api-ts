import type { Request, Response } from 'express'
import { HttpInode, Inode } from 'src/entities/dir.entity'
import type { GetDirRequest, GetDirResponse } from '../schemas/getDir'

import * as dirService from '../services/dir.service'


async function getDir (req: GetDirRequest, res: GetDirResponse): Promise<GetDirResponse> {
  const { path } = req.query
  const inode = await dirService.findByPath(path)

  if (!inode) {
    const err = new Error('inode not found')
    // eslint-disable-next-line
    err.name = 'ERR_NOT_FOUND'
    throw err
  }

  return res.json(toHttp(inode))
}

async function postDir (req: Request, res: Response): Promise<Response> {
  // check path
  // const dirInfos = await dirService.findByPath(path)

  return res.json()
}

// for postDir
// function toEntity () {}

function toHttp (inode: Inode): HttpInode {
  return {
    ...inode,
    date: inode.date.toLocaleString()
  }
}

export {
  getDir,
  postDir
}
