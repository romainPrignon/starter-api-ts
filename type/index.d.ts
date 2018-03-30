import {Server} from 'http'

export type ExpressServer = {
  start: () => Promise<Server>
  stop: () => Promise<Server>
}
