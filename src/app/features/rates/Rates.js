import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './ratesSlice';
import ValuteCard from './ValuteCard';

const Rates = () => {
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_CBR_URL;
  const valute = {
    USD: {name: 'usd'},
    RUB: {name: 'rub'}
  }
  console.log(rates);

  function refresh() {
    console.log('download');
    axios.get(url).then((response) => dispatch(update(response.data)));
    console.log(rates.Valute);
  }

  return (
    <div>
      <h1>Rates for { rates?.Date?.toLocaleDateString() }</h1>
      <button className="btn btn-primary" onClick={refresh}>Refresh</button>
      <div>{
          rates?.Valute?.map((valute, i) =>(
            <div key={i}>
              <ValuteCard props={valute}/>
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Rates;
