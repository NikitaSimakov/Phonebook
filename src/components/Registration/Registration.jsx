import { signUp } from 'api/auth';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else setName(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    dispatch(signUp({ name, email, password }))
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
    <>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <label htmlFor="name">
          Name
          <input onChange={handleChange} type="name" name="name" />
        </label>
        <label htmlFor="email">
          Email
          <input onChange={handleChange} type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input onChange={handleChange} type="password" name="password" />
        </label>
        <button type="sumbit">Send</button>
      </form>
    </>
  );
};
