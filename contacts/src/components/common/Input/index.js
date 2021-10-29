import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

import colors from '../../../assets/themes/colors';

import styles from './styles';

const Input = ({
  style,
  icon,
  iconPosition,
  value,
  onChangeText,
  label,
  error,
  ...props
}) => {
  const [focused, setFocus] = useState(false);

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.primary;
    }
    return colors.grey;
  };
  const getFlexDirection = () => {
    if (icon && iconPosition && iconPosition === 'right') {
      return 'row-reverse';
    }
    return 'row';
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {borderColor: getBorderColor(), flexDirection: getFlexDirection()},
        ]}>
        {icon && <View>{icon}</View>}
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
