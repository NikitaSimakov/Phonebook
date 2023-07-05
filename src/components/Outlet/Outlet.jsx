import { logOut } from 'redux/auth/auth';
import Header from 'components/Header/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'redux/auth/thunks';
import { selectToken, selectUserName } from 'redux/selectors';
const { Outlet } = require('react-router-dom');

const Layout = () => {
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && !userName) {
      dispatch(refreshUserThunk())
        .unwrap()
        .catch(() => dispatch(logOut()));
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
