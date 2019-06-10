import { StyleSheet, Platform, StatusBar } from 'react-native';

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
  linkPos: {
    top: Platform.OS === 'ios' ? 2 : StatusBar.currentHeight,
    left: 2,
  },
  link: {
    padding: 3,
    color: 'blue',
    fontSize: 12,
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
