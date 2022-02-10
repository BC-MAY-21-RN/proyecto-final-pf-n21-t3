//https://www.youtube.com/watch?v=SbelQW2JaDQ

import base64 from 'react-native-base64';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';


const apiPrefix = 'https://accounts.spotify.com/api';
const client_id = '5914e5016a704b0c84b27239cfee6242';
const client_secret = '02a63d27435a4e85a2f1e84048657e18';
const id = '5TYxZTjIPqKM8K8NuP9woO'
const market = 'MX'
const base64credentials = base64.encode(client_id + ':' + client_secret);
var setTracks = ''
var setToken = ''
var tracks = []
var names = [];

export const getTracks = async () => {
  try {
    axios(`${apiPrefix}/token`,{
      'method': 'POST',
      'headers': {
        'Conten-Type':'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64credentials}`
      },
      data: 'grant_type=client_credentials'
    }).then(tokenresponse => {
      console.log(tokenresponse.data.access_token)
      setToken = (tokenresponse.data.access_token)
      axios(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=${market}`,{
        'method': 'GET',
        'headers': {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + tokenresponse.data.access_token
        }
      }).then(trackresponse=>{
        console.log(trackresponse.data.tracks);
         setTracks = (trackresponse.data.tracks);
        }).catch(error => console.log('error '+ error))
      })
    } catch (error) { 
      console.log(error)
    }   
  };
  /*
  Mapeo de informacion 
  
  setTracks.map((track) => {
    names.push(track.name)
    tracks.push(track.id)
  } )
  console.log(names, tracks)
  */

  /*
  export const getToken = async () => {
  try {
    console.log('token begin');
    const res = await fetch(`${apiPrefix}/token`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${base64credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'grant_type=client_credentials',
    });
    const json = await res.json();
    const newToken = json.access_token;
    console.log('token is', newToken);
    return newToken;
  } catch (error) {
    console.log(error)
  }
};

export const getGenres = async token => {
  const result = await fetch(
    `https://accounts.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: 'GET',
      headers: {Authorization: 'Bearer ' + token,
      'Accept': 'application/json',}
    },
  );
  
  const data = await result.json()
  console.log( 'hola2')

  console.log('Data ' + data)
  
  return data.categories.item;
};*/
