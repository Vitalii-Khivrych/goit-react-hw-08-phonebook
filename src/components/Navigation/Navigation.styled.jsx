import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;

  text-transform: uppercase;

  transition-property: color, background-color;
  /* transition-duration: 0.2s; */
  /* transition-timing-function: ${props =>
    props.theme.animations.cubicBezier}; */

  /* transform: scale(0.9); */

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  &.active {
    color: ${props => props.theme.colors.active};

    text-decoration: underline;
    pointer-events: none;
  }
`;
