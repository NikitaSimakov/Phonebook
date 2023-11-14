import { useState, FC, useEffect } from 'react';
import { Button } from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contact/thunks';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers as FormikActions,
} from 'formik';
import * as yup from 'yup';
import { selectContacts } from '../../../redux/selectors';
import { Notify } from 'notiflix';
import css from './ContactForm.module.scss';
import 'yup-phone-lite';
import { AppDispatch } from '../../../redux/store';

interface MyFormValues {
  name: string;
  number: string;
}
interface KeyboardEvent {
  key: string;
}

const ContactForm: FC<{}> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contacts = useSelector(selectContacts);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const esc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsActive(false);
    };
    if (isActive) window.addEventListener('keydown', esc);
    return () => {
      window.removeEventListener('keydown', esc);
    };
  }, [isActive]);

  const initialValues: MyFormValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    number: yup
      .string()
      .phone('IN', 'Please enter a valid phone number in format +15501234567'),
  });
  const handleSubmit = (
    { name, number }: MyFormValues,
    { resetForm }: FormikActions<MyFormValues>
  ) => {
    resetForm();
    if (contacts.some(contact => contact.name.includes(name)))
      return Notify.failure(`Contact ${name} is already in phonebook!`);
    dispatch(addContact({ name, number }));
    modalClose();
    return Notify.success(
      `The contact ${name} was successfully added to the phone book!`
    );
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
        <section
          onClick={event => {
            const target = event.target as HTMLElement;
            if (target.id !== 'backdrop') return;
            modalClose();
          }}
          className={css.addContactWrapper}
          id="backdrop"
        >
          <div className={css.addContact}>
            <div className={css.container}>
              <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
              >
                <Form className={css.form}>
                  <h1 className={css.title}>Add new contact</h1>
                  <div className={css.labelWrapper}>
                    <label className={css.label}>
                      <p className={css.labelName}>Name</p>
                      <Field
                        className={css.input}
                        type="text"
                        name="name"
                        placeholder="Homer Simpson"
                      />
                      <ErrorMessage name="name" />
                    </label>
                    <label className={css.label}>
                      <p className={css.labelName}>Number</p>
                      <Field
                        className={css.input}
                        type="tel"
                        name="number"
                        placeholder="+15501234567"
                      />
                      <ErrorMessage name="number" />
                    </label>
                    <Button buttonType={'submit'}>Add contact</Button>
                  </div>
                  <button
                    onClick={modalClose}
                    className={css.closeButton}
                    type="button"
                  >
                    X
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </section>
      )}
      <button onClick={modalOpen} className={css.openButton} type="button">
        Add contact
      </button>
    </>
  );
};

export default ContactForm;
