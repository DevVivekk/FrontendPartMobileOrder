import {configureStore,combineReducers} from '@reduxjs/toolkit'
import BookSlice  from './bookslice'
import  OrderedSlice from './orderedslice'
const rootReducer = combineReducers({
    state:BookSlice,
    orderedstate:OrderedSlice
  });
  export const store = configureStore({
    reducer: rootReducer,
  });