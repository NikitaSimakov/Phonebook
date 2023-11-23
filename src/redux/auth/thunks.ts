import { RootState } from '../store';
import { IBody, logIn, logOut, refreshUser, setToken, signUp } from './auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FormValuesInterface } from '../../components/Auth/models/models';

interface IResponse {
  token: string;
  user: FormValuesInterface;
}

export const signUpThunk = createAsyncThunk<
  IResponse,
  IBody,
  { rejectValue: string }
>('auth/signUpUser', async (body, { rejectWithValue }) => {
  try {
    const { data } = await signUp(body);
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const loginThunk = createAsyncThunk<
  IResponse,
  IBody,
  { rejectValue: string }
>('auth/loginUser', async (body, { rejectWithValue }) => {
  try {
    const { data } = await logIn(body);
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const logOutThunk = createAsyncThunk<
  void,
  undefined,
  { rejectValue: string }
>('auth/logoutUser', async (_, { rejectWithValue }) => {
  try {
    await logOut();
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const refreshUserThunk = createAsyncThunk<
  IBody,
  undefined,
  { state: RootState; rejectValue: string }
>('auth/refreshUser', async (_, { getState, rejectWithValue }) => {
  const { token } = getState().auth;
  setToken(token);
  try {
    const { data } = await refreshUser();
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
