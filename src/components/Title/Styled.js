import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  width: 95%;
  height: 100px;
  align-items: center;
`;

export const TitleText = styled.Text`
  color: ${props => props.Col || 'white'};
  font-size: ${props => props.W || '45px'};
  padding: 0px 0px 0px 3%;
  font-family: 'BebasNeue-Regular';
  text-decoration: underline white;
`;

export const Logo = styled.Image.attrs(props => ({
  source: require('../../assets/img/Logo2.png'),
}))`
  width: 80px;
  height: 80px;
`;

export const PlayView = styled.View`
  flex-direction: row;
  padding: ${props => props.P || '0% 10% 10% 5%'};
  width: 100%; 
  align-items: center;
`;