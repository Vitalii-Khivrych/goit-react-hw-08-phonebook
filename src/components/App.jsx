import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from 'components';
import { PrivateRoute, PublicRoute } from 'routes';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

const Home = lazy(() => import('../pages/Home'));
const SignIn = lazy(() => import('../pages/SignIn'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export function App() {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute to="/contacts" restricted>
                <Home />
              </PublicRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute to="/contacts" restricted>
                <Register />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute to="/contacts" restricted>
                <SignIn />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivateRoute to="/login" replace>
                <Contacts />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
}
