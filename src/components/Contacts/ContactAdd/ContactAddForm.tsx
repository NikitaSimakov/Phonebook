import { useState, FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form, FormikHelpers as FormikActions } from 'formik';
// import * as yup from 'yup';
// import 'yup-phone-lite';
import { Notify } from 'notiflix';
import { VscPersonAdd } from 'react-icons/vsc';
import css from './ContactAddForm.module.scss';
// import ContactFormLabel from './ContactFormLabel/ContactFormLabel';
import ContactForm from './ContactForm/ContactForm';
// import Button from '../../Button/Button';
import { addContact } from '../../../redux/contact/thunks';
import { selectContacts } from '../../../redux/selectors';
import { useAppDispatch } from '../../../redux/hooks';
import Modal from '../../../shared/components/Modal/Modal';
import { MyFormValues } from '../modules/interfaces';

const ContactAddForm: FC<{}> = () => {
  const dispatch = useAppDispatch();
  const contacts = useSelector(selectContacts);
  const [isActive, setIsActive] = useState(false);

  // const initialValues: MyFormValues = {
  //   name: '',
  //   number: '',
  // };

  // const schema = yup.object().shape({
  //   name: yup.string().min(2).required(),
  //   number: yup
  //     .string()
  //     .phone('IN', 'Please enter a valid phone number in format +15501234567'),
  // });
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

// const ContactForm: FC<{}> = () => {
//   const dispatch = useAppDispatch();
//   const contacts = useSelector(selectContacts);
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     const esc = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') setIsActive(false);
//     };
//     if (isActive) window.addEventListener('keydown', esc);
//     return () => {
//       window.removeEventListener('keydown', esc);
//     };
//   }, [isActive]);

//   const initialValues: MyFormValues = {
//     name: '',
//     number: '',
//   };

//   const schema = yup.object().shape({
//     name: yup.string().min(2).required(),
//     number: yup
//       .string()
//       .phone('IN', 'Please enter a valid phone number in format +15501234567')
//       .required(),
//   });
//   const handleSubmit = (
//     { name, number }: MyFormValues,
//     { resetForm }: FormikActions<MyFormValues>
//   ) => {
//     resetForm();
//     if (contacts.some(contact => contact.name.includes(name)))
//       return Notify.failure(`Contact ${name} is already in phonebook!`);
//     dispatch(addContact({ name, number }));
//     modalClose();
//   };

//   const isBackdropClick = (
//     event: React.MouseEvent<HTMLElement, MouseEvent>
//   ) => {
//     const target = event.target as HTMLElement;
//     if (target.id !== 'backdrop') return;
//     modalClose();
//   };

//   const modalOpen = () => {
//     setIsActive(true);
//     document.body?.classList.add('hidden');
//   };
//   const modalClose = () => {
//     setIsActive(false);
//     document.body?.classList.remove('hidden');
//   };

//   return (
//     <>
//       {isActive && (
//         <section
//           onClick={isBackdropClick}
//           className={css.addContactWrapper}
//           id="backdrop"
//         >
//           <div className={css.addContact}>
//             <div className={css.container}>
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={schema}
//                 onSubmit={handleSubmit}
//               >
//                 <Form className={css.form}>
//                   <h1 className={css.title}>Add new contact</h1>
//                   <div className={css.labelWrapper}>
//                     <ContactFormLabel
//                       labelName={'Name'}
//                       type={'text'}
//                       placeholder={'Homer Simpson'}
//                     />
//                     <ContactFormLabel
//                       labelName={'Number'}
//                       type={'tel'}
//                       placeholder={'+15501234567'}
//                     />
//                     <Button buttonType={'submit'}>Add contact</Button>
//                   </div>
//                   <button
//                     onClick={modalClose}
//                     className={css.closeButton}
//                     type="button"
//                   >
//                     <VscChromeClose />
//                   </button>
//                 </Form>
//               </Formik>
//             </div>
//           </div>
//         </section>
//       )}
//       <button onClick={modalOpen} className={css.openButton} type="button">
//         <VscPersonAdd />
//       </button>
//     </>
//   );
// };

// export default ContactForm;
