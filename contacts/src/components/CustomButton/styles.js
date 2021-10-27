import {StyleSheet} from 'react-native';

import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderRadius: 4,
    paddingHorizontal: 4,
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: 'space-evenly',
  },
  loaderSection: {
    flexDirection: 'row',
  },
});
