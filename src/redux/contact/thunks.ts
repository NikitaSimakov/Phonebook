import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth';

interface IContact {
  id: string;
  name: string;
  number: string;
}

interface IRequest {
  name: string;
  number: string;
}

export const fetchContacts = createAsyncThunk<
  IContact[],
  undefined,
  { rejectValue: string }
>('contacts/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const { data } = await instance.get('contacts');
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const addContact = createAsyncThunk<
  IContact,
  IRequest,
  { rejectValue: string }
>('contacts/addContact', async (body, { rejectWithValue }) => {
  try {
    const { data } = await instance.post('contacts', body);

    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const deleteContact = createAsyncThunk<
  IContact,
  string,
  { rejectValue: string }
>('contacts/deleteContact', async (id, { rejectWithValue }) => {
  try {
    const { data } = await instance.delete(`contacts/${id}`);
    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});

export const editContact = createAsyncThunk<
  IContact,
  IContact,
  { rejectValue: string }
>('contacts/editContact', async (body, { rejectWithValue }) => {
  try {
    const { id, name, number } = body;
    const request = { name, number };
    const { data } = await instance.patch(`contacts/${id}`, request);

    return data;
  } catch (error) {
    return rejectWithValue((error as Error).message);
  }
});
