import styled from 'styled-components';

export const SearchForm = styled.form`
  margin: 0 auto;
  padding: 6px;
  margin-bottom: 15px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  border: 2px solid #6faa9a;
  border-radius: 5px;
`;

export const SearchLabel = styled.label`
  display: contents;

  :hover {
    color: rgb(28, 76, 82);
    font-weight: 500;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  margin-bottom: 10px;
  outline: none;
  border-radius: 3px;
  border: 1.5px solid rgba(50, 49, 49, 0.442);

  :focus {
    border-color: teal;
  }
`;

export const SearchBtn = styled.button`
  width: 120px;
  height: 30px;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(91, 153, 153);

  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border: none;
  border-radius: 4px;

  cursor: pointer;

  :hover {
    background-color: rgb(109, 206, 206);
  }
`;
