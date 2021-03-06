import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../common/Container';
import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {LOGIN} from '../../constants/routeNames';

import styles from './styles';

const RegisterComponent = ({
  form,
  errors,
  onChange,
  onSubmit,
  error,
  loading,
}) => {
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
        <Text style={[styles.subTitle]}> Create a free account</Text>
        <View style={[styles.form]}>
          {error?.error && (
            <Message
              retry
              retryFn={() => {
                console.log('retry!!');
              }}
              onDismiss={() => {}}
              danger
              message={error.error}
            />
          )}
          <Input
            label="Username"
            placeholder="Enter username"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={errors.userName || error?.username?.[0]}
          />
          <Input
            label="Firstname"
            placeholder="Enter Firstname"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Lastname"
            placeholder="Enter Lastname"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
          />
          <Input
            label="Email"
            placeholder="Enter Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
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
            error={errors.password || error?.password?.[0]}
          />
          <CustomButton
            onPress={onSubmit}
            loading={loading}
            disabled={loading}
            primary
            title="Submit"
          />
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
