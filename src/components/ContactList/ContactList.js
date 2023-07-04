import { fetchContacts } from 'redux/contact/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import { useEffect } from 'react';
// import { Button } from '@mui/material';
import css from './ContactList.module.css';
// import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContact);

  // const deleteContactHandler = event => {
  //   const { id } = event.currentTarget;
  //   dispatch(deleteContact(id));
  // };

  // const deletingInProgress = id => {};

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(
          contact => {
            return <ContactListItem key={contact.id} contact={contact} />;
          }
          // <ContactListItem key={contact.id} contact={contact} />
        )}
    </ul>
  );
};

export default ContactList;
