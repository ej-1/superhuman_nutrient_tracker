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
    <ScrollView>
        <View style={styles.main_container}>
          <View style={styles.logo_container}>
            <Image style={styles.logo}source={require('./pics/muscle-flex-outline.png')} />
          </View>
          <View style={styles.content_container} >
            <View>
              <Text style={styles.dateTitle}>{date}</Text>
              <View style={styles.bars_container}>
                <NutrientBarList style={styles.nutrientbarlist}/>
                <NutrientBarList style={styles.nutrientbarlist}/>
              </View>
              <View style={styles.eaten_foods_container}>
                <View style={styles.eaten_food}>
                  <Text style={{fontSize:20, fontWeight: 'bold'}}>Blueberries</Text>
                  <Text style={{fontSize:20}}> 150 g</Text>
                </View>
                <View style={styles.eaten_food}>
                  <Text style={{fontSize:20, fontWeight: 'bold'}}>Milk</Text>
                  <Text style={{fontSize:20}}> 100 g</Text>
                </View>
              </View>
            </View>
          </View>
          <AddFoodButton/>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  logo_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  content_container: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  bars_container: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    flex: 1,
  },
  eaten_foods_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'purple',
    flex: 1,
  },
  eaten_food: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'purple',
    flex: 1,
  },
  nutrientbarlist: {
    flex: 1,
  },
  nutrientbar: {
  },
  dateTitle: {
    fontSize: 35,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
