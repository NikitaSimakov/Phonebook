import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';
import css from './Login.module.css';
import { Button, TextField } from '@mui/material';

export const Login = () => {
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
  //   console.log({ email, password });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <div className={css.login_wrapper}>
          <label htmlFor="email">
            Email
            <TextField
              size="small"
              onChange={handleChange}
              type="text"
              name="email"
            ></TextField>
          </label>
          <label htmlFor="password">
            Password
            <TextField
              size="small"
              onChange={handleChange}
              type="password"
              name="password"
            ></TextField>
          </label>
          <Button variant="outlined" type="sumbit">
            Send
          </Button>
        </div>
      </form>
      <Button
        size="small"
        className={css.login_button}
        variant="contained"
        onClick={() => {
          navigate('/register');
        }}
      >
        Sign In
      </Button>
      {/* <Link to="/register">Sign In</Link> */}
    </>
  );
};
