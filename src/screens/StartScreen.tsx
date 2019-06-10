import React from 'react';
import { Text, View } from 'react-native';

import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import { YELLOW } from '../lib/colors';
import styles from '../lib/styles';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const start = "Let's figure out what to do with your bug!";

const props = (action): ButtonsProps => ({
  buttons: [{ label: "Let's!", action, textColor: 'black', buttonColor: YELLOW }],
});

const StartScreen = ({ action }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{start}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(action)} />
    </View>
  </View>
);

export default StartScreen;
