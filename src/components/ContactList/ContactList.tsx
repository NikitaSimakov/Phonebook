import { fetchContacts } from '../../redux/contact/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from '../../redux/selectors';
import { useEffect, FC } from 'react';
import css from './ContactList.module.scss';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { AppDispatch } from '../../redux/store';

const ContactList: FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul className={css.list} onKeyDown={event => console.log(event)}>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};

export default ContactList;
