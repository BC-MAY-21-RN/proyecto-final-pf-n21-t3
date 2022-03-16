import React, {useState} from 'react';
import {Container, ScrlVw, TextSong, Viewlogo} from '../assets/styled.js';
import {InputLog} from '../components/index';
import {SearchHelper} from '../components/buscador/SearchHelper.js';
import {SearchIcons, SearchResults} from '../components/index';
import {Logo} from '../components/Title/Styled';

export const Search = ({navigation}) => {
  const [searchtext, setsearchtext] = useState('');
  const [selected, setSelected] = useState('album,track,playlist');

  return (
    <Container Padd={'0%'}>
      <ScrlVw>
        <Viewlogo>
          <Logo />
          <TextSong>Busqueda</TextSong>
        </Viewlogo>
        <InputLog
          placeholderAdj={'Canciones, Albunes o Playlist'}
          onChangeText={evento => {
            setsearchtext(evento);
            SearchHelper(selected, evento).catch(err => {
              console.log('error de spotysearch' + err);
            });
          }}
        />
        <SearchIcons
          searchtext={searchtext}
          setSelected={setSelected}
          selected={selected}
        />
        <SearchResults
          searchtext={searchtext}
          selected={selected}
          navigation={navigation}
        />
      </ScrlVw>
    </Container>
  );
};
