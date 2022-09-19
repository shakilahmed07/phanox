import { configureStore } from '@reduxjs/toolkit';
import adminSlice from '../features/admin/adminSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {customReducer} from '../features/admin/customReducer';
import { productReducer } from '../features/productReducers';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})


export const store = configureStore({
  reducer: {
    products : adminSlice,
    customProduct : customReducer,
    productReducer : productReducer
  },
  middleware: customizedMiddleware
});
