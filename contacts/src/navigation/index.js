import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

export default () => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  const [authed, setAuthed] = useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setAuthed(true);
      } else {
        setAuthLoaded(true);
        setAuthed(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {authed ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
