export interface ContactsState {
  contacts: { name: string; id: string; number: string }[];
  isLoading: boolean;
  error: null | string | object;
  id: string;
  favorites: string[];
}

export const contactsState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
  id: '',
  favorites: [],
};
export const filterState = '';
