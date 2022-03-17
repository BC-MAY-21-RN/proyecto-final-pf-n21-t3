import {View} from 'react-native';
import React from 'react';
import {SearchSection} from '../../assets/styled';
import {IconComponent} from './IconComponent';

export const SearchIcons = ({searchtext, setSelected, selected}) => {
  return (
    <View>
      <SearchSection>
        <IconComponent
          iconName={'musical-notes-outline'}
          name={'track'}
          searchtext={searchtext}
          setSelected={setSelected}
          nameSection={'Canciones'}
          selected={selected}
        />
        <IconComponent
          iconName={'albums-outline'}
          name={'album'}
          searchtext={searchtext}
          setSelected={setSelected}
          nameSection={'Álbumes'}
          selected={selected}
        />
        <IconComponent
          iconName={'library-outline'}
          name={'playlist'}
          searchtext={searchtext}
          setSelected={setSelected}
          nameSection={'Playlists'}
          selected={selected}
        />
      </SearchSection>
    </View>
  );
};

export default SearchIcons;
