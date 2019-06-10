import React from 'react';
import { SafeAreaView } from 'react-native';

import StartScreen from './src/screens/StartScreen';
import StatementScreen from './src/screens/StatementScreen';
import FixOrDeleteScreen from './src/screens/FixOrDeleteScreen';
import LastScreen from './src/screens/LastScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import EndScreen from './src/screens/EndScreen';

import styles from './src/lib/styles';
import statements from './src/lib/statements';

export default class App extends React.Component {
  state = {
    phase: 'start',
    index: 0,
  };

  navStart = () => {
    this.setState({ phase: 'start' });
  };

  navAgree = () => {
    if (this.state.phase === 'fix' || this.state.phase === 'del') {
      this.setState({ phase: 'start' });
    } else {
      this.setState({ phase: statements[this.state.index].fix ? 'fix' : 'del' });
    }
  };

  navDisagree = () => {
    if (this.state.index === statements.length - 1) {
      this.setState({ phase: 'last' });
    } else {
      this.navLoop((this.state.index + 1) % statements.length)();
    }
  };

  navLoop = (index = 0) => () => {
    this.setState(() => ({ phase: 'loop', index }));
  };

  navSuccess = () => {
    this.setState({ phase: 'success' });
  };

  navEnd = () => {
    this.setState({ phase: 'end' });
  };

  start = () => this.state.phase === 'start';
  loop = () => this.state.phase === 'loop';
  fix = () => this.state.phase === 'fix';
  del = () => this.state.phase === 'del';
  last = () => this.state.phase === 'last';
  success = () => this.state.phase === 'success';
  end = () => this.state.phase === 'end';

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.start() && <StartScreen action={this.navLoop()} />}
        {this.loop() && (
          <StatementScreen agree={this.navAgree} disagree={this.navDisagree} text={statements[this.state.index].text} />
        )}
        {this.fix() && <FixOrDeleteScreen agree={this.navSuccess} disagree={this.navDisagree} fix={true} />}
        {this.del() && <FixOrDeleteScreen agree={this.navSuccess} disagree={this.navDisagree} fix={false} />}
        {this.last() && <LastScreen start={this.navStart} />}
        {this.success() && <SuccessScreen noAction={this.navStart} yesAction={this.navEnd} />}
        {this.end() && <EndScreen action={this.navStart} />}
      </SafeAreaView>
    );
  }
}
