import styled from 'styled-components/native';

export const InpCon = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 99%;
  height: 50px;
  padding: 5px 0px 0px 10px;
  background: white;
  border: solid 3px;
  border-color: black;
  border-radius: 12px;
  margin: 0% 0% 7% 0%;
`;

export const Input = styled.TextInput.attrs(props => ({
    placeholderTextColor: "#808080",
  }))`
  padding-left: 10px;
  font-weight: bold;
  height: 55px;
  width: 100%;
  font-size: 25px;
  
`;
export const Textstar = styled.Text`
    color: ${props => props.Color || 'white'};
    font-size: 15px;
    font-weight: bold;
`;
export const CBoxCon = styled.View`
  flex-direction: row;
  margin-top: 3px;
  align-items: center;
  `;

export const CheckText = styled.View`
 align-items: center;
 justify-content: space-between;  
`;

export const Image = styled.Image`
  height: 20px;
  width: 20px;
  `;


