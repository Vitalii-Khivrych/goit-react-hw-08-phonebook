import { UserMenu, AuthNav, Navigation } from 'components';
import { useSelector } from 'react-redux';

import { AppNav } from './AppBar.styled';
import authSelectors from '../../redux/auth/auth-selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <AppNav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppNav>
  );
};
