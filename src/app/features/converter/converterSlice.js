import { createSlice } from "@reduxjs/toolkit";
import {convert} from "./calcModul"
const initialState = {
  from: {},
  to: {},
  value: 1.0,
  result: 0.0
}

export const convertSlice = createSlice({
  name: 'convertData',
  initialState: {...initialState},
  reducers:{
    updateFrom:(state, action) => {
      return {...state, from: action.payload.from,
        result: convert(action.payload.from, state?.to, state?.value)
      }
    },
    updateTo:(state, action) => {
      return {...state, to: action.payload.to,
        result: convert(state?.from, action.payload.to, state?.value)
      }
    },
    updateValue:(state, action) => {
      return {...state, value: action.payload.value, 
        result: convert(state?.from, state?.to, action?.payload?.value)
      }
    },
    updateResult:(state, action) => {
      return {...state, 
        result: convert(state?.from, state?.to, state?.value)
      }
    },
    default: (state) => state
  }
})

export const {updateFrom, updateTo, updateValue, updateResult} = convertSlice.actions;
export default convertSlice.reducer;