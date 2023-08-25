import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, signUp } from 'api/auth';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body, { rejectWithValue }) => {
    try {
      return await signUp(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
    try {
      return await login(body);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
