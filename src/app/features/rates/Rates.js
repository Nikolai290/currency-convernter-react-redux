import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './ratesSlice';

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
  }

  return (
    <div>
      <h1>rates for {rates?.Date?.toLocaleString()}</h1>
      <button onClick={refresh}>refresh</button>
      <div>{
          rates?.Valute?.map((valute, i) =>(
            <div key={i}>
              {valute.CharCode} - {valute.Value} = {valute.Nominal} руб
            </div>
          ))
        }

      </div>
    </div>
  );
};

export default Rates;
