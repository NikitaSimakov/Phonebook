import { RootState } from './store';

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectFilter = (state: RootState) => state.filter.filter;
export const selectFilteredContact = (state: RootState) => {
  return selectContacts(state).filter(contact =>
    contact.name.includes(selectFilter(state))
  );
};
export const selectUserName = (state: RootState) => state.auth.user.name;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsLoading = (state: RootState) => state.auth.isLoading;
export const selectIsLoadingContacts = (state: RootState) =>
  state.contacts.isLoading;
export const selectNameIsInContacts = (state: RootState, name: string) => {
  return selectContacts(state).some(contact => contact.name.includes(name));
};
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
