import React from 'react';

export const convert = (from, to, value) => {
  return ((value * from.Value / from.Nominal) / (to.Value / to.Nominal )).toFixed(4);
}

const Converter = () => {



  return (
    <div>
      <h1>Converter</h1>

    </div>
  );
}

export default Converter;
