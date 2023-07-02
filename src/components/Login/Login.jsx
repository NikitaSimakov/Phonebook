import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';
import { Button, TextField } from '@mui/material';
import css from './Login.module.css';
import { selectIsLoading } from 'redux/selectors';
import CircularIndeterminate from 'components/CircularProgress/CircularProgress';

export const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div className={css.login_wrapper}>
          <label className={css.login_label} htmlFor="email">
            <p className={css.label_name}>Email</p>
            <TextField
              size="small"
              onChange={handleChange}
              type="text"
              name="email"
            ></TextField>
          </label>
          <label className={css.login_label} htmlFor="password">
            <p className={css.label_name}>Password</p>
            <TextField
              size="small"
              onChange={handleChange}
              type="password"
              name="password"
            ></TextField>
          </label>
          <Button className={css.login_button} variant="outlined" type="sumbit">
            Send
            {isLoading && (
              <div className={css.login_loading}>{CircularIndeterminate()}</div>
            )}
          </Button>
        </div>
      </form>
      <div className={css.login_signin_wrapper}>
        <p className={css.login_signin_text}>Not registered yet?</p>
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
    </>
  );
};
