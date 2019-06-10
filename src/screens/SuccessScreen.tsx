import React from 'react';
import { Text, View } from 'react-native';

import Buttons, { Props as ButtonsProps } from '../lib/Buttons';
import { RED, YELLOW } from '../lib/colors';
import styles from '../lib/styles';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const start = 'Woohoo! Well done!\nAre you down to zero bugs?';

const props = (noAction, yesAction): ButtonsProps => ({
  buttons: [
    { label: 'No!', action: noAction, textColor: 'white', buttonColor: RED },
    { label: 'Yes!', action: yesAction, textColor: 'black', buttonColor: YELLOW },
  ],
});

const SuccessScreen = ({ noAction, yesAction }) => (
  <View style={styles.container}>
    <PrivacyPolicy />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{start}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons {...props(noAction, yesAction)} />
    </View>
  </View>
);

export default SuccessScreen;
