import css from './RegistrationForm.module.scss';
import YupPassword from 'yup-password';
import * as yup from 'yup';
import { Formik, Form, FormikHelpers as FormikActions } from 'formik';
import { useAppDispatch } from '../../../redux/hooks';
import { signUpThunk } from '../../../redux/auth/thunks';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../Button/Button';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../redux/selectors';
import CircularIndeterminate from '../../CircularProgress/CircularProgress';
import { RegistrationFormLabel } from './RegistrationFormLabel/RegistrationFormLabel';

export interface IValues {
  name?: string;
  email: string;
  password?: string;
}

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(selectIsLoading);
  const initialValues: IValues = {
    name: '',
    email: '',
    password: '',
  };
  YupPassword(yup);
  const schema = yup.object().shape({
    name: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().required('Please Enter your password').password(),
  });
  const handleSubmit = (
    { name, email, password }: IValues,
    { resetForm }: FormikActions<IValues>
  ) => {
    resetForm();
    dispatch(signUpThunk({ name, email, password }))
      .unwrap()
      .then(() => {
        Notify.success('Sign Up Success');
        navigate('/login');
      })
      .catch(() => {
        Notify.failure('Sign Up Failure');
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <RegistrationFormLabel labelName={'Name'} type={'text'} />
        <RegistrationFormLabel labelName={'Email'} type={'email'} />
        <RegistrationFormLabel labelName={'Password'} type={'password'} />
        <Button buttonType={'submit'}>
          Send
          {isLoading && (
            <div className={css.loginLoading}>{CircularIndeterminate()}</div>
          )}
        </Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
