import { Formik, Form, FormikHelpers as FormikActions } from 'formik';
import css from './ContactForm.module.scss';
import ContactFormLabel from '../ContactFormLabel/ContactFormLabel';
import Button from '../../../Button/Button';
import { FC } from 'react';
import * as yup from 'yup';
import 'yup-phone-lite';
import { MyFormValues } from '../../modules/interfaces';

interface IContactFormProps {
  onSubmit: (
    { name, number }: MyFormValues,
    { resetForm }: FormikActions<MyFormValues>
  ) => void;
  title: string;
  initialValues: {
    name: string;
    number: string;
  };
}
const ContactForm: FC<IContactFormProps> = ({
  onSubmit,
  title,
  initialValues = { name: '', number: '' },
}) => {
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    number: yup
      .string()
      .phone('IN', 'Please enter a valid phone number in format +15501234567')
      .required(),
  });
  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
        className={css.form}
      >
        <Form className={css.form} id="addContactForm">
          <ContactFormLabel
            labelName={'Name'}
            type={'text'}
            placeholder={'Homer Simpson'}
          />
          <ContactFormLabel
            labelName={'Number'}
            type={'tel'}
            placeholder={'+15501234567'}
          />
        </Form>
      </Formik>
      <Button form="addContactForm" buttonType={'submit'}>
        Add contact
      </Button>
    </>
  );
};

export default ContactForm;
