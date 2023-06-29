import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';
import css from './Header.module.css';
import { logOutThunk } from 'redux/auth/thunks';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.header_wrapper}>
      <nav className={css.nav}>
        <NavLink className={css.header_home} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <p className={css.header_signin}>Hello, {userName}</p>
        ) : (
          <NavLink className={css.header_signin} to="/login">
            Login
          </NavLink>
        )}
        {isLoggedIn && (
          <button onClick={handleLogOut} type="button">
            logout
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
