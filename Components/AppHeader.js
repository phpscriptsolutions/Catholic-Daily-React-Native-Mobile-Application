import React, { Component } from 'react';
import {View,Text} from 'react-native';
export default class AppHeader extends Component
{
    constructor(props)
    {
        super(props);
        
    }
    render()
    {
        return(
            <View>
                <Text style={{backgroundColor:'green',color:'white'}}>{this.props.title}</Text>
            </View>
        )
    }
}