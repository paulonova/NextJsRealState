import { useEffect, useState } from 'react';
import { Results } from './Results';
import { Pagination } from './Pagination';
import { useRouter } from 'next/router';
import queryString from 'query-string'
import Filters from './Filters';

const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    // This window location search will return as an object, 
    //this part och URL and any other query I may have, ex: ..url..?page=2&petFriendly=true
    const {page} = queryString.parse(window.location.search);  
    const response = await fetch(`/api/search`, {
      method: "POST",
      body: JSON.stringify(page || "1")
     });
    const data = await response.json();
    console.log('SEARCH DATA: ', data);
    setProperties(data.properties);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(`${router.query.slug.join("/")}?page=${pageNumber}`, null, {
      shallow: true,
    })
    search()
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <div>
      <Filters/>
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick}
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};

export default PropertySearch;
