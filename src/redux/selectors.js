export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectFilteredContact = state => {
  return selectContacts(state).filter(contact =>
    contact.name.includes(selectFilter(state))
  );
};
export const selectUserName = state => state.auth.user.name;
export const selectIsAuth = state => state.auth.isAuth;
export const selectToken = state => state.auth.token;
export const selectIsLoading = state => state.auth.isLoading;
export const selectNameIsInContacts = (state, name) => {
  return selectContacts(state).some(contact => contact.name.includes(name));
};
export const selectIsRefreshing = state => state.auth.isRefreshing;
