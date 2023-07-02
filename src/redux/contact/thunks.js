import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from 'redux/auth/auth';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('contacts');
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
      const data = await instance.post('contacts', { name, number });
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
      const data = await instance.delete(`contacts/${id}`);
      return data;
    } catch ({ message }) {
      return thunkApi.rejectWithValue(message);
    }
  }
);
