import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Input from '../common/Input/index';
import Container from '../common/Container/index';
import Message from '../common/Message/index';
import CustomButton from '../common/CustomButton/index';
import {REGISTER} from '../../constants/routeNames';

import styles from './styles';

const LoginComponent = ({error, onChange, loading, onSubmit}) => {
  const {navigate} = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Image
        source={require('../../assets/images/logo.png')}
        style={[styles.logoImage]}
      />
      <View>
        <Text style={[styles.title]}> Welcome to Contacts!!</Text>
        <Text style={[styles.subTitle]}> Please Login Here</Text>

        <View style={[styles.form]}>
          {error && !error.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid credentials"
            />
          )}
          {error?.error && (
            <Message danger onDismiss={() => {}} message={error.error} />
          )}
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            icon={
              <TouchableOpacity onPress={() => setShowPassword(show => !show)}>
                <Text>{showPassword ? 'Hide' : 'Show'}</Text>
              </TouchableOpacity>
            }
            secureTextEntry={!showPassword}
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />
          <CustomButton
            disabled={loading}
            loading={loading}
            primary
            title="Submit"
            onPress={onSubmit}
          />
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
