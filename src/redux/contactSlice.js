import { contactsState } from './state';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunks';
import { Notify } from 'notiflix';

const handlePending = state => (state.isLoading = true);
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        if (
          state.contacts.some(contact => contact.name === payload.data.name)
        ) {
          Notify.failure(
            `Contact ${payload.data.name} is already in phonebook!`
          );
          return;
        }
        state.contacts.push(payload.data);
      })
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
