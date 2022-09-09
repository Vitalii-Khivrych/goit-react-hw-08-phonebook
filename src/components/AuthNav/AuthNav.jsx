import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/register', text: 'Register', icon: PersonAddIcon },
  { href: 'login', text: 'Login', icon: LoginIcon },
];

function AuthNav() {
  return (
    <div>
      {navItems.map(({ href, text, icon: Icon }) => (
        <NavLink to={href} key={href}>
          <Icon />
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export { AuthNav };
