import { combineReducers } from 'redux';
import { contactsReducer } from './contact/contactSlice';
import { filterReducer } from './filterSlice';
import { loginReducer } from './auth/slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const reducer = combineReducers({
  contacts: persistReducer(favoritesPersistConfig, contactsReducer),
  auth: persistReducer(authPersistConfig, loginReducer),
  filter: filterReducer,
});
