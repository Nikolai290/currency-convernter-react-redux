import {configureStore} from '@reduxjs/toolkit'
import ratesReducer from './features/rates/ratesSlice'
import convertDataReducer from './features/converter/converterSlice'

export default configureStore({
  reducer: {
    rates: ratesReducer,
    convertData: convertDataReducer
  }
})