import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  height: 90px;
  padding: 10px 10px 10px 10px;
  margin: 10px 0px 0px 0px;
  width: 100%;
  background-color: #C8A6FF;
  align-items: center;
  border-radius: 18px;
  `;

export const TrackTitle = styled.Text`
  font-size: 18px;
  color: #3C1A89;
  
`

export const RankingNumber = styled.Text`
font-family: "BebasNeue-Regular";
color: black;
font-size: 24px;
`

export const TrackImage = styled.Image`
width: 20%;
height: 100%;
`
export const ContCard = styled(SafeAreaView)`
background: #FFF064;
padding: 7px;
border: solid 2px black;
width: 100%;
height: 60%;
`
