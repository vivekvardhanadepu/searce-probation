import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigator';
import NavItems from './NavItems/index';
import {HOME_NAVIGATOR} from '../constants/routeNames';

const getDrawerContent = navigation => {
  return <NavItems navigation={navigation} />;
};

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
