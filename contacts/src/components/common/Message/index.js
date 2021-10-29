import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';

import colors from '../../../assets/themes/colors';

import styles from './styles';

const Message = ({
  style,
  retry,
  retryFn,
  onDismiss,
  primary,
  info,
  danger,
  message,
  success,
}) => {
  const [dismiss, setDismiss] = useState(false);

  const getBgColor = () => {
    if (primary) {
      return colors.primary;
    }

    if (danger) {
      return colors.danger;
    }
    if (success) {
      return colors.success;
    }

    if (info) {
      return colors.secondary;
    }
  };

  return (
    <>
      {dismiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-between'}]}>
            {message && <Text style={{color: colors.white}}>{message}</Text>}

            {retry && !typeof onDismiss === 'function' && (
              <TouchableOpacity onPress={() => retryFn()}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}

            {typeof onDismiss === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismiss(true);
                  onDismiss();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
