import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const hanleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div style={styles.container}>
      <p style={styles.name}>Hello, {name}</p>
      <button type="button" onClick={hanleLogOut}>
        Выйти
      </button>
    </div>
  );
}

export { UserMenu };
