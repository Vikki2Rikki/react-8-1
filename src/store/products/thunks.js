import { createAsyncThunk } from '@reduxjs/toolkit';
//import { instanceForProducts } from 'api/api';
import { createProduct, getAllProducts } from 'api/products';

export const getAllProductsThunks = createAsyncThunk('products/getAll', () =>
  getAllProducts()
);

export const createProductThunks = createAsyncThunk('products/create', body =>
  createProduct(body)
);
