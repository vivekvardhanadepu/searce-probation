import React, {useEffect} from 'react';
import {Text, Touchable, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Container from '../../components/common/Container';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Text style={{padding: 10}}>NAV</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <Container>
      <Text>Hii from contacts</Text>
    </Container>
  );
};

export default Contacts;
