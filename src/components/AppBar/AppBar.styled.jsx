import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const AppLink = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  color: white;

  margin-left: 15px;

  :not(:last-child) {
    margin-left: 0;
  }

  &.active {
    color: #f1760c;
    font-weight: bold;
  }
`;
