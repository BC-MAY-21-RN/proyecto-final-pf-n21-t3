import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: ${props => props.Padd || '6%'};
  background-color: #8231ff;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('../assets/img/Logo.png'),
  }))`
  min-width: 150px;
  min-height: 250px;
  max-width: 55%;
  max-height: 35%;
  margin: 0% 0% 7% 0%; 
`;

export const Boton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 21px;
  width: ${props => props.Width || '88%'};
  height: 50px;
  border: 2.5px;
  border-color: ${props => props.BColor || 'black'};
  background-color: ${props => props.BackColor || '#FFFFFF'};
  margin: 2% 0% 2% 0%;
  font-size: 25px;
  border-top:2%;
  fontFamily:"BebasNeue-Regular";
  
`;

export const Texto = styled.Text`
  font-size: ${props => props.TextSize || '26px'};
  color: white;
  font-family: "BebasNeue-Regular";
`;

export const ScrlVw = styled.ScrollView`
  padding: ${props => props.P || '0% 10% 0% 5%'};
  width: 100%; 
`;

export const Horizontal = styled.View`

flex-direction: row;
justify-content: space-between;
width: 80%;
`
export const Trak = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  space-between: 40px;
  padding: 0% 10% 0% 5%;
`;

