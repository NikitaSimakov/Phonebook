import { fetchContacts } from 'redux/contact/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import { useEffect } from 'react';
import css from './ContactList.module.scss';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(contact => {
          return <ContactListItem key={contact.id} contact={contact} />;
        })}
    </ul>
  );
};

export default ContactList;
