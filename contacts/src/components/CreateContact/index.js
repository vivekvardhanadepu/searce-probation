import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import Input from '../common/Input';
import CustomButton from '../common/CustomButton';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

import styles from './styles';

const CreateContact = ({
  onSubmit,
  onChangeText,
  form,
  setForm,
  loading,
  error,
}) => {
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
      <Input
        label="First name"
        placeholder="Enter First name"
        error={error?.last_name?.[0]}
        onChangeText={value => {
          onChangeText({name: 'firstName', value});
        }}
      />
      <Input
        label="Last name"
        placeholder="Enter Last name"
        error={error?.first_name?.[0]}
        onChangeText={value => {
          onChangeText({name: 'lastName', value});
        }}
      />
      <Input
        icon={
          <CountryPicker
            withFilter={true}
            withFlag={true}
            withCallingCode={true}
            withEmoji={true}
            withCallingCodeButton
            onSelect={({callingCode, cca2}) => {
              setForm({...form, countryCode: cca2, phoneCode: callingCode[0]});
            }}
            withCountryNameButton={false}
            error={error?.phone_number?.[0]}
            countryCode={form.countryCode ? form.countryCode : undefined}
          />
        }
        onChangeText={value => {
          onChangeText({name: 'phoneNumber', value});
        }}
        iconPosition="left"
        style={{paddingLeft: 10}}
        label="Phone number"
        placeholder="Enter Phone number"
      />
      <CustomButton
        primary
        title="Submit"
        onPress={onSubmit}
        loading={loading}
        disabled={loading}
      />
    </View>
  );
};

export default CreateContact;
