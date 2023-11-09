import Header from '../Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk, logOutThunk } from '../../redux/auth/thunks';
import { selectToken, selectUserName } from '../../redux/selectors';
import { AppDispatch } from '../../redux/store';
const { Outlet } = require('react-router-dom');

const Layout = () => {
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (token && !userName) {
      dispatch(refreshUserThunk())
        .unwrap()
        .catch(() => dispatch(logOutThunk()));
    }
  }, [dispatch, token, userName]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
