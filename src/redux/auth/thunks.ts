import { Notify } from 'notiflix';
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
  setToken(token);
  try {
    const response = await refreshUser();
    return response.data;
  } catch (error) {
    console.log(error);
    if ((error as Error).message === 'Request failed with status code 401')
      return Notify.failure(
        'Sorry You are unauthorized. Please authorize to access your account'
      );
    rejectWithValue((error as Error).message);
  }
});
