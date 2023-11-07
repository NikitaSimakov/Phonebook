import { combineReducers } from 'redux';
import { contactsReducer } from './contact/contactSlice';
import { filterReducer } from './filterSlice';
import { loginReducer } from './auth/slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer,
});
