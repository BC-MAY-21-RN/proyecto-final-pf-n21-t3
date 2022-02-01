import React from 'react';
import {CardInfo} from './CardInfo';
import {FlatList} from 'react-native';
import {Musica} from '../../assets/PrubaArtist.json';
import {ContCard} from './Styled';

export const CardList = props => {
  const renderPlace = ({item}) => {
    return <CardInfo props={item} />;
  };
  return (
    <ContCard>
      <FlatList
        data={Musica}
        renderItem={renderPlace}
        keyExtractor={item => item.id}
        horizontal={false}
      />
    </ContCard>
  );
};
