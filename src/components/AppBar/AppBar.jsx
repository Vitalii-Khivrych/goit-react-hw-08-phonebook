import { UserMenu, AuthNav, Navigation } from 'components';
import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};
