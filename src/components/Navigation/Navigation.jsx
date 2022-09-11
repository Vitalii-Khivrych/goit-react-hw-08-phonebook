import React from 'react';
import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';
import { NavLinkStyled } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {!isLoggedIn ? (
        <NavLinkStyled to="/">Home</NavLinkStyled>
      ) : (
        <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
      )}
    </nav>
  );
}
