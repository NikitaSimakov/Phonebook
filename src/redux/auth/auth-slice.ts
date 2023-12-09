import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  logOutThunk,
  loginThunk,
  refreshUserThunk,
  signUpThunk,
} from './auth-thunks';
import { Notify } from 'notiflix';

interface IUser {
  name: string | undefined;
  email: string;
}
interface IAuthState {
  token: string;
  isAuth: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  error: string;
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
const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = '';
};
const handleRejected = (
  state: IAuthState,
  { payload }: PayloadAction<string>
) => {
  state.error = payload;
  state.isLoading = false;
  if (payload === 'Request failed with status code 400') {
    return Notify.failure('Maybe the username or password is incorrect');
  }
  if (payload === 'Request failed with status code 401') {
    return Notify.failure(
      'Sorry You are unauthorized. Please authorize to access your account'
    );
  }
  Notify.failure(state.error || 'Error');
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.token = payload?.token;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.token = '';
        state.user.name = '';
        state.user.email = '';
        state.error = '';
        state.isLoading = false;
        state.isRefreshing = false;
        state.isAuth = false;
        Notify.success('See you later!');
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
      .addCase(refreshUserThunk.rejected, state => {
        state.isRefreshing = false;
        state.token = '';
      })
      .addMatcher(action => action.type.endsWith('User/pending'), handlePending)
      .addMatcher(
        action => action.type.endsWith('User/rejected'),
        handleRejected
      );
  },
});

export const loginReducer = authSlice.reducer;
