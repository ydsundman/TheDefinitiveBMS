import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from '../lib/styles'
import { RED, YELLOW } from '../lib/colors';
import Buttons from '../lib/Buttons';
import AdBanner from '../lib/AdBanner';

const buttons = (agree, disagree) => [
  {label: 'No way!', action: disagree, textColor: 'white', buttonColor: RED},
  {label: 'OK!', action: agree, textColor: 'black', buttonColor: YELLOW},
];

const FixOrDeleteScreen = ({fix, agree, disagree}) => (
  <View style={styles.container}>
    <AdBanner />
    <View style={styles.body}>
      <Text style={styles.bodyText}>{fix ? 'Fix it now!' : 'Delete it!'}</Text>
    </View>
    <View style={styles.footer}>
      <Buttons buttons={buttons(agree, disagree)} />
    </View>
  </View>
);

FixOrDeleteScreen.propTypes = {
  fix: PropTypes.bool.isRequired,
  agree: PropTypes.func.isRequired,
  disagree: PropTypes.func.isRequired,
};

export default FixOrDeleteScreen;
