//https://www.youtube.com/watch?v=SbelQW2JaDQ
import React, {useState, useEffect} from 'react';
import base64 from 'react-native-base64';
import axios from 'axios';
import { Store } from '../redux/Store';
import { setinfo, setPlaylists, setToken, setTopList } from '../redux/Actions';
const apiPrefix = 'https://accounts.spotify.com/api';
const client_id = '5914e5016a704b0c84b27239cfee6242';
const client_secret = '02a63d27435a4e85a2f1e84048657e18';

const base64credentials = base64.encode(client_id + ':' + client_secret);


export const getToken = async () => {
  try {
   await axios(`${apiPrefix}/token`, {
      method: 'POST',
      headers: {
        'Conten-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64credentials}`,
      },
      data: 'grant_type=client_credentials',
    }).then(tokenresponse => {
      
      console.log(tokenresponse.data.access_token)
      
      Store.dispatch(setToken(tokenresponse.data.access_token))

      return ; 

    });
  } catch (error) {
    console.log('ERROR DE TOKEN ' +error);
  }
};

export const getCategories = async (token, uri) => {
  try {
     await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {            
        Store.dispatch(setinfo(trackresponse.data.categories.items))
        //console.log(trackresponse.data.categories.items)
        return trackresponse.data.categories.items;
      })
      .catch(error => {
        console.log('error de categories ' + error)
        return console.log('error')
      });
  } catch (error) {
    console.log('Error de categories '  + error);
    return
  }
};
//https://api.spotify.com/v1/playlists/playlist_id/tracks
export async function  getToplist (token, uri)  {
  try {
     await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {  
        Store.dispatch(setTopList(trackresponse.data.items))
        return trackresponse.data.items;
      })
      .catch(error => {
        console.log('error de top list ' + error)
        return console.log('error')
      });
  } catch (error) {
    console.log('Error de top list'  + error);
    return
  }
};

export async function  getPlayList (token, uri)  {
  try {
     await axios(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(trackresponse => {
        //console.log(trackresponse.data.playlists.items[0].images)  
        Store.dispatch(setPlaylists(trackresponse.data.playlists.items))
        //console.log(Store.getState().spotifyData.playlists)
        return ;
      })
      .catch(error => {
        console.log('error de playlist top list ' + error)
        return console.log('error')
      });
  } catch (error) {
    return console.log('Error de playlist top list'  + error);
    
  }
  
  
};



