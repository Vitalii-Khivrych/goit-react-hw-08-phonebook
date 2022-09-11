import React from 'react';

import image from 'images/background-image.jpg';
import styled from '@emotion/styled';

function Home() {
  return (
    <Box>
      <Image src={image} alt="Home poster" />
    </Box>
  );
}

export default Home;

const Box = styled.div`
  height: 90vh;
`;

const Image = styled.img`
  height: 100%;
  object-fit: fill;
`;
