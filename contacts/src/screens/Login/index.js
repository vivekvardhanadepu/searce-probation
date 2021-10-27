import React, {useState} from 'react';
import {Text} from 'react-native';

import LoginComponent from '../../components/Login/index';

const Login = () => {
  const [value, onChangeText] = useState('');
  return <LoginComponent></LoginComponent>;
};

export default Login;
