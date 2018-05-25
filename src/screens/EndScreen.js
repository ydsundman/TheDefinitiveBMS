import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Buttons from '../lib/Buttons'
import { YELLOW } from "../lib/colors";
import styles from '../lib/styles'

const text = 'YAY!\nHigh five!\nNo more bugs?';

const buttons = (action) => [
  {label: 'Start Over!', action, textColor: 'white', buttonColor: YELLOW},
];

const EndScreen = ({action}) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(action)}/>
    </View>
  </View>
);

EndScreen.propTypes = {
  action: PropTypes.func.isRequired,
};

export default EndScreen
