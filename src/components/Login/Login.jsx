import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/thunks';

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
        <label htmlFor="email">
          Email
          <input onChange={handleChange} type="text" name="email" />
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
