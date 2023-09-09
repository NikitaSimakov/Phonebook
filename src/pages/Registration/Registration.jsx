import { Notify } from 'notiflix';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './Registration.module.scss';
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
    <section className={css.login}>
      <div className={css.container}>
        <h1 className={css.title}>Registration</h1>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label} htmlFor="name">
            <p className={css.label_name}>Name</p>
            <input
              className={css.input}
              onChange={handleChange}
              type="text"
              name="email"
            ></input>
          </label>
          <label className={css.login_label} htmlFor="email">
            <p className={css.label_name}>Email</p>
            <input
              className={css.input}
              onChange={handleChange}
              type="password"
              name="password"
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
      </div>
      <div className={css.right_side}></div>
    </section>
  );
};
