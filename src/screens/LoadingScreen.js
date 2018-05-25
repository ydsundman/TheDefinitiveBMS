import React from 'react';
import { Text, View, Image } from 'react-native';
import logo from '../../assets/bug.png'

import styles from '../lib/styles'

const LoadingScreen = () => (
  <View style={styles.body}>
    <Text style={styles.bodyText}>The Definitive Bug Management System</Text>
    <Image
      style={{
        width: 150,
        height: 150,
      }}
      source={logo}/>
  </View>
);

export default LoadingScreen;
