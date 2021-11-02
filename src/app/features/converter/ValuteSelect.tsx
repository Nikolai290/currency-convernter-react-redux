import React from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import InputLabel from '@mui/material/InputLabel/InputLabel';
import Select from '@mui/material/Select/Select';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Input from '@mui/material/Input/Input';
import IValute from '../entities/Valute';

export interface IValuteSelectProps {
  valutes: Array<IValute>;
  onChangeHandler: {(e:any) : void};
  value: IValute;
}

const ValuteSelect = (props: IValuteSelectProps) => {
  return (
    <div>
      <FormControl sx={{ width: '200px' }} margin="normal">
        <InputLabel htmlFor="age-helper">Valute</InputLabel>
        <Select
          defaultValue={props.value?.NumCode}
          onChange={(e) => props.onChangeHandler(e)}
          input={<Input name="age" id="age-helper" />}
        >
          {props.valutes.map((valute) => (
            <MenuItem key={valute.NumCode} value={valute.NumCode}>
              {valute.Name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default ValuteSelect;
