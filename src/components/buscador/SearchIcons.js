import { View } from 'react-native'
import React from 'react'
import {TouchableOpacity} from 'react-native';
import {
  SearchSection,
  SearchSbar,
  TextSeach
} from '../../assets/styled';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SearchHelper} from '../buscador/SearchHelper';
export const SearchIcons = ({searchtext, setSelected, selected}) => {
  return (
    <View>
       <SearchSection>
          <TouchableOpacity
            onPress={() => {
              SearchHelper('track', searchtext).then(() => {
                setSelected('track');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="musical-notes-outline"
                size={50}
                color={selected == 'track' ? 'yellow' : 'black'}
              />
              <TextSeach>Canciones</TextSeach>
            </SearchSbar>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SearchHelper('album', searchtext).then(() => {
                setSelected('album');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="albums-outline"
                size={50}
                color={selected == 'album' ? 'yellow' : 'black'}
              />
              <TextSeach>Albums</TextSeach>
            </SearchSbar>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              SearchHelper('playlist', searchtext).then(() => {
                setSelected('playlist');
              });
            }}>
            <SearchSbar
              style={{
                shadowColor: '#000',
                shadowOffset: {width: 1, height: 1},
                shadowOpacity: 0.4,
                shadowRadius: 3,
                elevation: 5,
              }}>
              <Ionicons
                name="library-outline"
                size={50}
                color={selected == 'playlist' ? 'yellow' : 'black'}
              />
              <TextSeach>Playlist</TextSeach>
            </SearchSbar>
          </TouchableOpacity>
        </SearchSection>

    </View>
  )
}

export default SearchIcons