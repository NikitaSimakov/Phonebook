import { FC, ReactNode } from 'react';
import { Formik, Form, FormikHelpers as FormikActions } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import AuthButton from '../AuthButton/AuthButton';
import css from './AuthForm.module.scss';
import { FormValuesInterface } from '../models/models';
import {
  useSelectHandleDispatch,
  useSelectInititialValues,
  useSelectSchema,
} from './AuthFormLogic';
import { useAppDispatch } from '../../../redux/hooks';

interface AuthFormProps {
  authType: string;
  children: ReactNode;
}

const AuthForm: FC<AuthFormProps> = ({ authType, children }) => {
  const dispatch = useAppDispatch();
  YupPassword(yup);

  const UseHandleSubmit = (
    values: FormValuesInterface,
    { resetForm }: FormikActions<FormValuesInterface>
  ) => {
    resetForm();
    const { dispatcher } = useSelectHandleDispatch(values, authType);
    dispatcher(dispatch);
  };

  return (
    <Formik
      initialValues={useSelectInititialValues(authType)}
      validationSchema={useSelectSchema(authType)}
      onSubmit={UseHandleSubmit}
    >
      <Form className={css.form}>
        {children}
        <AuthButton />
      </Form>
    </Formik>
  );
};

export default AuthForm;
