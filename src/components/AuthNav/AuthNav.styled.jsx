import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const Box = styled.div`
  padding: ${props => props.theme.spacing.step * 2}px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;

  display: inline-flex;
  align-items: center;

  transition-property: color, background-color;
  /* transition-duration: 0.2s; */
  /* transition-timing-function: ${props =>
    props.theme.animations.cubicBezier}; */

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  :last-child {
    margin-left: ${props => props.theme.spacing.step * 3}px;
  }

  &.active {
    color: ${props => props.theme.colors.active};

    text-decoration: underline;
    pointer-events: none;
  }
`;

export const LoginIconStyled = styled(LoginIcon)`
  font-size: 22px;
  margin-right: ${props => props.theme.spacing.step * 2}px;
`;

export const RegisterIconStyled = styled(PersonAddIcon)`
  font-size: 22px;
  margin-right: ${props => props.theme.spacing.step * 2}px;
`;
