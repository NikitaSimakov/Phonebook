import { logIn } from 'api/auth';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const loginThunk = createAsyncThunk('auth/login', async body => {
  const { data } = await logIn(body);
  console.log(data);
  return data;
});
