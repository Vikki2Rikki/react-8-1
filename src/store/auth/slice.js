import { loginThunk, signUpThunk } from './thunks';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilld = state => {
  state.isLoading = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.error;
};

const handleFulfilldSignUp = (state, { payload }) => {
  state.token = payload.token;
  state.profile = payload.user;
};

const initialState = {
  token: '',
  isLoading: false,
  error: '',
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state) {
      state.error = '';
      state.token = '';
      state.profile = null;
      state.isLoading = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(signUpThunk.fulfilled, handleFulfilldSignUp)
      .addCase(loginThunk.fulfilled, handleFulfilldSignUp)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/fulfilld'), handleFulfilld)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected),
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;
