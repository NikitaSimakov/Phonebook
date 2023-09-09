import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';
import { Button } from '@mui/material';
import css from './Login.module.scss';
import { selectIsAuth, selectIsLoading } from 'redux/selectors';
import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { Notify } from 'notiflix';

export const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  const isAuth = useSelector(selectIsAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isAuth) {
    return <Navigate to="/contacts" replace />;
  }

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else setPassword(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        Notify.success('Login success!');
      })
      .catch(() => {
        Notify.failure('Login failure!');
      });
  };
  return (
    <section className={css.login}>
      <div className={css.container}>
        <h1 className={css.title}>Let’s Sign You In</h1>
        <p className={css.text}>Welcome back, you’ve been missed!</p>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="email">
            <p className={css.label_name}>Email</p>

            <input
              className={css.input}
              onChange={handleChange}
              type="text"
              name="email"
            ></input>
          </label>
          <label className={css.login_label} htmlFor="password">
            <p className={css.label_name}>Password</p>
            <input
              className={css.input}
              onChange={handleChange}
              type="password"
              name="password"
            ></input>
          </label>
          <Button className={css.login_button} variant="outlined" type="sumbit">
            Send
            {isLoading && (
              <div className={css.login_loading}>{CircularIndeterminate()}</div>
            )}
          </Button>
        </form>
        <div className={css.linkbox_signin}>
          <p className={css.text}>Not registered yet?</p>
          <Button
            className={css.login_button_signin}
            size="small"
            variant="contained"
            onClick={() => {
              navigate('/register');
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className={css.right_side}></div>
    </section>
  );
};
