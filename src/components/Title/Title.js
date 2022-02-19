import React from 'react';
import {Container, TitleText, Logo} from './Styled';

export const Title = ({Titulo}) => {
  return (
    <Container>
      <Logo />
      <TitleText>{Titulo}</TitleText>
    </Container>
  );
};
