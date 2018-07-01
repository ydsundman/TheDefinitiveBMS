import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../lib/styles';
import { YELLOW, RED } from '../lib/colors';
import Buttons from '../lib/Buttons';
import AdBanner from '../lib/AdBanner'

const buttons = (agree, disagree) => [
  {label: 'No', action: disagree, textColor: 'white', buttonColor: RED},
  {label: 'Yes', action: agree, textColor: 'black', buttonColor: YELLOW},
];

const StatementScreen = ({agree, disagree, text}) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text style={styles.bodyText}>{text}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(agree, disagree)} />
    </View>
    <AdBanner />
  </View>
);

StatementScreen.propTypes = {
  agree: PropTypes.func.isRequired,
  disagree: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default StatementScreen;
