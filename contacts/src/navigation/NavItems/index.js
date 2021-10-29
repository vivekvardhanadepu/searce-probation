import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import Container from '../../components/common/Container';
import {SETTINGS} from '../../constants/routeNames';

import styles from './styles';

export default NavItems = ({navigation}) => {
  const {navigate} = navigation;
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
        // navigate(SETTINGS);
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
