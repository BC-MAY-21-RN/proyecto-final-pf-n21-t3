import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addFavorite, removeFavorite} from '../../../redux/Actions';
import {Store} from '../../../redux/Store';


export function setLikeSong(data, like) {
  like
    ? Store.dispatch(
        removeFavorite({
          id: data.album.id,
        }),
      )
    : Store.dispatch(
        addFavorite({
          name: data.album.name,
          artists: data.artists[0].name,
          id: data.album.id,
          image: data.album.images[0].url,
          preview_url: data.preview_url ? data.preview_url : 'https://p.scdn.co/mp3-preview/a270730db8c094877900b167a41d186ce6755d0a?cid=5914e5016a704b0c84b27239cfee6242'
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


export const LikeButton = ({ size, like, onPress }) => (
  <Ionicons
    name={like ? 'heart-circle' : 'heart-circle-outline'}
    onPress={onPress}
    color={like ? 'yellow' : 'black'}
    size={size}
  />
);
