import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunks';
import { Notify } from 'notiflix';

const authState = {
  token: '',
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authState,
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
        Notify.success('Login Success');
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        if (action.error.message === 'Request failed with status code 404')
          Notify.failure('Login failure');
      });
  },
});

export const loginReducer = authSlice.reducer;
