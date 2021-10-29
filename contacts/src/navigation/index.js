import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator} from 'react-native';

export default () => {
  const [authed, setAuthed] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setAuthLoaded(true);
        setAuthed(true);
      } else {
        setAuthLoaded(false);
        setAuthed(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {authLoaded ? (
        <NavigationContainer>
          {isAuthed || isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      )}
    </>
  );
};
