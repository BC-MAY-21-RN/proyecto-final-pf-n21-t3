//https://www.youtube.com/watch?v=SbelQW2JaDQ

import React, {useState, useEffect} from 'react';
import base64 from 'react-native-base64';
import axios from 'axios';
import { Store } from '../../redux/Store';
import { setinfo, setToken } from '../../redux/Actions';
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
      Store.dispatch(setToken(tokenresponse.data.access_token))
      console.log(Store.getState().token)
      return
    });
  } catch (error) {
    console.log(error);
    return
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
        console.log(Store.getState().info)
        return
      })
      .catch(error => {
        console.log('error de categories ' + error)
        return
      });
  } catch (error) {
    console.log('Error de categories '  + error);
    return
  }
};



