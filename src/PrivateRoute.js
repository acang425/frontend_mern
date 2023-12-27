import React from 'react';
import { Route } from 'react-router-dom';
import { useNavigate,useLocation } from 'react-router-dom';

const PrivateRoute = ({ path, element: Element, ...rest }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token'); // 检查用户是否已登录
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      path={path}
      element={isAuthenticated ? <Element /> : navigate('/login')}
    />
  );
};
export default PrivateRoute;
