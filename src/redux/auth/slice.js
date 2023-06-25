import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunks';

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
        console.log(action);
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
    // [loginThunk.pending](state, action) {
    //   state.isLoading = true;
    //   console.log(action);
    // },
    // [loginThunk.fulfilled](state, action) {
    //   state.isLoading = false;
    //   state.token = action.token;
    //   console.log(action);
    // },
    // [loginThunk.rejected](state, action) {
    //   state.isLoading = false;
    //   state.error = action.error;
    // },
  },
});

export const loginReducer = authSlice.reducer;
