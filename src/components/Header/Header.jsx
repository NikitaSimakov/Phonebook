import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selectors';

import css from './Header.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

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
      </nav>
      <UserMenu />
    </div>
  );
};

export default Header;
