import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import AnimatedBar from "react-native-animated-bar";

export default class NutrientBarList extends Component {
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
      <FlatList
        data={[
          {nutrient: 'Vitamin A', percentage: 0.1},
          {nutrient: 'Vitamin B', percentage: 0.25},
          {nutrient: 'Vitamin C', percentage: 0.50},
          {nutrient: 'Vitamin D', percentage: 0.75},
          {nutrient: 'Vitamin E', percentage: 1.0},
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

const styles = StyleSheet.create({
});
