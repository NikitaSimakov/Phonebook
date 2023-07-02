import { Notify } from 'notiflix';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import css from './Registration.module.css';
import CircularIndeterminate from 'components/CircularProgress/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { signUpThunk } from 'redux/auth/thunks';

export const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else setName(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(signUpThunk({ name, email, password }))
      .then(() => {
        Notify.success('Sign Up Success');
        navigate('/login');
      })
      .catch(() => {
        Notify.failure('Sign Up Failure');
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className={css.sigin_wrapper}>
          <label className={css.signin_label} htmlFor="name">
            <p className={css.siginin_label_name}>Name</p>
            <TextField
              size="small"
              onChange={handleChange}
              type="name"
              name="name"
            />
          </label>
          <label className={css.signin_label} htmlFor="email">
            <p className={css.siginin_label_name}>Email</p>
            <TextField
              size="small"
              onChange={handleChange}
              type="email"
              name="email"
            />
          </label>
          <label className={css.signin_label} htmlFor="password">
            <p className={css.siginin_label_name}>Password</p>
            <TextField
              size="small"
              onChange={handleChange}
              type="password"
              name="password"
            />
          </label>
          <Button className={css.sigin_button} variant="outlined" type="sumbit">
            Send
            {isLoading && (
              <div className={css.logout_loading}>
                {CircularIndeterminate()}
              </div>
            )}
          </Button>
        </div>
      </form>
    </>
  );
};
