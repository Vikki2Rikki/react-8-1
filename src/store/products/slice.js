import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { createProductThunks, getAllProductsThunks } from './thunks';
import {
  handleFulfilled,
  handleFulfilledCreateProduct,
  handleFulfilledProducts,
  handlePending,
  handleRejected,
} from './handlers';

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllProductsThunks.fulfilled, handleFulfilledProducts)
      .addCase(createProductThunks.fulfilled, handleFulfilledCreateProduct)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const { setFilter } = productsSlice.actions;
export const productsReduser = productsSlice.reducer;
