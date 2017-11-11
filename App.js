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
  TouchableNativeFeedback,
  ScrollView,
  Image
} from 'react-native';
import AnimatedBar from "react-native-animated-bar";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class AddFoodButton extends Component {
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

class NutrientBarList extends Component {
  renderColor(percentage) {
    var percentage;
    if (percentage >= 0.75) {
      return '#00ff99'
    } else if (percentage >= 0.5 && percentage < 0.75) {
      return 'yellow'
    } else if (percentage >= 0.25 && percentage < 0.50) {
      return 'orange'
    } else if (percentage >= 0.0 && percentage < 0.25) {
      return 'red'
    }
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList style={{flex:2}}
        data={[
          {nutrient: 'Vitamin A', percentage: 0.1},
          {nutrient: 'Vitamin B', percentage: 0.25},
          {nutrient: 'Vitamin C', percentage: 0.50},
          {nutrient: 'Vitamin D', percentage: 0.75},
          {nutrient: '', percentage: 1.0},
        ]}
        renderItem={({item}) =>
          <View key={item}>
            <Text>{item.nutrient}</Text>
            <AnimatedBar
              progress={item.percentage}
              height={10}
              borderColor="#DDD"
              fillColor='#fff'
              barColor={this.renderColor(item.percentage)}
              borderRadius={5}
              borderWidth={0}
            />
          </View>
        }
      />
    );
  }
}

export default class App extends Component<{}> {
  render() {
    let date = '9 November';
    return (
      <View style={styles.container}>
        <Image source={require('./pics/muscle-flex-outline.png')} />
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
  nutrientbarlist: {
    flexDirection: 'row',
  },
  addFoodButton: {
    backgroundColor: '#00ff99',
    color: '#fff',
    height: 50,
    width: 50,
  },
  dateTitle: {
    fontSize: 20,
  },
});
