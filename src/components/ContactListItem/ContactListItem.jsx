import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingContacts } from 'redux/selectors';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from 'redux/contact/thunks';
import img from './contact_default.jpeg';
import css from './ContactListItem.module.scss';
import { Button } from 'components/Button/Button';
import CircularIndeterminate from 'components/CircularProgress/CircularProgress';

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
      <div className={css.itemBox}>
        <img className={css.image} src={img} alt="contact default pic" />
        <div className={css.textBox}>
          <p className={css.name}>{contact.name}</p>
          <div className={css.phoneBox}>
            <BsFillTelephoneFill
              className={css.phoneIcon}
              fill="#97c784"
              height={15}
            />
            <p className={css.number}>{contact.number}</p>
          </div>
        </div>
        <Button
          className={css.button}
          stylish={'redButton'}
          id={contact.id}
          event={event => deleteHandler(event)}
          disabled={isShowSpinner}
        >
          Delete{' '}
          {isShowSpinner && (
            <div className={css.spinner}>{CircularIndeterminate()}</div>
          )}
        </Button>
      </div>
    </li>
  );
};
