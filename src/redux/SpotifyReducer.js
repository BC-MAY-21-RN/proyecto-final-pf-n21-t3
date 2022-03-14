
import {
  SET_TOKEN,
  SET_INFO,
  SET_TOPLIST,
  SET_PLAYLISTS,
  SET_TRACKS,
  SET_PLAYER,
  SET_SEARCHARTISTS,
  SET_SEARCHTRACKS,
  SET_SEARCHALBUMS,
  SET_SEARCHPLAY,
  SET_SEARCHPLAYLISTS
} from './Actions';

const initialState = {
  token: '',
  info: '',
  topList: '',
  playlists: '',
  tracks: '',
  player: '',
  searchTracks: '',
  searchArtists: '',
  searchAlbums: '',
  searchPlay:'',
  searchPlayLists:''
};


function spotifyData(state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case SET_INFO:
      return { ...state, info: action.payload }
    case SET_TOPLIST:
      return { ...state, topList: action.payload }
    case SET_PLAYLISTS:
      return { ...state, playlists: action.payload }
    case SET_TRACKS:
      return { ...state, tracks: action.payload }
    case SET_PLAYER:
      return { ...state, player: action.payload }
    case SET_SEARCHTRACKS:
      return { ...state, searchTracks: action.payload }
    case SET_SEARCHARTISTS:
      return { ...state, searchArtists: action.payload }
    case SET_SEARCHALBUMS:
      return { ...state, searchAlbums: action.payload }
    case SET_SEARCHPLAY:
        return { ...state, searchPlay: action.payload }
    case SET_SEARCHPLAYLISTS:
      return { ...state, searchPlayLists: action.payload }
    default:
      return state;
  }
}

export default spotifyData;