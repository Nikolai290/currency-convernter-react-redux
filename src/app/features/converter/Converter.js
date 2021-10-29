import axios from 'axios';
import React, {useEffect} from 'react';
import { convert } from './calcModul';
import { useSelector, useDispatch } from 'react-redux';
import {updateFrom, updateTo, updateValue} from './converterSlice'
import { update } from '../rates/ratesSlice';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box/Box'
import ValuteSelect from './ValuteSelect';
import TextField from '@mui/material/TextField/TextField'

const Converter = () => {
  const rates = useSelector((state) => state.rates);
  const convertData = useSelector((state) => state.convertData);
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_CBR_URL;

  function refresh() {
    axios.get(url).then((response) => dispatch(update(response.data)));
  }
  useEffect(() => {
    refresh()
  }, []);

  function handler (e){
    console.log(e.target.value);
  }

  function onValueChangedHandler(e){
    dispatch(updateValue({...convertData, value: e.target.value}))
  }

  function onFromChangedHandler(e){
    dispatch(updateFrom({...convertData, 
      from: rates.filter(x => x.NumCode == e)
    }))
  }

  function onToChangedHandler(e){
    dispatch(updateTo({...convertData, 
      from: rates.filter(x => x.NumCode == e)
    }))
  }

  function submitHandler(event) {
    event.PreventDefault();
  }

  return (
    <div>
      <Typography variant="h3" color="initial">
        Converter
      </Typography>
      <form onSubmit={submitHandler}>
        <Box
          component='form'
          sc={{
            '& .MuiTextField-root': {m:1, width: '25ch'}
          }}
          noValidate
          autoComplete='off'
        >
          <div>
            <TextField
                id="Value"
                label="Value"
                value={""}
                onChange={handler}
                margin="normal"
                type="number"
            />
            <ValuteSelect valutes={rates.Valute} onChangeHandler={handler}/>
            <ValuteSelect valutes={rates.Valute} onChangeHandler={handler}/>
            <TextField
                id="Value"
                label="Value"
                value={""}
                onChange={() => {}}
                margin="normal"
                type="number"
                disabled
            />


          </div>

        </Box>
      </form>
    </div>
  );
};

export default Converter;
