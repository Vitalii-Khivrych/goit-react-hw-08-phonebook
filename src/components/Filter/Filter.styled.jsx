import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  :hover {
    color: rgb(28, 76, 82);
    font-weight: 500;
  }
`;

export const FilterInput = styled.input`
  margin-top: 6px;
  width: 70%;

  outline: none;
  border-radius: 3px;
  border: 1.5px solid rgba(50, 49, 49, 0.442);

  :focus {
    border-color: teal;
  }
`;
