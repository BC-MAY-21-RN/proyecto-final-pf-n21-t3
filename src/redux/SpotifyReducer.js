
import {
    SET_TOKEN, 
    SET_INFO, 
    SET_TOPLIST,
    SET_PLAYLISTS
  } from './Actions';
  
  const initialState = {
    token: '',
    info:'',
    topList: '',
    playlists: ''
  };
  
  
  function spotifyData(state = initialState, action) {
    switch (action.type) {
      case SET_TOKEN:
        return {...state, token: action.payload};
      case SET_INFO:
        return {...state, info: action.payload}
      case SET_TOPLIST:
        return{...state, topList: action.payload}
      case SET_PLAYLISTS:
        return{...state, playlists: action.payload}
      default:
        return state;
    }
  }
  
  export default spotifyData;
  