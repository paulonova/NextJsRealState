import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faCar, faDog } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';

function PropertyFeatures({
  hasParking,
  petFriendly,
  bedrooms,
  bathrooms,
  price,
}) {
  return (
    <div className="max-w-lg mx-auto my-10 bg-white text-slate-900 p-5 text-center">
      <div className="flex justify-between flex-wrap my-10 max-w-[70%] mx-auto">
        <div>
          <FontAwesomeIcon icon={faBed} /> {bedrooms} bedrooms
        </div>
        <div>
          <FontAwesomeIcon icon={faBath} /> {bathrooms} bathrooms
        </div>
        <div>
          {!!petFriendly && (
            <>
              <FontAwesomeIcon icon={faDog} /> pet friendly
            </>
          )}
        </div>
        <div>
          {!!hasParking && (
            <>
              <FontAwesomeIcon icon={faCar} /> parking available
            </>
          )}
        </div>
      </div>
      <h3 className="text-5xl font-extrabold">
        £{numeral(price).format('0,0')}
      </h3>
    </div>
  );
}

export default PropertyFeatures;
