import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { FormikHelpers as FormikActions } from 'formik';
import { Notify } from 'notiflix';
import { BsPersonFillAdd } from 'react-icons/bs';
import css from './ContactAddForm.module.scss';
import ContactForm from './ContactForm/ContactForm';
import { addContact } from '../../../redux/contact/contact-thunks';
import { selectContacts } from '../../../redux/selectors';
import { useAppDispatch } from '../../../redux/hooks';
import Modal from '../../../shared/components/Modal/Modal';
import { MyFormValues } from '../modules/interfaces';
import {
  modalClose,
  modalOpen,
} from '../../../shared/components/Modal/modalLogic';

const ContactAddForm: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (
    { name, number }: MyFormValues,
    { resetForm }: FormikActions<MyFormValues>
  ) => {
    resetForm();
    if (contacts.some(contact => contact.name.includes(name)))
      return Notify.failure(`Contact ${name} is already in phonebook!`);
    dispatch(addContact({ name, number }));
    modalClose(setIsActive);
  };

  return (
    <>
      {isActive && (
        <Modal onClose={() => modalClose(setIsActive)}>
          <ContactForm
            initialValues={{ name: '', number: '' }}
            onSubmit={handleSubmit}
            title={'Add new contact'}
          />
        </Modal>
      )}
      <button
        onClick={() => modalOpen(setIsActive)}
        className={css.openButton}
        type="button"
      >
        <BsPersonFillAdd />
      </button>
    </>
  );
};

export default ContactAddForm;
