import Input from 'components/Input';
import { useEffect, useState } from 'react';
import queryString from 'query-string';

const Filters = ({ onSearch }) => {
  const [petFriendly, setPetFriendly] = useState(false);
  const [hasParking, setHasParking] = useState(false);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    onSearch({
      petFriendly,
      hasParking,
      minPrice,
      maxPrice,
    });
  };

  /**
   * queryString get all info from search url
   * and populate the fields.
   * This prevent when reload the page to loose
   * the values of the searching fields.
   */
  useEffect(() => {
    const {
      petFriendly: petFriendlyInitials,
      hasParking: hasParkingInitials,
      minPrice: minPriceInitials,
      maxPrice: maxPriceInitials,
    } = queryString.parse(window.location.search);
    setPetFriendly(petFriendlyInitials === 'true');
    setHasParking(hasParkingInitials === 'true');
    setMinPrice(minPriceInitials || '');
    setMaxPrice(maxPriceInitials || '');
  }, []);

  return (
    <div className="max-w-5xl mx-auto my-5 flex gap-5 border-solid border-slate-400 border-2 p-5 rounded-md items-center">
      <div className="flex-1">
        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={hasParking}
              onChange={() => setHasParking((value) => !value)}
            />
            <span className="pl-2">has parking</span>
          </label>
        </div>

        <div>
          <label className="cursor-pointer">
            <input
              type="checkbox"
              checked={petFriendly}
              onChange={() => setPetFriendly((value) => !value)}
            />
            <span className="pl-2">pet friendly</span>
          </label>
        </div>
      </div>

      <div className="flex-1">
        <span>Min Price</span>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>

      <div className="flex-1">
        <span>Max Price</span>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <div>
        <div className="btn" onClick={handleSearch}>
          Search
        </div>
      </div>
    </div>
  );
};

export default Filters;
