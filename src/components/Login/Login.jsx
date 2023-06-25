import { logIn } from 'api/auth';
import { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    } else setPassword(value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    logIn({ email, password }).then(console.log);
  };
  console.log({ email, password });
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
