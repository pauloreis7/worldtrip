import { createServer, Model } from 'miragejs'

import { continentsData } from './serverData'

export function makeServer() {
  return createServer({
    models: {
      continent: Model,
    },
  
    seeds(server) {
      server.db.loadData({
        continents: continentsData
      })
    }
  })
}