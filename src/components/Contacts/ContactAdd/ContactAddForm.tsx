import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { FormikHelpers as FormikActions } from 'formik';
import { Notify } from 'notiflix';
import { VscPersonAdd } from 'react-icons/vsc';
import css from './ContactAddForm.module.scss';
import ContactForm from './ContactForm/ContactForm';
import { addContact } from '../../../redux/contact/thunks';
import { selectContacts } from '../../../redux/selectors';
import { useAppDispatch } from '../../../redux/hooks';
import Modal from '../../../shared/components/Modal/Modal';
import { MyFormValues } from '../modules/interfaces';

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
    modalClose();
  };

  const modalOpen = () => {
    setIsActive(true);
    document.body?.classList.add('hidden');
  };
  const modalClose = () => {
    setIsActive(false);
    document.body?.classList.remove('hidden');
  };

  return (
    <>
      {isActive && (
        <Modal onClose={modalClose}>
          <ContactForm onSubmit={handleSubmit} />
        </Modal>
      )}
      <button onClick={modalOpen} className={css.openButton} type="button">
        <VscPersonAdd />
      </button>
    </>
  );
};

export default ContactAddForm;
