import { UserMenu } from '../UserMenu/UserMenu';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import { refreshUserThunk } from '../../redux/auth/thunks';
import { useAppDispatch } from '../../redux/hooks';
import { selectToken, selectUserName } from '../../redux/selectors';
const { Outlet } = require('react-router-dom');

const Layout = () => {
  const token = useSelector(selectToken);
  const userName = useSelector(selectUserName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token && !userName) {
      dispatch(refreshUserThunk());
    }
  }, [dispatch, token, userName]);

  return (
    <>
      <Header>
        <UserMenu />
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
