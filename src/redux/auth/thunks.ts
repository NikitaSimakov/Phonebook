import { IValues } from '../../pages/Registration/Registration';
import { RootState } from '../store';
import { IBody, logIn, logOut, refreshUser, setToken, signUp } from './auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (body: IValues, { rejectWithValue }) => {
    try {
      const { data } = await signUp(body);
      return data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body: IBody, { rejectWithValue }) => {
    try {
      const { data } = await logIn(body);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await logOut();
      return data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

// export const logOutThunk = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await logOut();
//       return data;
//     } catch (error) {
//       rejectWithValue(error.message);
//     }
//   }
// );

// export const refreshUserThunk = createAsyncThunk(
//   'auth/refresh',
//   async (body, thunkAPI) => {
//     const { token } = thunkAPI.getState().auth;
//     console.log(thunkAPI.getState());
//     if (!token) return;
//     setToken(token);
//     try {
//       const response = await refreshUser();
//       return response.data;
//     } catch (error) {
//       thunkAPI.rejectWithValue((error as Error).message);
//     }
//   }
// );
export const refreshUserThunk = createAsyncThunk<
  IBody,
  string,
  { state: RootState }
>('auth/refresh', async (_, { getState, rejectWithValue }) => {
  const { token } = getState().auth;
  if (!token) return;
  setToken(token);
  try {
    const response = await refreshUser();
    return response.data;
  } catch (error) {
    rejectWithValue((error as Error).message);
  }
});
