import React from 'react';


import NumberAnalytics from './NumberAnalytics';

function ListingSection(props) {
  const { existingNumbers, lowestNumber, highestNumber, sortInAscending, sortInDescending } = props;
  const displayedNumbers = existingNumbers.map((number, index) => (
    <h3 key={index} className="phone-number"> {number} </h3>
  ))
  return (
    <div className="listing-section">
      <div className="number-analytics">
        <NumberAnalytics 
        existingNumbers={existingNumbers}
        lowestNumber={lowestNumber}
        highestNumber={highestNumber}
        sortInAscending={sortInAscending}
        sortInDescending={sortInDescending}
        />
      </div>
      <div >
        {displayedNumbers}
      </div>
    </div>
  );
}

export default ListingSection;
