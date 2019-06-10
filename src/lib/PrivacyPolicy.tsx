import React from 'react';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const open = () => Linking.openURL('https://www.fixitnowordeleteit.com/privacy_policy.html');

export default () => (
  <View style={styles.linkPos}>
    <TouchableOpacity onPress={open}>
      <Text style={styles.link}>Privacy Policy</Text>
    </TouchableOpacity>
  </View>
);
