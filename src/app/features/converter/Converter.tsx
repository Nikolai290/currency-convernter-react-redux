import axios from 'axios';
import React, { useEffect } from 'react';
import {
  updateFrom,
  updateTo,
  updateValue,
  updateResult,
} from './converterSlice';
import { update } from '../rates/ratesSlice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box';
import ValuteSelect from './ValuteSelect';
import TextField from '@mui/material/TextField/TextField';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import IRates from '../entities/Rates';
import IConvertData from '../entities/ConverterData';

const Converter = () => {
  const rates: IRates = useAppSelector((state) => state.rates);
  const convertData: IConvertData = useAppSelector(
    (state) => state.convertData
  );
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_CBR_URL as string;

  function refresh() {
    axios.get(url).then((response) => dispatch(update(response.data)));
  }

  useEffect(() => {
    if (rates.Date.getDate() !== new Date().getDate()) {
      refresh();
    }
  }, []);

  function onValueChangedHandler(e: {
    target: { value: string | number };
  }): void {
    dispatch(updateValue(+e.target.value));
  }

  function onFromChangedHandler(e: {
    target: { value: string | number };
  }): void {
    dispatch(
      updateFrom(
        rates.Valute.filter(
          (x: { NumCode: string | number }) => x.NumCode === e.target.value
        )[0]
      )
    );
  }

  function onToChangedHandler(e: { target: { value: string | number } }): void {
    dispatch(
      updateTo(
        rates.Valute.filter(
          (x: { NumCode: string | number }) => x.NumCode === e.target.value
        )[0]
      )
    );
  }

  function submitHandler(event: any): void {
    event.preventDefault();
    dispatch(updateResult());
  }

  return (
    <div>
      <Typography variant="h3" color="initial">
        Converter
      </Typography>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <Card
              variant="outlined"
              sx={{
                display: 'inline-block',
                mx: '2px',
                marginRight: '20px',
                minWidth: 200,
                padding: 1,
              }}
            >
              <Typography variant="body1" color="initial">
                Из
              </Typography>
              <ValuteSelect
                valutes={rates.Valute}
                onChangeHandler={onFromChangedHandler}
                value={convertData?.from}
              />
              <TextField
                id="Value"
                label="Value"
                value={convertData?.value}
                onChange={onValueChangedHandler}
                margin="normal"
                type="number"
              />
            </Card>
            <Card
              variant="outlined"
              sx={{
                display: 'inline-block',
                mx: '2px',
                minWidth: 200,
                padding: 1,
              }}
            >
              <Typography variant="body1" color="initial">
                В
              </Typography>
              <ValuteSelect
                valutes={rates.Valute}
                onChangeHandler={onToChangedHandler}
                value={convertData?.to}
              />
              <TextField
                id="Result"
                label="Result"
                value={convertData?.result}
                onChange={onValueChangedHandler}
                margin="normal"
                type="number"
                disabled
              />
            </Card>
          </div>
        </Box>
        <Button variant="contained" color="primary" type={'submit'}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Converter;
