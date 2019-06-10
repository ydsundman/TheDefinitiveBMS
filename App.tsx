import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import StartScreen from './src/screens/StartScreen';
import StatementScreen from './src/screens/StatementScreen';
import FixOrDeleteScreen from './src/screens/FixOrDeleteScreen';
import LastScreen from './src/screens/LastScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import EndScreen from './src/screens/EndScreen';

import styles from './src/lib/styles';
import statements from './src/lib/statements';

export default () => {
  const [phase, setPhase] = useState('start');
  const [index, setIndex] = useState(0);

  const navStart = () => {
    setPhase('start');
  };

  const navAgree = () => {
    if (phase === 'fix' || phase === 'del') {
      setPhase('start');
    } else {
      setPhase(statements[index].fix ? 'fix' : 'del');
    }
  };

  const navDisagree = () => {
    if (index === statements.length - 1) {
      setPhase('last');
    } else {
      navLoop((index + 1) % statements.length)();
    }
  };

  const navLoop = (index = 0) => () => {
    setPhase('loop');
    setIndex(index);
  };

  const navSuccess = () => {
    setPhase('success');
  };

  const navEnd = () => {
    setPhase('end');
  };

  const start = () => phase === 'start';
  const loop = () => phase === 'loop';
  const fix = () => phase === 'fix';
  const del = () => phase === 'del';
  const last = () => phase === 'last';
  const success = () => phase === 'success';
  const end = () => phase === 'end';

  return (
    <SafeAreaView style={styles.container}>
      {start() && <StartScreen action={navLoop()} />}
      {loop() && <StatementScreen agree={navAgree} disagree={navDisagree} text={statements[index].text} />}
      {fix() && <FixOrDeleteScreen agree={navSuccess} disagree={navDisagree} fix={true} />}
      {del() && <FixOrDeleteScreen agree={navSuccess} disagree={navDisagree} fix={false} />}
      {last() && <LastScreen start={navStart} />}
      {success() && <SuccessScreen noAction={navStart} yesAction={navEnd} />}
      {end() && <EndScreen action={navStart} />}
    </SafeAreaView>
  );
};
