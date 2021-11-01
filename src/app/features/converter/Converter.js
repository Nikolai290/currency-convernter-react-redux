import axios from 'axios';
import React, { useEffect } from 'react';
import { convert } from './calcModul';
import { useSelector, useDispatch } from 'react-redux';
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
import { minWidth } from '@mui/system';

const Converter = () => {
  const rates = useSelector((state) => state.rates);
  const convertData = useSelector((state) => state.convertData);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_CBR_URL;

  function refresh() {
    axios.get(url).then((response) => dispatch(update(response.data)));
  }
  useEffect(() => {
    console.log(convertData);
  }, [onValueChangedHandler, onFromChangedHandler, onToChangedHandler]);

  useEffect(() => {
    if (!rates.Date) {
      console.log('refresh');
      console.log('convertData on load',convertData);
      refresh();
    }
  }, []);

  function onValueChangedHandler(e) {
    dispatch(updateValue({ ...convertData, value: e.target.value }));
  }

  function onFromChangedHandler(e) {
    dispatch(
      updateFrom({
        ...convertData,
        from: rates.Valute.filter((x) => x.NumCode == e.target.value)[0],
      })
    );
  }

  function onToChangedHandler(e) {
    dispatch(
      updateTo({
        ...convertData,
        to: rates.Valute.filter((x) => x.NumCode == e.target.value)[0],
      })
    );
  }

  function submitHandler(event) {
    dispatch(updateResult());
  }

  return (
    <div>
      <Typography variant="h3" color="initial">
        Converter
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(e);
        }}
      >
        <Box
          component="form"
          sc={{
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
