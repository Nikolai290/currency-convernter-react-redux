import { createSlice } from '@reduxjs/toolkit';

export const ratesSlice = createSlice({
  name: 'rates',
  initialState: {},
  reducers: {
    update: (state, action) => {
      let valute = [];
      for(let key in action.payload.Valute){
        valute.push(action.payload.Valute[key])
      }
      return { ...action.payload, Valute: valute};
    },
    default: (state) => state,
  },
});

export const { update } = ratesSlice.actions;
export default ratesSlice.reducer;
