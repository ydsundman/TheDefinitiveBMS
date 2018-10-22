import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../lib/styles';
import { YELLOW, RED } from '../lib/colors';
import Buttons from '../lib/Buttons';
import PrivacyPolicy from "../lib/PrivacyPolicy";

const buttons = (agree, disagree) => [
  {label: 'No', action: disagree, textColor: 'white', buttonColor: RED},
  {label: 'Yes', action: agree, textColor: 'black', buttonColor: YELLOW},
];

const StatementScreen = ({agree, disagree, text}) => (
  <View style={styles.container}>
    <PrivacyPolicy/>
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
