import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import authSelectors from 'redux/auth/auth-selectors';

export function PublicRoute({ children, restricted = false, to = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return !shouldRedirect ? children : <Navigate to={to} replace />;
}
