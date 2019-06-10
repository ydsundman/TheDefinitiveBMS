import React from 'react';
import { Text, View } from 'react-native';

import Buttons, { ButtonProps } from '../lib/Buttons';
import { YELLOW } from '../lib/colors';
import styles from '../lib/styles';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const text = 'YAY! High five!\nYou are awesome!';

const buttons = (action): Array<ButtonProps> => [{ label: 'Back to start', action, textColor: 'black', buttonColor: YELLOW }];

const EndScreen = ({ action }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...buttons(action)} />
    </View>
  </View>
);

export default EndScreen;
