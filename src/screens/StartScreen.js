import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Buttons from '../lib/Buttons';
import { YELLOW } from "../lib/colors";
import styles from '../lib/styles';
import PrivacyPolicy from '../lib/PrivacyPolicy';

const start = 'Let\'s figure out what to do with your bug!';

const buttons = (action) => [
  {label: 'Let\'s!', action, textColor: 'black', buttonColor: YELLOW},
];

const StartScreen = ({action}) => (
  <View style={styles.container}>
    <PrivacyPolicy/>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{start}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(action)}/>
    </View>
  </View>
);

StartScreen.propTypes = {
  action: PropTypes.func.isRequired,
};

export default StartScreen;
