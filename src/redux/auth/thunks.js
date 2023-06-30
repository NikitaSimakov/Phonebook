import { logIn, logOut, refreshUser, setToken, signUp } from 'api/auth';

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

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (body, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
    if (!token) return;
    setToken(token);
    try {
      const response = await refreshUser();
      // const response = await axios.get('/users/current');
      // const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
