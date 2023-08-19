import { useEffect } from 'react'
import { Results } from './Results'

const PropertySearch = () => {
  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`)
      const data = await response.json()
      console.log('SEARCH DATA: ', data)
    }
    search()
  }, [])
  return (
    <div>
      <Results />
    </div>
  )
}

export default PropertySearch
