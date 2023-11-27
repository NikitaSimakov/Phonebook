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
}

const ContactForm: FC<IContactFormProps> = ({ onSubmit }) => {
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
  return (
    <section className={css.formWrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        <Form className={css.form}>
          <h1 className={css.title}>Add new contact</h1>
          <div className={css.labelWrapper}>
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
            <Button buttonType={'submit'}>Add contact</Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ContactForm;
