import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsAuth } from 'redux/selectors';

export const WelcomePage = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <>
      <h1>We are welcome in our application!</h1>
      <p>Here you can save your contacts</p>
      {isAuth ? null : <Link to="/login">Login</Link>}
    </>
  );
};
