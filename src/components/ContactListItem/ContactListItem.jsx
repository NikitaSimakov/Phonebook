import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingContacts } from 'redux/selectors';
import css from '../ContactList/ContactList.module.css';
import { deleteContact } from 'redux/contact/thunks';
import { Button } from '@mui/material';
import { useState } from 'react';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState('');
  const isLoading = useSelector(selectIsLoadingContacts);

  //   const deleteContactHandler = event => {
  //     const { id } = event.currentTarget;
  //     dispatch(deleteContact(id));
  //   };
  const deleteHandler = event => {
    setContactId(event.currentTarget.id);
    dispatch(deleteContact(event.currentTarget.id));
  };
  //   console.log(contactId);
  //   const deleteContactHandler = id => {
  //     dispatch(deleteContact(id));
  //   };
  return (
    <li className={css.contactList_item}>
      <p className={css.name}>{contact.name}</p>:
      <p className={css.number}>{contact.number}</p>
      <Button
        variant="outlined"
        color="error"
        className={css.contactList_button}
        type="button"
        id={contact.id}
        onClick={deleteHandler}
        disabled={isLoading && contactId === contact.id}
      >
        Delete{' '}
        {isLoading && contactId === contact.id && CircularIndeterminate()}
      </Button>
    </li>
  );
};
