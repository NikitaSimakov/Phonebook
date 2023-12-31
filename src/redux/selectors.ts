import { RootState } from './store';

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectFilter = (state: RootState) => state.filter;
export const selectFilteredContact = (state: RootState) => {
  return selectContacts(state)
    .filter(contact =>
      contact.name.toLowerCase().includes(selectFilter(state).toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));
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
export const selectContactId = (state: RootState) => state.contacts.id;
export const selectContact = (state: RootState, id: string) => {
  return selectContacts(state).find(contact => contact.id === id);
};
export const selectFavoriteIds = (state: RootState) => state.contacts.favorites;
export const selectFavoritesContacts = (state: RootState) => {
  return selectFilteredContact(state).filter(contact =>
    selectFavoriteIds(state).includes(contact.id)
  );
};
