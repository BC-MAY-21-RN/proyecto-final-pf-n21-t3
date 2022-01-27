import styled from 'styled-components/native';
export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 6%;
  background-color: #8231ff;
`;
export const Boton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  border-color: ${props => props.BColor || 'black'};
  border: solid 2px;
  background-color: ${props => props.BackColor || '#FFFFFF'};
  margin: 2% 0% 2% 0%;
  padding: 3px;
  font-weight: bold;
`;
