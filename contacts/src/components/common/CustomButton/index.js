import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import colors from '../../../assets/themes/colors';

import styles from './styles';

const Input = ({
  style,
  primary,
  secondary,
  danger,
  title,
  loading,
  disabled,
  onPress,
}) => {
  const [focused, setFocus] = useState(false);

  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }

    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }

    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && <ActivityIndicator color={colors.primary} />}
        {title && (
          <Text style={{color: disabled ? 'black' : colors.white}}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Input;
