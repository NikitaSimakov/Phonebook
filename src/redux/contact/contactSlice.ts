import { ContactsState, contactsState } from '../state';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  deleteContact,
  addContact,
  editContact,
  // favoriteContact,
  // favoriteContacts,
} from './thunks';
import { Notify } from 'notiflix';

const handlePending = (state: ContactsState) => {
  state.error = '';
  state.isLoading = true;
};
const handleRejected = (
  state: ContactsState,
  { payload }: PayloadAction<string>
) => {
  state.error = payload;
  state.isLoading = false;
  Notify.failure(state.error || 'Error');
};

// export const AddToFavorite = (id: string) => {
//   return {
//     type: 'favorites/addFavorite',
//     payload: id,
//   };
// };

// export const DeleteFromFavorite = (id: string) => {
//   return {
//     type: 'favorites/deleteFavorite',
//     payload: id,
//   };
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
        state.id = action.meta.arg;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
        state.id = '';
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        Notify.success(
          `The contact ${payload.name} was successfully added to the phone book!`
        );
        state.contacts.push(payload);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.contacts.filter(contact => {
          if (contact.id === payload.id) {
            contact.name = payload.name;
            contact.number = payload.number;
          }
          return contact;
        });
        Notify.success(
          `The contact ${payload.name} was successfully edited in the phone book!`
        );
      })
      .addMatcher(
        action => action.type.endsWith('addFavoriteContact'),
        (state: ContactsState, { payload }) => {
          state.favorites.push(payload);
        }
      )
      .addMatcher(
        action => action.type.endsWith('removeFavoriteContact'),
        (state: ContactsState, { payload }) => {
          state.favorites = state.favorites.filter(id => id !== payload);
        }
      )
      .addMatcher(
        action => action.type.endsWith('Contact/pending'),
        handlePending
      )
      .addMatcher(
        action => action.type.endsWith('Contact/rejected'),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
