import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../common/Container/index';
import Input from '../Input/index';
import CustomButton from '../CustomButton/index';
import {LOGIN} from '../../constants/routeNames';

import styles from './styles';

const RegisterComponent = () => {
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
        <Text style={[styles.subTitle]}> Create a free account</Text>
        <View style={[styles.form]}>
          <Input
            label="Username"
            placeholer="Enter username"
            onChangeText={onChangeText}
            value={value}
          />
          <Input
            label="Firstname"
            placeholer="Enter Firstname"
            // onChangeText={onChangeText}
            // value={value}
          />
          <Input
            label="Lastname"
            placeholer="Enter Lastname"
            // onChangeText={onChangeText}
            // value={value}
          />
          <Input
            label="Email"
            placeholer="Enter email"
            // onChangeText={onChangeText}
            // value={value}
          />
          <Input
            label="Password"
            placeholer="Enter password"
            icon={<Text>Show</Text>}
            secureTextEntry={true}
            iconPosition="right"
          />
          <CustomButton primary title="Submit" />
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
