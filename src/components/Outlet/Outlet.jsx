// import Loader from "components/Loader/Loader"
// import { Suspense } from 'react';
import Header from 'components/Header/Header';
const { Outlet } = require('react-router-dom');

const Layout = () => {
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
