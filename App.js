import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Button from './Button'
import { range } from 'ramda'

const RED = '#d91616';
const YELLOW = '#ffca05';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  main: {
    flex: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 30,
  },
  buttons: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
  },
});

const createView = text => (
  <View style={styles.main} onClick={() => alert('xxx')}>
    <Text style={styles.mainText}>{text}</Text>
  </View>
);

const views = range(0, 5).map(i => createView(`Text for view ${i}`));

const Buttons = ({disagree, agree}) => (
  <View style={styles.buttons}>
    <Button text={'Disagree'} onPress={disagree} textColor="white" buttonColor={RED}/>
    <Button text={'Agree'} onPress={agree} textColor="black" buttonColor={YELLOW}/>
  </View>
);
Buttons.propTypes = {
  agree: PropTypes.func.isRequired,
  disagree: PropTypes.func.isRequired,
};

export default class App extends React.Component {
  state = {
    index: 0
  };

  agree = () => {
    this.setState(state => ({ index: (state.index + 1) % views.length }));
  };

  disagree = () => {
    this.setState(() => ({ index: 0}))
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {views[this.state.index]}
        <Buttons agree={this.agree} disagree={this.disagree}/>
      </SafeAreaView>
    );
  }
}
