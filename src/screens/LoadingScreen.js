import React from 'react';
import { Text, View } from 'react-native';

import styles from '../lib/styles'

const LoadingScreen = () => (
  <View style={styles.body}>
    <Text style={styles.bodyText}>The Definitive Bug Management System</Text>
  </View>
);

export default LoadingScreen;
