import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/thunks';
import { Button } from '../../components/Button/Button';
import css from './Login.module.scss';
import { selectIsAuth, selectIsLoading } from '../../redux/selectors';
import CircularIndeterminate from '../../components/CircularProgress/CircularProgress';
import { Notify } from 'notiflix';
import { AppDispatch } from '../../redux/store';
import AuthBlock from '../../components/Auth/AuthBlock/AuthBlock';

export const Login = () => {
  const isLoading = useSelector(selectIsLoading);

  const isAuth = useSelector(selectIsAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  if (isAuth) {
    return <Navigate to="/contacts" replace />;
  }
  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (name === 'email') {
      setEmail(value);
    } else setPassword(value);
  };
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        Notify.success('Login success!');
      })
      .catch(() => {
        Notify.failure('Oop! Login failure! Try again');
      });
  };

  return (
    <AuthBlock
      title={'Let’s Sign You In'}
      paragraph={'Welcome back, you’ve been missed!'}
    >
      {/* <section className={css.login}>
        <div className={css.container}>
          <h1 className={css.title}>Let’s Sign You In</h1> */}
      {/* <p className={css.text}>Welcome back, you’ve been missed!</p> */}

      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor="email">
          <p className={css.labelName}>Email</p>

          <input
            className={css.input}
            onChange={handleChange}
            type="text"
            name="email"
          ></input>
        </label>
        <label className={css.loginLabel} htmlFor="password">
          <p className={css.labelName}>Password</p>
          <input
            className={css.input}
            onChange={handleChange}
            type="password"
            name="password"
          ></input>
        </label>
        <Button buttonType={'submit'}>
          Send
          {isLoading && (
            <div className={css.loginLoading}>{CircularIndeterminate()}</div>
          )}
        </Button>
      </form>
      <div className={css.linkboxSignin}>
        <p className={css.text}>Not registered yet?</p>
        <Button
          event={() => {
            navigate('/register');
          }}
        >
          Sign Up
        </Button>
      </div>
      {/* </div>
        <div className={css.rightSide}></div>
      </section> */}
    </AuthBlock>
  );
};
