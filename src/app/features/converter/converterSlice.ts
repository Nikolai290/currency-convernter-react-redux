import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IConvertData from '../entities/ConverterData';
import IValute from '../entities/Valute';
import { convert } from './calcModul';

const initialState: IConvertData = {
  from: {} as IValute,
  to: {} as IValute,
  value: 1,
  result: 0,
};

export const convertSlice = createSlice({
  name: 'convertData',
  initialState: initialState,
  reducers: {
    updateFrom: (state: IConvertData, action: PayloadAction<IValute>) => {
      return {
        ...state,
        from: action.payload,
        result: convert(action?.payload, state?.to, state?.value),
      };
    },
    updateTo: (state: IConvertData, action: PayloadAction<IValute>) => {
      return {
        ...state,
        to: action.payload,
        result: convert(state?.from, action?.payload, state?.value),
      };
    },
    updateValue: (state: IConvertData, action: PayloadAction<number>) => {
      return {
        ...state,
        value: action.payload,
        result: convert(state?.from, state?.to, action?.payload),
      };
    },
    updateResult: (state) => {
      return {
        ...state,
        result: convert(state?.from, state?.to, state?.value),
      };
    },
    default: (state) => state,
  },
});

export const { updateFrom, updateTo, updateValue, updateResult } =
  convertSlice.actions;
export default convertSlice.reducer;
