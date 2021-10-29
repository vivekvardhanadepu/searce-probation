import React from 'react';
import {
  Image,
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Container from '../../components/common/Container';
import logout from '../../context/actions/logout';
import {SETTINGS} from '../../constants/routeNames';

import styles from './styles';

export default NavItems = ({navigation, authDispatch}) => {
  const {navigate, toggleDrawer} = navigation;

  const handleLogout = () => {
    toggleDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };

  const items = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigate(SETTINGS);
      },
    },
    {
      icon: <Text>L</Text>,
      name: 'Logout',
      onPress: () => {
        handleLogout();
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          source={require('../../assets/images/logo.png')}
          style={[styles.logoImage]}
        />
        <View style={{paddingHorizontal: 60}}>
          {items.map(({icon, name, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              <View>{icon}</View>
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};
