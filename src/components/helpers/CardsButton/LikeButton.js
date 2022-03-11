import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addFavorite, removeFavorite} from '../../../redux/Actions';
import {Store} from '../../../redux/Store';

export function setLike(data, like) {
  like
    ? Store.dispatch(
        removeFavorite({
          id: data.track.album.id,
        }),
      )
    : Store.dispatch(
        addFavorite({
          name: data.track.album.name,
          artists: data.track.artists[0].name,
          id: data.track.album.id,
          image: data.track.album.images[0].url,
        }),
      );
}

export function setFavoritePlaylist(data, like) {
  like
    ? Store.dispatch(
        removeFavorite({
          id: data.snapshot_id,
        }),
      )
    : Store.dispatch(
        addFavorite({
          name: data.name,
          artists: '',
          image: data.images[0].url,
          id: data.snapshot_id
        }),
      );
}

export const LikeButton = ({size, like, onPress}) => (
  <Ionicons
    name={like ? 'heart-circle' : 'heart-circle-outline'}
    onPress={onPress}
    color={like ? 'red' : 'black'}
    size={size}
  />
);
