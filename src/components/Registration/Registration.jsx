import { Login } from 'components/Login/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else setName(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log({ name, email, password });
  };
  // console.log(name, email, password);
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
      <Link to="/login">Log In</Link>
    </>
  );
};
