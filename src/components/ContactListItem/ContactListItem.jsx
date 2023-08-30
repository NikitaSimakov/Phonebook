import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contact/thunks';
import { Button } from '@mui/material';
import { useState } from 'react';
import css from '../ContactList/ContactList.module.scss';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const [contactId, setContactId] = useState('');
  const isLoading = useSelector(selectIsLoadingContacts);
  const isShowSpinner = isLoading && contactId === contact.id;

  const deleteHandler = event => {
    setContactId(event.currentTarget.id);
    dispatch(deleteContact(event.currentTarget.id));
  };

  return (
    <li className={css.item}>
      <p className={css.name}>{contact.name}</p>:
      <p className={css.number}>{contact.number}</p>
      <Button
        variant="outlined"
        color="error"
        className={css.button}
        type="button"
        id={contact.id}
        onClick={deleteHandler}
        disabled={isShowSpinner}
      >
        Delete {isShowSpinner && CircularIndeterminate()}
      </Button>
    </li>
  );
};
