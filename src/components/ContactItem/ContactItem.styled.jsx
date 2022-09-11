import styled from '@emotion/styled';

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 400;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  margin-right: ${props => props.theme.spacing.step * 3}px;
`;

export const Button = styled.button`
  width: 46px;
  height: 26px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.btn};
  border-radius: ${props => props.theme.spacing.step}px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  font-size: 11px;
  font-weight: 400;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
  }

  :not(:last-child) {
    margin-right: ${props => props.theme.spacing.step * 2}px;
  }
`;
