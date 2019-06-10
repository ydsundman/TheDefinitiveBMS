import React from 'react';
import { Text, View } from 'react-native';

import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import { YELLOW } from '../lib/colors';
import styles from '../lib/styles';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const text = 'YAY! High five!\nYou are awesome!';

const props = (action): ButtonsProps => ({
  buttons: [{ label: 'Back to start', action, textColor: 'black', buttonColor: YELLOW }],
});

const EndScreen = ({ action }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(action)} />
    </View>
  </View>
);

export default EndScreen;
