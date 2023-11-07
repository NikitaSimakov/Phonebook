import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/selectors';
import { RouteProps } from '../PrivateRoute/PrivateRoute';

export const PublicRoute: FC<RouteProps> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return !isAuth ? <>{children}</> : <Navigate to="/contacts" />;
};
