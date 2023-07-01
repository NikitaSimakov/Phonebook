// import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import css from './UserMenu.module.css';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => Notify.success('See you later!'))
      .catch(() => Notify.failure('Sorry! Logout error'));
  };
  return isAuth ? (
    <div className={css.userMenuWrapper}>
      <p className={css.welcome_message}>Hello, {userName}</p>
      <Button
        variant="contained"
        className={css.logout_button}
        onClick={handleLogOut}
      >
        Logout
      </Button>
    </div>
  ) : (
    <div className={css.userMenuWrapper}>
      <Button
        onClick={() => {
          navigate('/register');
        }}
        className={css.signin_button}
        variant="outlined"
      >
        Sign In
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        className={css.logout_button}
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};
