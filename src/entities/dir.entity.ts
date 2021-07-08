type Inode = {
  permission: string
  owner: string
  group: string
  date: Date
  label: string
}

type HttpInode = {
  permission: string
  owner: string
  group: string
  date: string
  label: string
}

export type {
  Inode,
  HttpInode
}
