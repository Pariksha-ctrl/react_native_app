import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class Tab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab2</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
