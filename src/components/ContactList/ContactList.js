import { deleteContact, fetchContacts } from 'redux/thunks';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import { useEffect } from 'react';

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
    <ul>
      {filteredContacts &&
        filteredContacts.map(contact => (
          <li className={css.contactList_item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={css.contactList_button}
              type="button"
              id={contact.id}
              onClick={deleteContactHandler}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
