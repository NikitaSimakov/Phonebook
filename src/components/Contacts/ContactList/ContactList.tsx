import { fetchContacts } from '../../../redux/contact/thunks';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from '../../../redux/selectors';
import { useEffect, FC } from 'react';
import css from './ContactList.module.scss';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useAppDispatch } from '../../../redux/hooks';

const ContactList: FC<{}> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul className={css.list}>
      {filteredContacts?.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
