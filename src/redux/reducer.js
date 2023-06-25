import { combineReducers } from 'redux';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { loginReducer } from './auth/slice';

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: loginReducer,
});
