import React from 'react';
import { SafeAreaView } from 'react-native';

import LoadingScreen from './LoadingScreen'
import StartScreen from './StartScreen'
import StatementScreen from './StatementScreen'
import FixOrDeleteScreen from './FixOrDeleteScreen'

import styles from './styles'
import statements from './statements'

export default class App extends React.Component {
  state = {
    phase:'loading',
    index: 0,
  };

  componentDidMount() {
    setTimeout(() => this.setState({phase: 'start'}), 3000)
  }

  navAgree = () => {
    if (this.state.phase === 'fix' || this.state.phase === 'del') {
      this.setState({phase: 'start'})
    } else {
      this.setState({phase: statements[this.state.index].fix ? 'fix' : 'del'})
    }
  };

  navDisagree = () => {
    this.navLoop((this.state.index + 1) % statements.length )();
  };

  navLoop = (index = 0) => () => {
    this.setState(() => ({ phase: 'loop', index }));
  };

  loading = () => this.state.phase === 'loading';
  start = () => this.state.phase === 'start';
  loop = () => this.state.phase === 'loop';
  fix = () => this.state.phase === 'fix';
  del = () => this.state.phase === 'del';

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.loading() && <LoadingScreen />}
        {this.start() && <StartScreen action={this.navLoop()} />}
        {this.loop() && <StatementScreen agree={this.navAgree} disagree={this.navDisagree} text={statements[this.state.index].text} />}
        {this.fix() && <FixOrDeleteScreen agree={this.navAgree} disagree={this.navDisagree} fix={true} />}
        {this.del() && <FixOrDeleteScreen agree={this.navAgree} disagree={this.navDisagree} fix={false} />}
      </SafeAreaView>
    );
  }
}
