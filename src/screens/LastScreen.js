import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../lib/styles'
import { YELLOW } from '../lib/colors';
import Buttons from '../lib/Buttons'

const buttons = start => [
  {label: 'Try again!', action: start, textColor: 'black', buttonColor: YELLOW},
];

const LastScreen = ({start}) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{'You only have two options:\nDelete the bug or fix it!'}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(start)} />
    </View>
  </View>
);

LastScreen.propTypes = {
  start: PropTypes.func.isRequired,
};

export default LastScreen;
