import { createSlice } from "@reduxjs/toolkit";
import {convert} from "./calcModul"
const initialState = {
  from: {},
  to: {},
  value: 1,
  result: undefined
}

export const convertSlice = createSlice({
  name: 'convertData',
  initialState: initialState,
  reducers:{
    updateFrom:(state, action) => {
      return {...state, from: action.payload.from,
        result: state.from && state.to && state.value
        ? convert(state.from, state.to, state.value)
        : 0,
      }
    },
    updateTo:(state, action) => {
      return {...state, to: action.payload.to,
        result: state.from && state.to && state.value
        ? convert(state.from, state.to, state.value)
        : 0
      }
    },
    updateValue:(state, action) => {
      return {...state, value: action.payload.value, 
        result: state.from && state.to && state.value
        ? convert(state.from, state.to, state.value)
        : 0
      }
    },
    default: (state) => state
  }
})

export const {updateFrom, updateTo, updateValue} = convertSlice.actions;
export default convertSlice.reducer;