import {configureStore} from '@reduxjs/toolkit'
import ratesReducer from './features/rates/ratesSlice'
import convertDataReducer from './features/converter/converterSlice'

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
    convertData: convertDataReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch