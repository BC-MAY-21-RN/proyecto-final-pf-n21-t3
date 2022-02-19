import React from 'react';
import {View} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {loadData} from '../../spotify/loadData';

export function LogInButton() {
  const navigation = useNavigation();
  return (
    <View>
      <LoginButton
        style={{width: 300, height: 35, marginVertical: 10, borderRadius: 10}}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken()
              .then(data => {
                auth().signInWithCredential(
                  auth.FacebookAuthProvider.credential(data.accessToken),
                );
                loadData();
              })
              .catch(error => {
                console.log(error);
              });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />
    </View>
  );
}
