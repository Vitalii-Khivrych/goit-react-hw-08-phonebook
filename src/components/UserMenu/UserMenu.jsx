import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';
import authOperations from 'redux/auth/auth-operations';
import { Box, Text, ButtonStyled } from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const hanleLogOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Box>
      <Text>Hello, {name}</Text>
      <ButtonStyled type="button" onClick={hanleLogOut}>
        Log Out
      </ButtonStyled>
    </Box>
  );
}
