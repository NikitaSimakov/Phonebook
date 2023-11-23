import { FC, SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import {
  selectContactId,
  selectIsLoadingContacts,
} from '../../../redux/selectors';
import { deleteContact } from '../../../redux/contact/thunks';
import css from './ContactListItem.module.scss';
import Button from '../../Button/Button';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';
import { useAppDispatch } from '../../../redux/hooks';
import ContaListItemCard from './ContactListItemCard/ContactListItemCard';

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

  return (
    <li className={css.item}>
      <div className={css.itemBox}>
        <ContaListItemCard name={contact.name} number={contact.number} />
        <Button
          className={css.button}
          stylish={'redButton'}
          id={contact.id}
          event={deleteHandler}
          disabled={isShowSpinner}
        >
          Delete
          <CircularIndeterminate conditions={isShowSpinner} />
        </Button>
      </div>
    </li>
  );
};
