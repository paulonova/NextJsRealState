import { useEffect, useState } from 'react';
import { Results } from './Results';
import { Pagination } from './Pagination';
import { useRouter } from 'next/router';
import queryString from 'query-string';
import Filters from './Filters';

const PropertySearch = () => {
  const [properties, setProperties] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const pageSize = 3;
  const router = useRouter();

  const search = async () => {
    const { page, minPrice, maxPrice, hasParking, petFriendly } =
      queryString.parse(window.location.search);

    const filters = {};
    if (minPrice) {
      filters.minPrice = parseInt(minPrice);
    }
    if (maxPrice) {
      filters.maxPrice = parseInt(maxPrice);
    }
    if (hasParking === 'true') {
      filters.hasParking = true;
    }
    if (petFriendly === 'true') {
      filters.petFriendly = true;
    }

    const response = await fetch(`/api/search`, {
      method: 'POST',
      body: JSON.stringify({
        page: parseInt(page || '1'),
        ...filters,
      }),
    });
    const data = await response.json();
    console.log('SEARCH DATA: ', data);
    setProperties(data.properties);
    setTotalResults(data.total);
  };

  const handlePageClick = async (pageNumber) => {
    await router.push(
      `${router.query.slug.join('/')}?page=${pageNumber}`,
      null,
      {
        shallow: true,
      }
    );
    search();
  };

  useEffect(() => {
    search();
  }, []);

  const handleSearch = async ({
    petFriendly,
    hasParking,
    minPrice,
    maxPrice,
  }) => {
    /*
    Update out browser url
    */
    await router.push(
      `${router.query.slug.join(
        '/'
      )}?page=1&petFriendly=${!!petFriendly}&hasParking=${hasParking}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      null,
      {
        shallow: true,
      }
    );
    console.log('FILTERS: ', petFriendly, hasParking, minPrice, maxPrice);
    search();
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      <Results properties={properties} />
      <Pagination
        onPageClick={handlePageClick} // Callback function
        totalPages={Math.ceil(totalResults / pageSize)}
      />
    </div>
  );
};

export default PropertySearch;
