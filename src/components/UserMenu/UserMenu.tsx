import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuth,
  selectIsLoading,
  selectToken,
  selectUserName,
} from '../../redux/selectors';
import CircularIndeterminate from '../CircularProgress/CircularProgress';
import { logOutThunk } from '../../redux/auth/thunks';
import { AppDispatch } from '../../redux/store';
import { Button } from '../Button/Button';
import css from './UserMenu.module.scss';

export const UserMenu = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleLogOut = () => {
    dispatch(logOutThunk());
    // .unwrap()
    // .then(() => Notify.success('See you later!'))
    // .then(() => navigate('/'))
    // .catch(() => Notify.failure('Sorry! Logout error'));
  };
  return isAuth ? (
    <div className={css.wrapper}>
      <p className={css.welcomeMessage}>Hello, {userName}</p>
      <Button className={css.logoutButton} event={handleLogOut}>
        Log out
        {isLoading && token && (
          <div className={css.logoutLoading}>{CircularIndeterminate()}</div>
        )}
      </Button>
    </div>
  ) : (
    <div className={css.wrapper}>
      <Button
        event={() => {
          navigate('/register');
        }}
      >
        Sign Up
      </Button>
      <Button
        event={() => {
          navigate('/login');
        }}
        className={css.logoutButton}
      >
        Log In
      </Button>
    </div>
  );
};
