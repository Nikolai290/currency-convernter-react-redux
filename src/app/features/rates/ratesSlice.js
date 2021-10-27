import { createSlice } from '@reduxjs/toolkit';

const RUB = {
  ID: "",
  NumCode: "810",
  CharCode: "RUB",
  Nominal: 1,
  Name: "Российский рубль",
  Value: 1,
  Previous: 1
}

export const ratesSlice = createSlice({
  name: 'rates',
  initialState: {Date: undefined, PreviousDate: undefined, Valute : []},
  reducers: {
    update: (state, action) => {
      let valute = [];
      for(let key in action.payload.Valute){
        valute.push(action.payload.Valute[key])
      }
      return { ...action.payload, Date: new Date(action.payload.Date), PreviousDate: new Date(action.payload.PreviousDate), Valute: [...valute, RUB]};
    },
    default: (state) => state,
  },
});

export const { update } = ratesSlice.actions;
export default ratesSlice.reducer;
