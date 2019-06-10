import React from 'react';
import { Text, View } from 'react-native';

import styles from '../lib/styles';
import { YELLOW } from '../lib/colors';
import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const props = (start): ButtonsProps => ({
  buttons: [{ label: 'Try again!', action: start, textColor: 'black', buttonColor: YELLOW }],
});

const LastScreen = ({ start }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{'You only have two options:\nDelete the bug or fix it!'}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(start)} />
    </View>
  </View>
);

export default LastScreen;
