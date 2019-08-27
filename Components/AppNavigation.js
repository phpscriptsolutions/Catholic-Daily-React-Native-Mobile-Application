import React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {View,Text} from 'react-native';
import DailyMassReadings from './DailyCatholicReadings';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
   "Daily Readings": { screen: DailyMassReadings },
   "Holy Rosary": { screen: SettingsScreen },
   "Hymns":{screen:HomeScreen},
   "Prayers":{screen:HomeScreen}
});


const Appnav=createAppContainer(TabNavigator);
export default Appnav;