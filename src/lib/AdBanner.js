import React from 'react';
import { Platform } from 'react-native'
import { AdMobBanner, Constants } from 'expo';

import styles from "./styles";

const { adUnitID_ios, adUnitID_android, testDeviceID } = Constants.manifest.extra;

const adUnitID = Platform.select({
  ios: adUnitID_ios,
  android: adUnitID_android,
});

const adMobProps = {
  adUnitID
};

if (testDeviceID) {
  adMobProps.testDeviceID = testDeviceID;
}

export default () => (
  null
);
