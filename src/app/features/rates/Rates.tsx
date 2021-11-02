import axios from 'axios';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { update } from './ratesSlice';
import ValuteCard from './ValuteCard';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IRates from '../entities/Rates';

const Rates = () => {
  const rates: IRates = useAppSelector((state) => state.rates);
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_CBR_URL as string;

  useEffect(() => {
    if (rates.Date.getDate() !== new Date().getDate()) {
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
            <ValuteCard valute={valute} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
