import { logIn, signUp } from 'api/auth';

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
