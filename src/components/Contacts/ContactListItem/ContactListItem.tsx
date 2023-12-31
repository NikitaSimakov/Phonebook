import { FC, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectContactId,
  selectIsLoadingContacts,
} from '../../../redux/selectors';
import { deleteContact } from '../../../redux/contact/contact-thunks';
import css from './ContactListItem.module.scss';
import Button from '../../Button/Button';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';
import { useAppDispatch } from '../../../redux/hooks';
import ContaListItemCard from './ContactListItemCard/ContactListItemCard';
import ContactEdit from '../ContactEdit/ContactEdit';
import { BsPersonFillDash } from 'react-icons/bs';
import ContactFavorite from '../ContactFavorite/ContactFavorite';

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
  const [isEdit, setIsEdit] = useState(false);
  const isShowSpinner: boolean = isLoading && contactId === contact.id;

  const deleteHandler = (event: SyntheticEvent) => {
    const { id } = event.currentTarget;
    dispatch(deleteContact(id));
  };

  return (
    <li key={contact.id} className={css.item}>
      <div className={css.itemBox}>
        <ContaListItemCard name={contact.name} number={contact.number} />
        <div className={css.buttonsBox}>
          <ContactEdit
            id={contact.id}
            isActive={isEdit}
            setIsActive={setIsEdit}
          />
          <ContactFavorite id={contact.id} />
          <Button
            className={css.button}
            stylish={'redButton'}
            id={contact.id}
            event={deleteHandler}
            disabled={isShowSpinner}
          >
            {!isShowSpinner && <BsPersonFillDash />}
            <CircularIndeterminate conditions={isShowSpinner} />
          </Button>
        </div>
      </div>
    </li>
  );
};
