import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles'
import { RED, YELLOW } from './colors';
import Buttons from './Buttons'

const buttons = (agree, disagree) => [
  {label: 'No way!', action: disagree, textColor: 'white', buttonColor: RED},
  {label: 'OK!', action: agree, textColor: 'black', buttonColor: YELLOW},
];

const FixOrDeleteScreen = ({fix, agree, disagree}) => (
  <View style={styles.container}>
    <View style={styles.body}>
      <Text style={{fontSize: 40}}>{fix ? 'Fix it now!' : 'Delete it!'}</Text>
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
