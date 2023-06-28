import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/selectors';
import css from './Header.module.css';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  return (
    <div className={css.header_wrapper}>
      <nav className={css.nav}>
        <NavLink className={css.header_home} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <p className={css.header_signin}>Hello, {userName}</p>
        ) : (
          <NavLink className={css.header_signin} to="/register">
            Sign In
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
