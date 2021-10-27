import React, {useState} from 'react';
import {Text} from 'react-native';

import Container from '../../components/common/Container/index';
import Input from '../../components/Input/index';
import CustomButton from '../../components/CustomButton/index';

const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="username"
        onChangeText={onChangeText}
        value={value}
        // error="You need to enter your username"
      />
      <Input label="password" icon={<Text>HIDE</Text>} iconPosition="right" />
      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary title="Click Me" />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" />
    </Container>
  );
};

export default Login;
