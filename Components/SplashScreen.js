import React,{Component} from 'react';
import {View,Text} from 'react-native';
import DailyMassReadings from './DailyCatholicReadings';
import Appnav from './AppNavigation';

export default class SplashScreen extends Component
{
    constructor()
    {
        super();
    }
    
    
    render()
    {
        return(
        
           <View >
               <Text style={{color:'green',alignItems:'center',
            fontSize:16}}>
                    Catholic Daily Encounter
                </Text>
                <Text style={{color:'green',marginTop:'1%',marginLeft:'5%',
             fontSize:16}}>
                  Preaching the gospel through technology
                </Text>

           </View>
          
        )
    }
}