import React from 'react';
import { Text, View } from 'react-native';

import styles from '../lib/styles';
import { RED, YELLOW } from '../lib/colors';
import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const props = (agree, disagree): ButtonsProps => ({
  buttons: [
    { label: 'No way!', action: disagree, textColor: 'white', buttonColor: RED },
    { label: 'OK!', action: agree, textColor: 'black', buttonColor: YELLOW },
  ],
});

const FixOrDeleteScreen = ({ fix, agree, disagree }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{fix ? 'Fix it now!' : 'Delete it!'}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(agree, disagree)} />
    </View>
  </View>
);

export default FixOrDeleteScreen;
