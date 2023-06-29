import { logIn, logOut, signUp } from 'api/auth';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const { data } = await signUp(body);

      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue }) => {
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
      rejectWithValue(error.message);
    }
  }
);
