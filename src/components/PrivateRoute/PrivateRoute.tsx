import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../../redux/selectors';

export interface RouteProps {
  children: ReactNode
}

export const PrivateRoute:FC<RouteProps> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
};
