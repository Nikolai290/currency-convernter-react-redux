import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { update } from './ratesSlice';
import ValuteCard from './ValuteCard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Rates = () => {
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_CBR_URL;

  useEffect(() => {
    if (!rates.Date) {
      console.log('refresh');
      refresh();
    }
  }, []);

  function refresh() {
    axios.get(url).then((response) => dispatch(update(response.data)));
  }

  return (
    <div>
      <Typography variant="h3" color="initial">
        Rates for {rates?.Date?.toLocaleDateString()}
      </Typography>
      <Button variant="contained" onClick={refresh}>
        Refresh
      </Button>
      <div>
        {rates?.Valute?.map((valute, i) => (
          <div key={i}>
            <ValuteCard props={valute} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
