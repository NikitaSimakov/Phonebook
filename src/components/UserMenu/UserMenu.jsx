import { Button } from '@mui/material';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsLoading,
  selectToken,
  selectUserName,
} from 'redux/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import css from './UserMenu.module.css';
import CircularIndeterminate from 'components/CircularProgress/CircularProgress';

export const UserMenu = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
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
        variant="outlined"
        className={css.logout_button}
        onClick={handleLogOut}
      >
        Log out
        {isLoading && token && (
          <div className={css.logout_loading}>{CircularIndeterminate()}</div>
        )}
      </Button>
    </div>
  ) : (
    <div className={css.userMenuWrapper}>
      <Button
        onClick={() => {
          navigate('/register');
        }}
        // className={css.signin_button}
        variant="outlined"
      >
        Sign Up
      </Button>
      <Button
        onClick={() => {
          navigate('/login');
        }}
        className={css.logout_button}
        variant="contained"
      >
        Log In
      </Button>
    </div>
  );
};
