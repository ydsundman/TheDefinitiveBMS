import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

const { statusBarHeight } = Constants;

const top = Platform.select({
  ios: 0,
  android: statusBarHeight,
});

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyText: {
    fontSize: 30,
    padding: 30,
    textAlign: 'center',
  },
  adBanner: {
    position: 'absolute',
    top,
  },
  footer: {
    flex: 1,
  },
  centerChildren: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
