import React from 'react';
import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import {View,Text} from 'react-native';
import DailyMassReadings from './DailyCatholicReadings';
import HolyRosary from './HolyRosary';
import DivineMercy from './DivineMercy';
import AppHeader from './AppHeader';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';

import Icon from 'react-native-vector-icons/FontAwesome';
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
   "Daily Readings": { screen: DailyMassReadings,navigationOptions: {
    tabBarLabel: 'Daily Readings',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color="#900" />
    )
  },tabBarOptions: { 
    activeTintColor: '#e91e63'
  } },
   "Holy Rosary": { screen: HolyRosary,navigationOptions: {
    tabBarLabel: 'Holy Rosary',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color="#900" />
    )
  },tabBarOptions: { 
    activeTintColor: '#e91e63'
  }  },
   "Divine Mercy":{screen:DivineMercy,navigationOptions: {
    tabBarLabel: 'Divine Mercy',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" size={30} color="#900" />
    )
  },tabBarOptions: { 
    activeTintColor: '#e91e63'
  } },
   "About Us":{screen:About,navigationOptions: {
    tabBarLabel: 'About',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="pray" size={30} color="#900"  />
    )
  },tabBarOptions: { 
    activeTintColor: '#e91e63'
  } }
});


const Appnav=createAppContainer(TabNavigator);
export default Appnav;