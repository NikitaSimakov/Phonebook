import { combineReducers } from 'redux';
import { contactsReducer } from './contact/contactSlice';
import { filterReducer } from './filterSlice';
import { loginReducer } from './auth/slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'favorites'],
};

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

// const persistedReducer = persistReducer(persistConfig, loginReducer);

export const reducer = combineReducers({
  contacts: persistReducer(favoritesPersistConfig, contactsReducer),
  filter: filterReducer,
  // favorites: persistReducer(favoritesPersistConfig, favoriteReducer),
  auth: persistReducer(authPersistConfig, loginReducer),
});
export const persistedReducer = persistReducer(persistConfig, reducer);

// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig, loginReducer);

// export const reducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
//   auth: persistedReducer,
// });
