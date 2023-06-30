// import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth, selectUserName } from 'redux/selectors';
import { logOutThunk } from 'redux/auth/thunks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const isAuth = useSelector(selectIsAuth);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };
  return (
    <div className={css.userMenuWrapper}>
      <p>{userName}</p>
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};
