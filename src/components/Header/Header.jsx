import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selectors';
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import css from './Header.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={css.header_wrapper}>
      <nav className={css.nav}>
        <Button className={css.nav_button} variant="contained">
          <NavLink className={css.header_home} to="/">
            Home
          </NavLink>
        </Button>
        {isAuth ? (
          <Button className={css.nav_button} variant="contained">
            <NavLink className={css.header_home} to="/Contacts">
              Contacts
            </NavLink>
          </Button>
        ) : null}
      </nav>
      <UserMenu />
    </div>
  );
};

export default Header;
