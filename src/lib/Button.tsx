import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';

export interface Props {
  text: string;
  textColor: string;
  buttonColor: string;
  onPress: () => void;
}

export default ({ text, onPress, textColor, buttonColor }: Props) => (
  <TouchableHighlight style={[styles.button, { backgroundColor: buttonColor }]} onPress={onPress}>
    <View style={styles.centerChildren}>
      <Text style={[{ color: textColor }, styles.buttonText]}> {text} </Text>
    </View>
  </TouchableHighlight>
);

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
