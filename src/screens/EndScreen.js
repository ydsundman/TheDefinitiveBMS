import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import Buttons from '../lib/Buttons'
import { YELLOW } from "../lib/colors";
import styles from '../lib/styles';
import PrivacyPolicy from "../lib/PrivacyPolicy";

const text = 'YAY! High five!\nYou are awesome!';

const buttons = (action) => [
  {label: 'Back to start', action, textColor: 'black', buttonColor: YELLOW},
];

const EndScreen = ({action}) => (
  <View style={styles.container}>
    <PrivacyPolicy/>
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
