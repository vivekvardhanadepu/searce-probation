import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Input from '../common/Input/index';
import Container from '../common/Container/index';
import Message from '../common/Message/index';
import CustomButton from '../common/CustomButton/index';
import {REGISTER} from '../../constants/routeNames';

import styles from './styles';

const LoginComponent = () => {
  const [value, onChangeText] = useState('');
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[styles.logoImage]}
      />
      <View>
        <Text style={[styles.title]}> Welcome to Contacts!!</Text>
        <Text style={[styles.subTitle]}> Please Login Here</Text>
        <Message
          retry
          retryFn={() => {
            console.log('retry!!');
          }}
          onDismiss={() => {}}
          primary
          message="Please try again"
        />
        <View style={[styles.form]}>
          <Input
            label="Username"
            placeholer="Enter username"
            onChangeText={onChangeText}
            value={value}
            // error="You need to enter your username"
          />
          <Input
            label="Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
          <View style={[styles.createSection]}>
            <Text style={[styles.infoText]}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={[styles.linkBtn]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
