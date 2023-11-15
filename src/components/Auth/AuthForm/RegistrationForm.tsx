import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, FormikHelpers as FormikActions } from 'formik';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { useAppDispatch } from '../../../redux/hooks';
import { loginThunk, signUpThunk } from '../../../redux/auth/thunks';
import { Notify } from 'notiflix';
import { selectIsAuth } from '../../../redux/selectors';
import AuthButton from '../AuthButton/AuthButton';
import css from './RegistrationForm.module.scss';

export interface IValues {
  name?: string | undefined;
  email: string;
  password: string;
}
// interface LoginInitState {
//   email: string;
//   password: string;
// }

interface AuthFormProps {
  authType: string;
  children: ReactNode;
}

const RegistrationForm: FC<AuthFormProps> = ({ authType, children }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);

  if (isAuth) navigate('/contacts');

  YupPassword(yup);

  const selectInititialValues = (type: string) => {
    switch (type) {
      case 'registration':
        return { name: '', email: '', password: '' };
      default:
        return { email: '', password: '' };
    }
  };
  const selectSchema = (type: string) => {
    switch (type) {
      case 'registration':
        return yup.object().shape({
          name: yup.string().min(2).required(),
          email: yup.string().email().required(),
          password: yup
            .string()
            .required('Please Enter your password')
            .password(),
        });
      case 'login':
        return yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required('Please Enter your password'),
        });
    }
  };
  const selectHandleDispatch = async (values: IValues, type: string) => {
    if (type === 'registration') {
      const { name, email, password } = values;
      try {
        await dispatch(signUpThunk({ name, email, password })).unwrap();
        Notify.success('Sign Up Success');
        navigate('/login');
      } catch {
        Notify.failure('Oops! Sign Up Failure');
      }
    } else {
      const { email, password } = values;
      try {
        await dispatch(loginThunk({ email, password })).unwrap();
        navigate('/contacts');
        Notify.success('Login Success!');
      } catch {
        Notify.failure('Oops! Login failure! Try again');
      }
    }
  };
  const handleSubmit = (
    values: IValues,
    { resetForm }: FormikActions<IValues>
  ) => {
    resetForm();
    selectHandleDispatch(values, authType);
  };

  return (
    <Formik
      initialValues={selectInititialValues(authType)}
      validationSchema={selectSchema(authType)}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        {children}
        <AuthButton />
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
