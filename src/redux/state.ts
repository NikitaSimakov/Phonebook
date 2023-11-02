interface ContactsState {
  contacts: { name: string; id: string; number: string }[];
  isLoading: boolean;
  error: null | Error;
  id: null | string;
}

export const contactsState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
  id: null,
};
export const filterState = { filter: '' };
