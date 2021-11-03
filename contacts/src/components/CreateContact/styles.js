import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  imageView: {
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: 'center',
  },
  chooseImg: {
    color: colors.primary,
    textAlign: 'center',
  },
});
