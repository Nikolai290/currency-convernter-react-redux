import React from 'react';

const ValuteCard = (props) => {
  const {ID, NumCode, CharCode, Nominal, Name, Value, Previous} = props.props
  return (
    <div>
      {CharCode}: {Value} руб = {Nominal} {Name}
    </div>
  );
}

export default ValuteCard;
