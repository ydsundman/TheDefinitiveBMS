import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';
import { YELLOW, RED } from "./colors";

import Buttons from './Buttons';

const buttons = (agree, disagree) => [
  {label: 'Nope, not it!', action: disagree, textColor: 'white', buttonColor: RED},
  {label: 'That\'s right!', action: agree, textColor: 'black', buttonColor: YELLOW},
];

const StatementScreen = ({agree, disagree, text}) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(agree, disagree)} />
    </View>
  </View>
);

StatementScreen.propTypes = {
  agree: PropTypes.func.isRequired,
  disagree: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default StatementScreen;
