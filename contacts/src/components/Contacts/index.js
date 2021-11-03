import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomModal from '../common/CustomModal';
import Icon from '../common/Icon';
import Message from '../common/Message';
import colors from '../../assets/themes/colors';
import {CREATE_CONTACT} from '../../constants/routeNames';

import styles from './styles';

export default ContactsComponent = ({
  modalVisible,
  setModalVisible,
  data,
  loading,
}) => {
  const {navigate} = useNavigation();

  const ListEmptyComponent = () => {
    return (
      <View style={{padding: 100}}>
        <Message info message="No contacts found!!" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    const {
      contact_picture: picture,
      first_name,
      last_name,
      phone_number,
    } = item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {picture ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: picture}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                backgroundColor: colors.grey,
                flexDirection: 'row',
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.name}>{first_name[0].toUpperCase()}</Text>
              <Text style={styles.name}>{last_name[0].toUpperCase()}</Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{first_name + ' ' + last_name}</Text>
            </View>
            <Text style={styles.phoneNumber}>{phone_number}</Text>
          </View>
        </View>
        <Icon type="ant" name="right" size={18} color={colors.grey} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{backgroundColor: colors.white}}>
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
        {loading ? (
          <View style={{padding: 100}}>
            <ActivityIndicator size="small" color={colors.primary} />
          </View>
        ) : (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={data}
              keyExtractor={item => String(item.id)}
              // ItemSeparatorComponent={() => (
              //   <View style={{height: 0.5, backgroundColor: colors.grey}} />
              // )}
              ListEmptyComponent={ListEmptyComponent}
              ListFooterComponent={() => <View style={{height: 100}}></View>}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionBtn}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon name="plus" size={21} color={colors.white} />
      </TouchableOpacity>
    </>
  );
};
