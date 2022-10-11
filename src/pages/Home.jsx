import React from 'react';
import styled from '@emotion/styled';

function Home() {
  return (
    <Container>
      <Title>Your Phonebook</Title>
      <Text>Connect with your contacts!</Text>
      <Text>All your contacts in one place</Text>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 85vh;
`;

const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.xxxl};
  color: ${props => props.theme.colors.blue};
  font-weight: 900;
`;

const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
  color: ${props => props.theme.colors.blue};
  font-weight: 900;
`;
