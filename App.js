/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  Image
} from 'react-native';

import NutrientBarList from './src/common/NutrientBarList'
import AddFoodButton from './src/common/AddFoodButton'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    let date = '9 November';
    return (
      <View style={styles.container}>
        <Image style={styles.logo}source={require('./pics/muscle-flex-outline.png')} />
        <ScrollView>
          <View>
            <Text style={styles.dateTitle}>{this.date}</Text>
            <View>
              <NutrientBarList style={styles.nutrientbarlist}/>
              <NutrientBarList style={styles.nutrientbarlist}/>
            </View>
            <Text>Eaten Food 1</Text>
            <Text>Eaten Food 2</Text>
          </View>
        </ScrollView>
        <AddFoodButton/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  dateTitle: {
    fontSize: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
