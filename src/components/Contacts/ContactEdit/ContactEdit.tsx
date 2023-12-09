import { Dispatch, FC, SetStateAction, SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { FormikHelpers as FormikActions } from 'formik';
import { BsPersonFillGear } from 'react-icons/bs';
import {
  modalClose,
  modalOpen,
} from '../../../shared/components/Modal/modalLogic';
import Modal from '../../../shared/components/Modal/Modal';
import Button from '../../Button/Button';
import ContactForm from '../ContactAdd/ContactForm/ContactForm';
import css from './ContactEdit.module.scss';
import { MyFormValues } from '../modules/interfaces';
import { useAppDispatch } from '../../../redux/hooks';
import { editContact } from '../../../redux/contact/contact-thunks';
import { selectContacts } from '../../../redux/selectors';

interface IContactEditProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  id: string;
}

const ContactEdit: FC<IContactEditProps> = ({ isActive, setIsActive, id }) => {
  const dispatch = useAppDispatch();
  const [userId, setUserId] = useState('');
  const contact = useSelector(selectContacts).find(
    contact => contact.id === userId
  );
  const selectedContact = contact?.name ? contact : { name: '', number: '' };
  const handleClick = (e: SyntheticEvent) => {
    modalOpen(setIsActive);
    setUserId(e.currentTarget.id);
  };
  const handleSubmit = (
    { name, number }: MyFormValues,
    { resetForm }: FormikActions<MyFormValues>
  ) => {
    resetForm();
    dispatch(editContact({ name, number, id: userId }));
    modalClose(setIsActive);
  };
  return (
    <>
      {isActive && (
        <Modal onClose={() => modalClose(setIsActive)}>
          <ContactForm
            initialValues={selectedContact}
            onSubmit={handleSubmit}
            title={'Edit contact'}
          />
        </Modal>
      )}
      <Button id={id} event={handleClick} className={css.openButton}>
        <BsPersonFillGear />
      </Button>
    </>
  );
};

export default ContactEdit;
