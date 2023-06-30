// import Loader from "components/Loader/Loader"
// import { Suspense } from 'react';
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
      console.log('refreshing');
      dispatch(refreshUserThunk());
    }
  }, [dispatch, token, userName]);
  return (
    <>
      <Header />
      {/* <Suspense fallback={<Loader/>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};

export default Layout;
