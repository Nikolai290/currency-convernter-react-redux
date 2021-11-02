import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IRates, { GetRates } from '../entities/Rates';
import IValute, {RUB} from '../entities/Valute';


const initialState : IRates = {
  Date: new Date(0),
  PreviousDate: new Date(0),
  Valute: [RUB]
};

export const ratesSlice = createSlice({
  name: 'rates',
  initialState: initialState,
  reducers: {
    update: (state, action:PayloadAction<GetRates>) : IRates => {
      let valutes = [];
      for (let key in action.payload.Valute) {
        valutes.push(action.payload.Valute[key] as IValute);
      }
      return {
        Date: new Date(action.payload.Date),
        PreviousDate: new Date(action.payload.PreviousDate),
        Valute: [...valutes, RUB],
      };
    },
    default: (state) => state,
  },
});

export const { update } = ratesSlice.actions;
export default ratesSlice.reducer;
