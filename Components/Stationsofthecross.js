import React,{Component} from 'react';
import {View,Text,ScrollView,StyleSheet,Button} from 'react-native';
import AppHeader from './AppHeader';
import Icon from 'react-native-vector-icons/FontAwesome';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
export default class StationsOfTheCross extends Component{

    constructor()
    {
        super();
        this.state={
            station:1
        }
    }


render()
{

    return(
        <ScrollView>
            <AppHeader title ='Stations of the cross'/>
            
            <View>
                <Text style={styles.StationHeader}>First Station</Text>
               
                <Text style={styles.StationName}>Jesus is condemed to death!</Text>
                <Text style={styles.StationText}>{`Leader: We adore Thee, O Christ, and bless Thee.
All: Because by Thy holy cross Thou hast redeemed the world.`}</Text>
                <Text style={styles.StationText}>{`Christ speaks:
 
 In Pilate’s hands
 I see my Father’s will.Though Pilate is unjust,he is the lawful governor and he has power over me.
 And so the son of God obeys a son of man If I can bow to Pilate’s rule because this is my Father’s will,
 can you refuse obedience
 to those who you are accountable to?.
 `}</Text>
 <Text style={styles.StationText}>{`Person replies:

 My Jesus, Lord,
 obedience cost you your life.
 For me
 it costs an act of will
 no more
 and yet how hard it is for me to bend.
  
 Remove the blinkers from my eyes
 that I may see that it is you whom I serve
 in all that hold me to account.
 Lord it is you.`}</Text>

 <Text style={styles.StationText}>{`Our Father.... Hail Mary.... Glory Be to the Father....

Leader: Jesus Christ Crucified.
All: Have mercy on Us.
Leader: May the souls of the faithful departed, through the mercy of God, Rest in peace.
All: Amen.`}</Text>

            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
            <View>
                
            </View>
        </ScrollView>
    )
}

}

const styles=StyleSheet.create({
    StationHeader:{
        marginTop:'3%',
        textAlign:"center",
        fontWeight:"bold"
    },
    StationName:{
        marginTop:'1%',
        textAlign:"center"
    },
    StationText:{
        marginLeft:'4%',
        marginRight:'4%'
    }
})