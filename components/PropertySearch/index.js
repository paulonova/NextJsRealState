import { useEffect, useState } from 'react'
import { Results } from './Results'

const PropertySearch = () => {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    const search = async () => {
      const response = await fetch(`/api/search`)
      const data = await response.json()
      console.log('SEARCH DATA: ', data)
      setProperties(data.properties)
    }
    search()
  }, [])
  return (
    <div>
      <Results properties={properties} />
    </div>
  )
}

export default PropertySearch
