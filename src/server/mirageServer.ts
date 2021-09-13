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
    },
  
    routes() {
      this.namespace = 'api',
  
      this.get('/continents/:id', (_, request) => {
        const continentId = request.params.id
    
        const continent = this.schema.find('continent', continentId)
    
        return continent
      })
    }
  })
}