import { FC, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  selectContactId,
  selectIsLoadingContacts,
} from '../../../redux/selectors';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { deleteContact } from '../../../redux/contact/thunks';
import img from './contact_default.jpeg';
import css from './ContactListItem.module.scss';
import { Button } from '../../Button/Button';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';
import { useAppDispatch } from '../../../redux/hooks';
interface ContactListItemProps {
  contact: {
    name: string;
    id: string;
    number: string;
  };
}
export const ContactListItem: FC<ContactListItemProps> = ({ contact }) => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoadingContacts);
  const contactId = useSelector(selectContactId);
  const isShowSpinner: boolean = isLoading && contactId === contact.id;

  const deleteHandler = (event: SyntheticEvent) => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

  const showSpinner = isShowSpinner ? (
    <div className={css.spinner}>{CircularIndeterminate()}</div>
  ) : (
    <></>
  );

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
          event={deleteHandler}
          disabled={isShowSpinner}
        >
          Delete
          {showSpinner}
        </Button>
      </div>
    </li>
  );
};
