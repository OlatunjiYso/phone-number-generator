import React from 'react';

function DisplayBox(props) {
  const { content } = props;
  return (
    <div className="display-box">
      <h2> {content} </h2>
    </div>
  );
}

export default DisplayBox;
