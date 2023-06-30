import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/selectors';
// import Button from '@mui/material/Button';
import { Button } from '@mui/material';
import css from './Header.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className={css.header_wrapper}>
      <nav className={css.nav}>
        <Button
          onClick={() => {
            navigate('/');
          }}
          className={css.nav_button}
          variant="outlined"
        >
          Home
        </Button>
        {isAuth ? (
          <Button
            onClick={() => {
              navigate('/contacts');
            }}
            className={css.nav_button}
            variant="outlined"
          >
            Contacts
          </Button>
        ) : null}
      </nav>
      <UserMenu />
    </div>
  );
};

export default Header;
