import {StyleSheet} from 'react-native';

import colors from '../../assets/themes/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    paddingTop: 20,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '400',
    paddingVertical: 20,
    textAlign: 'center',
  },
  form: {
    paddingTop: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  infotext: {
    fontSize: 17,
  },
  linkBtn: {
    paddingLeft: 17,
    color: colors.primary,
    fontSize: 16,
  },
});
