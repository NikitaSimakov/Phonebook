// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsLoading } from '../../redux/selectors';
// import { signUpThunk } from '../../redux/auth/thunks';
// import { Notify } from 'notiflix';
// import { Button } from '../../components/Button/Button';
// import {
// Formik,
// Form,
// Field,
// ErrorMessage,
//   FormikHelpers as FormikActions,
// } from 'formik';
// import * as yup from 'yup';
// import YupPassword from 'yup-password';
// // import CircularIndeterminate from '../../components/CircularProgress/CircularProgress';
// // import css from './Registration.module.scss';
// import { AppDispatch } from '../../redux/store';
import AuthBlock from '../../components/Auth/AuthBlock/AuthBlock';
import RegistrationForm from '../../components/Auth/AuthForm/RegistrationForm';
import { RegistrationFormLabel } from '../../components/Auth/AuthForm/RegistrationFormLabel/RegistrationFormLabel';

export interface IValues {
  name: string;
  email: string;
  password?: string;
}

export const Registration = () => {
  // const navigate = useNavigate();
  // const isLoading = useSelector(selectIsLoading);
  // const dispatch = useDispatch<AppDispatch>();

  // const initialValues: IValues = {
  //   name: '',
  //   email: '',
  //   password: '',
  // };

  // YupPassword(yup);
  // const schema = yup.object().shape({
  //   name: yup.string().min(2).required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().required('Please Enter your password').password(),
  // });

  // const handleSubmit = (
  //   { name, email, password }: IValues,
  //   { resetForm }: FormikActions<IValues>
  // ) => {
  //   resetForm();
  //   dispatch(signUpThunk({ name, email, password }))
  //     .unwrap()
  //     .then(() => {
  //       Notify.success('Sign Up Success');
  //       navigate('/login');
  //     })
  //     .catch(() => {
  //       Notify.failure('Sign Up Failure');
  //     });
  // };

  return (
    <AuthBlock
      title={'Registration'}
      paragraph={'We welcome to our application'}
    >
      <RegistrationForm authType={'registration'}>
        <RegistrationFormLabel labelName={'Name'} type={'text'} />
        <RegistrationFormLabel labelName={'Email'} type={'email'} />
        <RegistrationFormLabel labelName={'Password'} type={'password'} />
      </RegistrationForm>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.loginLabel} htmlFor="name">
            <p className={css.labelName}>Name</p>
            <Field className={css.input} type="text" name="name"></Field>
            <ErrorMessage name="name" />
          </label>
          <label className={css.loginLabel} htmlFor="email">
            <p className={css.labelName}>Email</p>
            <Field className={css.input} type="email" name="email"></Field>
            <ErrorMessage name="email" />
          </label>
          <label className={css.loginLabel} htmlFor="password">
            <p className={css.labelName}>Password</p>
            <Field
              className={css.input}
              type="password"
              name="password"
            ></Field>
            <ErrorMessage name="password" />
          </label>
          <Button buttonType={'submit'}>
            Send
            {isLoading && (
              <div className={css.loginLoading}>{CircularIndeterminate()}</div>
            )}
          </Button>
        </Form>
      </Formik> */}
    </AuthBlock>
  );
};
