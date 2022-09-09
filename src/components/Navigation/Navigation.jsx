import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ContactsIcon from '@mui/icons-material/Contacts';

import authSelectors from 'redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
};

function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      {!isLoggedIn ? (
        <NavLink to="/" style={styles.link} activestyle={styles.activeLink}>
          Home
        </NavLink>
      ) : (
        <NavLink
          to="/contacts"
          style={styles.link}
          activestyle={styles.activeLink}
        >
          <ContactsIcon /> Contacts
        </NavLink>
      )}
    </nav>
  );
}

export { Navigation };
