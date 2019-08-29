import React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {View,Text} from 'react-native';
import DailyMassReadings from './DailyCatholicReadings';
import HolyRosary from './HolyRosary';
import DivineMercy from './DivineMercy';
class About extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}



const TabNavigator = createBottomTabNavigator({
   "Daily Readings": { screen: DailyMassReadings },
   "Holy Rosary": { screen: HolyRosary },
   "Divine Mercy":{screen:DivineMercy},
   "About Us":{screen:About}
});


const Appnav=createAppContainer(TabNavigator);
export default Appnav;