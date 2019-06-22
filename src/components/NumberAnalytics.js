import React from 'react';

import Button from './Button';

function NumberAnalytics(props) {
  const { existingNumbers, lowestNumber, highestNumber, sortInAscending, sortInDescending } = props;
  let highestNumberDisplayed = highestNumber !== 0 ? highestNumber : 'x x x x x x x x';
  let lowestNumberDisplayed = lowestNumber !== 9999999999 ? lowestNumber : 'x x x x x x x x';
  return (
    <div className="number-analytics">
      <div className="number-analytic">
        <span>Total numbers generated:</span>
        <span> {existingNumbers.length} </span>
      </div>
      <div className="number-analytic">
        <span>Max no generated:</span>
        <span className="spaced-numbers"> {highestNumberDisplayed} </span>
      </div>
      <div className="number-analytic">
        <span>Min no generated:</span>
        <span className="spaced-numbers"> {lowestNumberDisplayed} </span>
      </div>
      <div className="number-analytic">
        <Button label="sort in ascending" action={sortInAscending}/>
        <Button label="sort in descending" action={sortInDescending}/>
      </div>
    </div>
  );
}

export default NumberAnalytics;
