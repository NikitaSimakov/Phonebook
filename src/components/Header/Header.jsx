import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import css from './Header.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.header_wrapper}>
      <nav className={css.nav}>
        <button>
          <NavLink className={css.header_home} to="/">
            Home
          </NavLink>
        </button>
        {isAuth ? (
          <button>
            <NavLink className={css.header_home} to="/Contacts">
              Contacts
            </NavLink>
          </button>
        ) : null}
        {isAuth ? (
          <UserMenu />
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Header;
