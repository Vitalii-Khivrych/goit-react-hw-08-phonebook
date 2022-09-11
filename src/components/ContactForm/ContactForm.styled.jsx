import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  width: 320px;
  height: 200px;
  padding: ${props => props.theme.spacing.step * 4}px;

  background: ${props => props.theme.colors.light};
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.spacing.step * 2}px;
`;

export const SearchLabel = styled.label`
  display: contents;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;
`;

export const SearchInput = styled.input`
  width: 95%;
  height: 24px;
  margin-top: ${props => props.theme.spacing.step}px;
  margin-bottom: ${props => props.theme.spacing.step * 3}px;

  outline: none;
  border-radius: ${props => props.theme.spacing.step}px;
  border: 1.5px solid rgba(50, 49, 49, 0.442);

  :focus {
    border-color: ${props => props.theme.colors.btn};
  }
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 120px;
  height: 30px;
  margin: 0 auto;

  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.btn};
  border-radius: ${props => props.theme.spacing.step}px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);

  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 400;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.accent};
  }
`;
