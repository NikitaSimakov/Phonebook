import { IValues } from '../../pages/Registration/Registration';
import { RootState } from '../store';
import { IBody, logIn, logOut, refreshUser, setToken, signUp } from './auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IResponse {
  token: string;
  user: IValues;
}

export const signUpThunk = createAsyncThunk<
  IResponse,
  IBody,
  { rejectValue: string }
>('auth/signUp', async (body, { rejectWithValue }) => {
  try {
    const { data } = await signUp(body);
    return data;
  } catch (error) {
    rejectWithValue((error as Error).message);
  }
});

export const loginThunk = createAsyncThunk<
  IResponse,
  IBody,
  { rejectValue: string }
>('auth/login', async (body, { rejectWithValue }) => {
  try {
    const { data } = await logIn(body);
    return data;
  } catch (error) {
    console.log(error);
    rejectWithValue((error as Error).message);
  }
});

export const logOutThunk = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>('auth/logout', async (_, { rejectWithValue }) => {
  try {
    await logOut();
  } catch (error) {
    rejectWithValue((error as Error).message);
  }
});

export const refreshUserThunk = createAsyncThunk<
  IBody,
  undefined,
  { state: RootState; rejectValue: string }
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
