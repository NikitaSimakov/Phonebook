import { useEffect, FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchContacts } from '../../../redux/contact/contact-thunks';
import {
  selectFilteredContact,
  selectFavoritesContacts,
} from '../../../redux/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useAppDispatch } from '../../../redux/hooks';
import css from './ContactList.module.scss';
import ButtonsBox from './ButtonsBox/ButtonsBox';

const ContactList: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const filteredContacts = useSelector(selectFilteredContact);
  const favoritesContacts = useSelector(selectFavoritesContacts);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contactsChoice = isFavorite ? favoritesContacts : filteredContacts;

  return (
    <>
      <ButtonsBox isFavorite={isFavorite} setIsFavorite={setIsFavorite} />
      <ul className={css.list}>
        {contactsChoice?.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
