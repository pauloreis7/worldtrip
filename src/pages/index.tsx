import { useEffect } from 'react'

import { api } from '../services/api'
import { makeServer } from '../server/mirageServer'

makeServer()

export default function Home() {

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/continents/northAmerica-a5ec')

      console.log(response)
    }

   loadData()
  }, [])

  return (
    <h1>Hello World</h1>
  )
}
