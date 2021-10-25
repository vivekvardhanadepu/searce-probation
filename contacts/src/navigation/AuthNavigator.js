import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/Login/index';
import Register from '../screens/Register/index';
import {LOGIN, REGISTER} from '../constants/routeNames';

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
      <AuthStack.Screen name={REGISTER} component={Register}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
