import { deleteContact, fetchContacts } from 'redux/contact/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContact);

  const deleteContactHandler = event => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            <p className={css.name}>{contact.name}</p>:
            <p className={css.number}>{contact.number}</p>
            <Button
              variant="outlined"
              color="error"
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </Button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
