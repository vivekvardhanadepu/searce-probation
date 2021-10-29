import React from 'react';
import {
  Image,
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from '../../components/common/Icon/index';

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
      icon: <Icon type="material" size={20} name="settings" />,
      name: 'Settings',
      onPress: () => {
        navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="material" size={20} name="logout" />,
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
