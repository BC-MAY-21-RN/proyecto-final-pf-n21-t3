import styled from 'styled-components/native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const CardContainer = styled.View`
  flex-direction: row;
  border: 1px solid black;
  height: 100px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  margin: 5px 0px 5px 0px;
  background-color: ${props => props.BackColor || '#C8A6FF'}
  border-radius: 18px;
  margin-bottom: 5px
  `;

export const CardContainers = styled.View`
  flex-direction: row;
  border: 1px solid black;
  height: 80px;
  padding: 10px 10px 10px 10px;
  width: 100%;
  margin: 5px 0px 5px 0px;
  background-color: ${props => props.BackColor || '#C8A6FF'}
  border-radius: 18px;
  margin-bottom: 5px
  `;

export const SafeCard = styled(SafeAreaView)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const TrackTitle = styled.Text`
  text-align: ${props => props.TextPosition || 'left'};
  font-size: ${props => props.TextSize || '22px'};
  color: ${props => props.TextColor || '#3C1A89'};
  width: ${props => props.Wdth || '50%'};
  font-family: 'BebasNeue-Regular';
`;

export const RankingNumber = styled.Text`
  font-family: 'BebasNeue-Regular';
  color: black;
  font-size: 24px;
  width: 10%;
  height: 100%;
`;

export const TrackImage = styled.Image`
  width: 25%;
  height: 100%;
  margin: 2px;
  border-radius: 12px;
`;
export const TrackImages = styled.Image`
  width: 25%;
  height: 40%;
  margin: 2px;
  border-radius: 12px;
`;

export const ContCard = styled.View`
  align-items: center;
  background: #fff064;
  border-radius: 18px;
  padding: ${props => props.P || '0px 5px 0px 5px'};
  border: solid 2px black;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '350px'};
  margin-bottom: 20px;
`;

export const ContCards = styled.View`
  align-items: center;
  background: #fff064;
  border-radius: 18px;
  padding: ${props => props.P || '0px 5px 0px 5px'};
  border: solid 2px black;
  width: 100%;
  height: 650px;
  margin-bottom: 20px;
`;

export const ViewIcon = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 15%;
  height: 100%;
`;
export const InpCon = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 150px;
  padding: 0px 10px 0px 10px;
  margin: 0% 0% 7% 0%;
`;
