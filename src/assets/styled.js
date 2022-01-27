import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 6%;
  background-color: #8231ff;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('../assets/img/Logo.png'),
}))`
  width: 60%; 
  height: 45%;
`;

export const Boton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  border: 2.5px;
  border-color: ${props => props.BColor || 'black'};
  background-color: ${props => props.BackColor || '#FFFFFF'};
  margin: 2% 0% 2% 0%;
`;
