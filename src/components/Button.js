import React from 'react';


function Button(props) {
  const { label, action} = props;
  return (
    <button onClick={action}>
      {label}
    </button>
  );
}

export default Button;
