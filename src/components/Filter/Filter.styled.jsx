import styled from '@emotion/styled';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  font-size: ${props => props.theme.fontSizes.small};
`;

export const FilterInput = styled.input`
  width: 95%;
  height: 24px;
  margin-top: ${props => props.theme.spacing.step}px;

  outline: none;
  border-radius: ${props => props.theme.spacing.step}px;
  border: 1.5px solid rgba(50, 49, 49, 0.442);

  :focus {
    border-color: ${props => props.theme.colors.btn};
  }
`;
