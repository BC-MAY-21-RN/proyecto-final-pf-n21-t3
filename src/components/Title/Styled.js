import styled from 'styled-components/native';

export const Container = styled.View` 
  justify-content: space-between; 
  flex-direction: row;
  width: 100%;
  height: 100px;
  align-items: center;
  padding-right: 20%;

`;
export const TitleText = styled.Text`
    color: white;
    font-size: 50px;
    font-family: "BebasNeue-Regular";
    text-decoration: underline white;
`;
export const Logo = styled.Image.attrs(props => ({
    source: require('../../assets/img/Logo2.png'),
  }))`
  width: 80px;
  height: 80px;
`;

