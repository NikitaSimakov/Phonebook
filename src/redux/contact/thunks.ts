import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth';
// import { AxiosError } from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const { data } = await instance.get('contacts');
      return data;
      // } catch ({ message }) {
      //   return thunkApi.rejectWithValue(message);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }: { name: string; number: string }, thunkApi) => {
    try {
      const data = await instance.post('contacts', { name, number });
      return data;
      // } catch ({ message }) {
      //   return thunkApi.rejectWithValue(message);
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id: string, thunkApi) => {
    try {
      const data = await instance.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
      // } catch ({ message }) {
      //   return thunkApi.rejectWithValue(message);
    }
  }
);
