import type { Server } from 'http'

export type AppServer = {
  start: () => Promise<Server>
  stop: () => Promise<Server>
}
