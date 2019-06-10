import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

export interface ButtonProps {
  label: string;
  action: () => void;
  textColor: string;
  buttonColor: string;
}

export default (buttons: Array<ButtonProps>) => (
  <View style={styles.buttons}>
    {buttons.map(({ label, action, ...rest }: ButtonProps) => (
      <Button key={label} onPress={action} text={label} {...rest} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});
