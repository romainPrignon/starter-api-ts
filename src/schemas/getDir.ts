import type { Response } from 'express'

import { Record, Static, String } from 'runtypes'
import { HttpInode } from 'src/entities/dir.entity'


type MainstreamPath = `/${string}`
const isMainstream = (path: string): path is MainstreamPath => /^(\/[a-zA-Z0-9_-]*)*$/.test(path)

const mainstreamPath = {
  ...String.withGuard((val): val is MainstreamPath => isMainstream(val)),
  name: 'MainstreamPath',
  tag: 'mainstreamPath'
}

const getDirRequest = Record({
  query: Record({
    path: mainstreamPath // TODO: use @romainprignon/utils
  })
}).asReadonly()

type GetDirRequest = Static<typeof getDirRequest>
type GetDirResponse<T = Response<HttpInode>> = {
  json: (body: HttpInode) => T
}


export {
  GetDirRequest,
  getDirRequest,
  GetDirResponse
}
