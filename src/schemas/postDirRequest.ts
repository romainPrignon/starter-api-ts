import { Record, Static } from 'runtypes'


const postDirRequest = Record({}).asReadonly()

type PostDirRequest = Static<typeof postDirRequest>


export {
  PostDirRequest,
  postDirRequest
}
