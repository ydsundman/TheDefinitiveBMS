import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Buttons from '../lib/Buttons'
import { RED, YELLOW } from "../lib/colors";
import styles from '../lib/styles'
import PrivacyPolicy from "../lib/PrivacyPolicy";

const start = 'Woohoo! Well done!\nAre you down to zero bugs?';

const buttons = (noAction, yesAction) => [
  {label: 'No!', action: noAction, textColor: 'white', buttonColor: RED},
  {label: 'Yes!', action: yesAction, textColor: 'black', buttonColor: YELLOW},
];

const SuccessScreen = ({noAction, yesAction}) => (
  <View style={styles.container}>
    <PrivacyPolicy/>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{start}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(noAction, yesAction)}/>
    </View>
  </View>
);

SuccessScreen.propTypes = {
  yesAction: PropTypes.func.isRequired,
  noAction: PropTypes.func.isRequired,
};

export default SuccessScreen
