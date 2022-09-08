import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  :last-child {
    margin-bottom: 0;
  }
`;
