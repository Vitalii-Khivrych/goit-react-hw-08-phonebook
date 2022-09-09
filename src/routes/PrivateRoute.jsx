import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from 'redux/auth/auth-selectors';

export function PrivateRoute({ children, to = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={to} replace />;
}
