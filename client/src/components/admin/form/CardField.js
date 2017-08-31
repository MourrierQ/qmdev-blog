import React from 'react';

export default ({ input, name }) => {
  return (
    <div>
      <label htmlFor="">
        {name}
      </label>
      <input {...input} style={{ marginBottom: '5px' }} />
    </div>
  );
};
