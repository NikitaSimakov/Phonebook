import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://648819000e2469c038fcf0e4.mockapi.io/api/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('contacts');
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkApi) => {
    try {
      const data = await axios.post('contacts', { name, number });
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const data = await axios.delete(`contacts/${id}`);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);
