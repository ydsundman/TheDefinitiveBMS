import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Button from './Button'

const buttonsStyles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});

const Buttons = ({buttons}) => (
  <View style={buttonsStyles.buttons}>
    {
      buttons.map(btn => (
        <Button key={btn.label} onPress={btn.action} text={btn.label} textColor={btn.textColor} buttonColor={btn.buttonColor} />
      ))
    }
  </View>
);

Buttons.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    buttonColor: PropTypes.string.isRequired,
  })).isRequired
};

export default Buttons;
