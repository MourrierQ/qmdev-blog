import React from 'react';

export default ({ placeholder, name, type }) => {
  return (
    <div>
      <label htmlFor="">
        {name}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={{ marginBottom: '5px' }}
      />
    </div>
  );
};
