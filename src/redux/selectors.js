export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectFilteredContact = state => {
  return selectContacts(state).filter(contact =>
    contact.name.includes(selectFilter(state))
  );
};
export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
