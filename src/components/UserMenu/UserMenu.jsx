// import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import css from './UserMenu.module.css';
import { Notify } from 'notiflix';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk())
      .unwrap()
      .then(() => Notify.success('See you later!'))
      .catch(() => Notify.failure('Sorry! Logout error'));
  };
  return isAuth ? (
    <div className={css.userMenuWrapper}>
      <p>Hello, {userName}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  ) : (
    <button className={css.logout_button}>
      <Link to="/login">Login</Link>
    </button>
  );
};
