import React from 'react';
import {Container, TitleText, Logo} from './Styled';

export const Title = ({Titulo, W}) => {
  return (
    <Container>
      <Logo />
      <TitleText W={W}>{Titulo}</TitleText>
    </Container>
  );
};
