import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import Registration from '../../pages/Registration/Registration';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import Contacts from '../../pages/Contacts/Contacts';
import NotFound from '../../pages/NotFound/NotFound';
import Login from '../../pages/Login/Login';
import Layout from '../Outlet/Outlet';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicRoute from '../PublicRoute/PublicRoute';
import css from './App.module.scss';
import { selectIsRefreshing } from '../../redux/selectors';

const App: FC<{}> = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <main className={css.appWrapper}>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </main>
  );
};

export default App;
