import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

import styles from './styles';

const CreateContact = () => {
  return (
    <View style={styles.container}>
      <Image
        width={150}
        height={150}
        source={{uri: DEFAULT_IMAGE_URI}}
        style={styles.imageView}
      />
      <TouchableOpacity>
        <Text style={styles.chooseImg}>Choose image </Text>
      </TouchableOpacity>
      <Input label="First name" placeholder="Enter First name" />
      <Input label="Last name" placeholder="Enter Last name" />
      <Input
        icon={
          <CountryPicker
            withFilter={true}
            withFlag={true}
            withCallingCode={true}
            withEmoji={true}
            onSelect={() => {}}
            withCountryNameButton={false}
            visible
          />
        }
        iconPosition="left"
        style={{paddingLeft: 10}}
        label="Phone number"
        placeholder="Enter Phone number"
      />
      <CustomButton />
    </View>
  );
};

export default CreateContact;
