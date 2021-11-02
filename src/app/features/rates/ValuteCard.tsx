import * as React from 'react';
import IValute from '../entities/Valute';

export interface IValuteCardProps {
  valute: IValute
}

const ValuteCard = (props: IValuteCardProps) => {
  const { valute } = props;
  return (
    <div>
      {valute.CharCode}: {valute.Value} руб = {valute.Nominal} {valute.Name}
    </div>
  );
};

export default ValuteCard;
