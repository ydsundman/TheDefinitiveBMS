import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

const Button = ({ text, onPress, textColor, buttonColor }) => (
  <TouchableHighlight style={[styles.button, {backgroundColor: buttonColor}]} onPress={onPress}>
    <View style={styles.centerChildren}>
      <Text style={[{color: textColor}, styles.buttonText]}> {text} </Text>
    </View>
  </TouchableHighlight>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  centerChildren: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    margin: 2,
    flex: 1,
  },

  buttonText: {
    fontSize: 30,
  },
});

export default Button;
