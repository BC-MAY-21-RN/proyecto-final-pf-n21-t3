import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.View`
  flex-direction: row;
  width: 95%;
  height: 100px;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${props => props.Col || 'white'};
  font-size: ${props => props.W || '45px'}
  font-family: 'BebasNeue-Regular';
  margin: 2% 2% 0% 2%;
  text-decoration: underline white;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('../../assets/img/Logo2.png'),
}))`
  width: 80px;
  height: 80px;
`;

export const PlayTittleView = styled(SafeAreaView)`
flex-direction: row;
align-items: flex-end;
padding: 5% 0% 5% 0%;
margin: 0% 0% 3% 0%;
width: 90%;
`

export const PlayView = styled.View`
  flex-direction: row;
  padding: ${props => props.P || '0% 0% 5% 0%'};
  width: 100%; 
  align-items: center;
`;