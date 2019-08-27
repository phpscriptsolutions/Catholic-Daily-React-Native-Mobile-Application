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
                <Text style={{backgroundColor:'green',color:'white',lineHeight:50}}>{this.props.title}</Text>
            </View>
        )
    }
}