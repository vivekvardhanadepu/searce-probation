import React from 'react';
import {View, Text, Modal, TouchableOpacity, ScrollView} from 'react-native';
import Icon from '../Icon';

import styles from './styles';

export default CustomModal = ({visible, setVisible, title, body, footer}) => {
  return (
    <Modal visible={false} transparent>
      <TouchableOpacity
        style={[styles.wrapper]}
        onPress={() => {
          setVisible(false);
        }}>
        <View style={[styles.modalView]}>
          <ScrollView>
            <View style={styles.header}>
              <Icon size={27} type="evil" name="close" />
              <Text style={styles.title}> {title || 'Contacts'}</Text>
              <View />
              <View />
              <View />
              <View />
            </View>
            <View style={styles.footerSeparator} />
            <View style={styles.body}>{body}</View>
            {footer ? (
              footer
            ) : (
              <View style={styles.footer}>
                <>
                  <View style={styles.footerSeparator} />
                  <View style={styles.footerItems}>
                    <View style={styles.footer}>
                      <Text style={styles.footerText}>Privacy Policy</Text>
                      <View style={styles.termsView} />
                      <Text style={styles.footerText}>Terms of Service</Text>
                    </View>
                  </View>
                </>
              </View>
            )}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};
