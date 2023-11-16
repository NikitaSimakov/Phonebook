import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
  signUpThunk,
} from './thunks';

interface IUser {
  name: string | undefined;
  email: string;
}
interface IAuthState {
  token: string;
  isAuth: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string | undefined | object;
  user: IUser;
}

const initialState: IAuthState = {
  token: '',
  isAuth: false,
  isLoading: false,
  isRefreshing: false,
  error: '',
  user: {
    name: '',
    email: '',
  },
};

const handleRejected = (
  state: IAuthState,
  { payload }: PayloadAction<string>
) => {
  state.isLoading = false;
  state.error = payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload!.token;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.token = '';
        state.user.name = '';
        state.user.email = '';
        state.error = '';
        state.isLoading = false;
        state.isRefreshing = false;
        state.isAuth = false;
      })
      .addCase(refreshUserThunk.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.isRefreshing = false;
        state.user.name = payload.name;
        state.user.email = payload.email;
      })
      .addCase(refreshUserThunk.rejected, (state, action) => {})
      // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(
        (action: PayloadAction) => action.type.endsWith('/rejected'),
        handleRejected
      );
  },
});

export const loginReducer = authSlice.reducer;
