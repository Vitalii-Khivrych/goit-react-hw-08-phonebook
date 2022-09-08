import styled from 'styled-components';

export const Text = styled.p`
  font-size: 17px;
  font-weight: 400;
`;

export const Wraper = styled.div`
  width: 310px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 44px;
  height: 20px;

  font-size: 11px;

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
