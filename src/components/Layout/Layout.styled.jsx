import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.mainBackground};

  box-shadow: 0px 2px 10px 1px ${props => props.theme.colors.dark};
  /* border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; */

  height: 70px;
`;
