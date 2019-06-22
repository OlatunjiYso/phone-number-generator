import React from 'react';

import DisplayBox from './DisplayBox';
import Button from './Button';

function NumberFactory(props) {
  const { currentNumber, issueNumber, refresh } = props;
  return (
    <div className="number-factory">
      <DisplayBox content={currentNumber} />
      <div className="controls">
        <Button label="Generate" action={issueNumber}/>
        <Button label="Refresh" action={refresh}/>
      </div>
    </div>
  );
}

export default NumberFactory;
