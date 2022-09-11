import React from 'react';

import {
  Box,
  NavLinkStyled,
  LoginIconStyled,
  RegisterIconStyled,
} from './AuthNav.styled';

const navItems = [
  { href: '/register', text: 'Register', icon: RegisterIconStyled },
  { href: 'login', text: 'Login', icon: LoginIconStyled },
];

function AuthNav() {
  return (
    <Box>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavLinkStyled to={href} key={href}>
          <Icon />
          {text}
        </NavLinkStyled>
      ))}
    </Box>
  );
}

export { AuthNav };
