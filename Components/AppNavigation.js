import React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {View,Text} from 'react-native';
import DailyMassReadings from './DailyCatholicReadings';
import HolyRosary from './HolyRosary';
import DivineMercy from './DivineMercy';
import AppHeader from './AppHeader';
class About extends React.Component {
  render() {
    return (
      <View>
      
      <AppHeader title='About Daily Catholic Encounter'/>
        <Text style={{marginTop:'40%',textAlign:'center'}}>Preaching the Gospel through technology!</Text>
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