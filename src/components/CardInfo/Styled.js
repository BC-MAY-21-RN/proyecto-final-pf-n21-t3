import styled from 'styled-components/native';

export const CardContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid black;
  height: 90px;
  padding: 10px 10px 10px 10px;
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

export const TrackImage = styled.Image.attrs(props =>({
  source: require('../../assets/img/TrackCover.png'),
}) )`
width: 20%;
height: 100%;
`

