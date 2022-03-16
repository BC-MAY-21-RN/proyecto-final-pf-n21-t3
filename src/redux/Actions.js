export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_NEWPASSWORD = 'SET_NEWPASSWORD';
export const SET_PROVIDER = 'SET_PROVIDER';
export const SET_NEWEMAIL = 'SET_NEWEMAIL';
export const SET_INFO = 'SET_INFO';
export const SET_TOPLIST = 'SET_TOPLIST';
export const SET_UID = 'SET_UID';
export const SET_PLAYLISTS = 'SET_PLAYLISTS'
export const SET_TRACKS = 'SET_TRACKS'
export const SET_PLAYER = 'SET_PLAYER'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const ADD_PLAYLIST = 'ADD_PLAYLIST'
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST'
export const SET_SEARCHTRACKS = 'SET_SEARCHTRACKS'
export const SET_SEARCHARTISTS = 'SET_SEARCHARTISTS'
export const SET_SEARCHALBUMS = 'SET_SEARCHALBUMS'
export const SET_SEARCHPLAY = 'SET_SEARCHPLAY'
export const SET_SEARCHPLAYLISTS = 'SET_SEARCHPLAYLISTS'


export const setName = name => ({
  type: SET_NAME,
  payload: name,
});
export const setEmail = email => ({
  type: SET_EMAIL,
  payload: email,
});
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token,
});
export const setPassword = password => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setNewPassword = newPassowrd => ({
  type: SET_NEWPASSWORD,
  payload: newPassowrd,
});

export const setNewEmail = newEmail => ({
  type: SET_NEWEMAIL,
  payload: newEmail,
});

export const setProvider = provider => ({
  type: SET_PROVIDER,
  payload: provider,
});

export const setinfo = info => ({
  type: SET_INFO,
  payload: info,
});

export const setTopList = topList => ({
  type: SET_TOPLIST,
  payload: topList,
});

export const setUID = uid => ({
  type: SET_UID,
  payload: uid,
});

export const setPlaylists = playlists => ({
  type: SET_PLAYLISTS,
  payload: playlists
})

export const setTracks = tracks => ({
  type: SET_TRACKS,
  payload: tracks
})

export const setPlayer = player => ({
  type: SET_PLAYER,
  payload: player
})

export const addFavorite = likes =>({
  type: ADD_FAVORITE,
  payload: likes = {
    name: likes.name,
    id: likes.id,
    artists: likes.artists,
    image: likes.image,
    preview_url: likes.preview_url
  }  
})

export const removeFavorite = likes => ({
  type: REMOVE_FAVORITE,
  payload: likes
})

export const setSearchTracks = searchTracks => ({
  type: SET_SEARCHTRACKS,
  payload: searchTracks
})
export const setSearchArtists = searchArtists => ({
  type: SET_SEARCHARTISTS,
  payload: searchArtists
})
export const setSearchAlbums = searchAlbums => ({
  type: SET_SEARCHALBUMS,
  payload: searchAlbums
})
export const setSearchPlayLists = searchPlayLists =>({
  type: SET_SEARCHPLAYLISTS, 
  payload: searchPlayLists
}) 

export const setSearchPlay = searchPlay => ({
  type: SET_SEARCHPLAY,
  payload: searchPlay
})

export const addFavoritePlaylist = likes => ({
  type: ADD_PLAYLIST,
  payload: likes
})

export const removeFavoritePlaylist = likes => ({
  type: REMOVE_PLAYLIST,
  payload: likes
})