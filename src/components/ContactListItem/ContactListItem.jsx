import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoadingContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contact/thunks';
import { Button } from '@mui/material';
import { useState } from 'react';
import img from './contact_default.jpeg';
import css from './ContactListItem.module.scss';
import { BsFillTelephoneFill } from 'react-icons/bs';

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
      <div className={css.item_box}>
        <img className={css.image} src={img} alt="contact default pic" />
        <div className={css.text_box}>
          <p className={css.name}>{contact.name}</p>
          <div className={css.phone_box}>
            <BsFillTelephoneFill
              className={css.phone_icon}
              fill="#97c784"
              height={15}
            />
            <p className={css.number}>{contact.number}</p>
          </div>
        </div>
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
      </div>
    </li>
  );
};
