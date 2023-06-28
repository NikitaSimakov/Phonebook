import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
      <h1>We are welcome in our application!</h1>
      <p>Here you can save your contacts</p>
      <Link to="/login">Login</Link>
    </>
  );
};
