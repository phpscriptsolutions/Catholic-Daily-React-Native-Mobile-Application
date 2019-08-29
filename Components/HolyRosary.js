import React,{Component} from 'react';
import {Text,View,StyleSheet,Image} from 'react-native';
import AppHeader from './AppHeader';
import { ScrollView } from 'react-native-gesture-handler';
export default class HolyRosary extends Component
{
    render()
    {
        return(
            <View>
           
            <ScrollView style={{left: 0,right: 0,bottom: 0}} >
            <AppHeader title='The Holy Rosary'/>
                <Text style={styles.TextHeader}>How to Pray the Rosary</Text>
                <Text style={styles.TextSubHeader}>On the crucifix, make the sign of the cross and then pray the Apostles’ Creed.</Text>
                <Text style={styles.TextMargin}>I believe in God, the Father Almighty, Creator of Heaven and earth; and in Jesus Christ, His only Son, Our Lord, Who was conceived by the Holy Ghost, born of the Virgin Mary, suffered under Pontius Pilate, was crucified; died, and was buried. He descended into Hell; the third day He arose again from the dead; He ascended into Heaven, sitteth at the right hand of God, the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.</Text>
                <Text style={styles.TextSubHeader}>On the next large bead, say the Our Father</Text>
                <Text style={styles.TextMargin}>Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen.</Text>
                <Text style={styles.TextSubHeader }>On the following three small beads, pray three Hail Marys</Text>
                <Text style={styles.TextMargin}>Hail Mary, full of grace. The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</Text>
                <Text style={styles.TextSubHeader}>Mysteries.</Text>
                <Text style={styles.TextSubHeader}>Glorious Mystery (Sundays and Wednesdays).</Text>
                <Text style={styles.TextMargin}>The Resurrection.</Text>
                <Text style={styles.TextMargin}>The Ascension.</Text>
                <Text style={styles.TextMargin}>The Descend of the Holy Spirit.</Text>
                <Text style={styles.TextMargin}>The Assumption.</Text>
                <Text style={styles.TextMargin}>The Coronation.</Text>
                <Text style={styles.TextSubHeader}>Joyful Mystery (Mondays and Saturdays).</Text>
                <Text style={styles.TextMargin}>The Annunciation.</Text>
                <Text style={styles.TextMargin}>The Visitation.</Text>
                <Text style={styles.TextMargin}>The Nativity.</Text>
                <Text style={styles.TextMargin}>The Presentation.</Text>
                <Text style={styles.TextMargin}>The Finding of our lord in the temple.</Text>
                <Text style={styles.TextSubHeader}>Sorrowful Mystery (Tuesdays and Fridays).</Text>
                <Text style={styles.TextMargin}>The Agony in the garden.</Text>
                <Text style={styles.TextMargin}>The Scourging at the pilar.</Text>
                <Text style={styles.TextMargin}>The Crowning with thorns.</Text>
                <Text style={styles.TextMargin}>The Carrying of the cross.</Text>
                <Text style={styles.TextMargin}>The Crucifixion.</Text>
            </ScrollView>
            </View>

        );
    }
}

const styles=StyleSheet.create({
    TextHeader:{
        fontSize:20,
        margin:'1.5%'
    },
    TextSubHeader:{
        fontSize:15,
        fontWeight:"bold",
        margin:'1.5%'
    },
    TextMargin:{
        margin:'1.5%'
    }
})