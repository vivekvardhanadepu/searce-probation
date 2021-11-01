import React from 'react';
import {Text, View} from 'react-native';

import CustomModal from '../common/CustomModal/index';

export default ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <CustomModal
        visible={modalVisible}
        setVisible={setModalVisible}
        body={
          <View>
            <Text>Hi from modal</Text>
          </View>
        }
        footer={<></>}
        title="My Profile!!"
      />
    </View>
  );
};
