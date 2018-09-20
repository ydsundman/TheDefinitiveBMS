import React from 'react';
import { StyleSheet } from 'react-native';

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
    bottom: 0,
  },
  footer: {
    flex: 1,
    // paddingBottom: 50,
  },
  centerChildren: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
