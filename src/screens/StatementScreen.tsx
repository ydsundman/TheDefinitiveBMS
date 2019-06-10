import React from 'react';
import { Text, View } from 'react-native';

import styles from '../lib/styles';
import { YELLOW, RED } from '../lib/colors';
import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const props = (agree, disagree): ButtonsProps => ({
  buttons: [
    { label: 'No', action: disagree, textColor: 'white', buttonColor: RED },
    { label: 'Yes', action: agree, textColor: 'black', buttonColor: YELLOW },
  ],
});

const StatementScreen = ({ agree, disagree, text }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(agree, disagree)} />
    </View>
  </View>
);

export default StatementScreen;
