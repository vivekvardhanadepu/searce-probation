import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigator';
import NavItems from './NavItems';
import {GlobalContext} from '../context/Provider';
import {HOME_NAVIGATOR} from '../constants/routeNames';

const getDrawerContent = (navigation, authDispatch) => {
  return <NavItems navigation={navigation} authDispatch={authDispatch} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
