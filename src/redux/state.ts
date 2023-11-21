export interface ContactsState {
  contacts: { name: string; id: string; number: string }[];
  isLoading: boolean;
  error: null | string | object;
  id: string;
}

export const contactsState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
  id: '',
};
export const filterState = { filter: '' };
