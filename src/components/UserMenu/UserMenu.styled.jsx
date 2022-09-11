import styled from '@emotion/styled';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${props => props.theme.spacing.step * 2}px;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.dark};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 700;

  margin-right: ${props => props.theme.spacing.step * 5}px;
  margin-bottom: 0;
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;

  padding: ${props => props.theme.spacing.step * 2}px;
  border-radius: ${props => props.theme.spacing.step}px;

  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;

  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.btn};
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
  }
`;
