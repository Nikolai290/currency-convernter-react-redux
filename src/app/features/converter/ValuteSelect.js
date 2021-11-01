import React from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Input from '@mui/material/Input/Input';

const ValuteSelect = ({ valutes, onChangeHandler, value }) => {
  return (
    <div>
      <FormControl sx={{ width: '200px' }} margin="normal">
        <InputLabel htmlFor="age-helper">Valute</InputLabel>
        <Select
        defaultValue={value?.NumCode}
          onChange={(e) => onChangeHandler(e)}
          input={<Input name="age" id="age-helper" />}
        >
          {valutes.map((valute) => (
            <MenuItem
              key={valute.NumCode}
              value={valute.NumCode}
            >
              {valute.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ValuteSelect;
