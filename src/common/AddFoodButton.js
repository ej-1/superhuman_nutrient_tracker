import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

export default class AddFoodButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
        <View style={styles.addFoodButton}>
          <Text>THIS IS A BUTTON</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = StyleSheet.create({
  addFoodButton: {
    backgroundColor: '#00ff99',
    color: '#fff',
    height: 50,
    width: 50,
  },
});
