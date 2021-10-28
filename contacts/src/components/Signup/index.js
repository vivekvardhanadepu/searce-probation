import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../common/Container/index';
import Input from '../Input/index';
import CustomButton from '../CustomButton/index';
import {LOGIN} from '../../constants/routeNames';
import envs from '../../config/envs';

import styles from './styles';

const RegisterComponent = ({form, errors, onChange, onSubmit}) => {
  const [value, onChangeText] = useState('');
  const {navigate} = useNavigation();
  const {BACKEND_URL} = env;

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[styles.logoImage]}
      />
      <View>
        <Text style={[styles.title]}> Welcome to Contacts!!</Text>
        <Text style={[styles.subTitle]}> Create a free account</Text>
        <View style={[styles.form]}>
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName}
          />
          <Input
            label="Firstname"
            placeholder="Enter Firstname"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName}
          />
          <Input
            label="Lastname"
            placeholder="Enter Lastname"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password}
          />
          <CustomButton onPress={onSubmit} primary title="Submit" />
          <View style={[styles.createSection]}>
            <Text style={[styles.infoText]}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={[styles.linkBtn]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
