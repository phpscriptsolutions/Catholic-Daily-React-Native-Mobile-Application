/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './Components/SplashScreen'
 import Appnav from './Components/AppNavigation';
class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      Loading:true
  }
}

componentDidMount()
{
  setInterval(()=>{
    this.setState({Loading:false})
  },10000)
}
render()
{
  return(
    this.state.Loading?
    <View >
    <Text style={{color:'green',marginTop:'70%',marginLeft:'10%',
      fontSize:16}}>
        Welcome to Catholic Daily Encounter
     </Text>
     <Text style={{color:'green',marginTop:'1%',marginLeft:'5%',
     fontSize:16}}>
       Preaching the gospel through technology
     </Text>
    

    </View>
      :
    <Appnav/>
  );
}
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
