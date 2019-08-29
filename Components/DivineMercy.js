import React,{Component} from 'react';
import {ScrollView,Text,StyleSheet,View} from 'react-native';
import AppHeader from './AppHeader';

export default class DivineMercy extends Component
{

    render()
    {
        return(
            <View>
            <ScrollView>
            <AppHeader title='Divine Mercy Prayer (3 o clock prayer)'/>
            <Text style={styles.Header}>How to Recite the Chaplet</Text>
            <Text style={styles.body}>The Chaplet of Mercy is recited using ordinary rosary beads of five decades. The Chaplet is preceded by two opening prayers from the Diary of Saint Faustina and followed by a closing prayer.</Text>
            <Text style={styles.subheader}>1. Make the Sign of the Cross</Text>
            <Text style={styles.body}>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</Text>
            <Text style={styles.subheader}>2. Optional Opening Prayers</Text>
            <Text style={styles.body}>You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.</Text>
            <Text style={styles.body}>(Repeat three times) 
                O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You! </Text>
            <Text style={styles.subheader}>3. Our Father</Text>
            <Text style={styles.body}>Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil, Amen.</Text>
            <Text style={styles.subheader}>4. Hail Mary</Text>
            <Text style={styles.body}>Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death, Amen.</Text>
            <Text style={styles.subheader}>5. The Apostles’ Creed</Text>
            <Text style={styles.body}>I believe in God, the Father almighty, Creator of heaven and earth, 
                and in Jesus Christ, His only Son, 
                our Lord, who was conceived by the Holy Spirit, 
                born of the Virgin Mary, suffered under Pontius Pilate,
                was crucified, died and was buried; He descended into hell;
                on the third day He rose again from the dead; He ascended into heaven, 
                and is seated at the right hand of God the Father almighty; from there
                He will come to judge the living and the dead. I believe in the Holy Spirit,
                the holy catholic Church, the communion of saints, the forgiveness of sins, 
                the resurrection of the body,
                and life everlasting. Amen.</Text>
            <Text style={styles.subheader}>6. The Eternal Father</Text>
            <Text style={styles.body}>Eternal Father, I offer you the Body 
            and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.</Text>
            <Text style={styles.subheader}>7. On the 10 Small Beads of Each Decade</Text>
            <Text style={styles.body}>For the sake of His sorrowful Passion, have mercy on us and on the whole world.</Text>
            <Text style={styles.subheader}>8. Repeat for the remaining decades</Text>
            <Text style={styles.body}>Saying the "Eternal Father" (6) on the "Our Father" bead and then 10 "For the sake of His sorrowful Passion" (7) on the following "Hail Mary" beads.</Text>
            <Text style={styles.subheader}>9. Conclude with Holy God (Repeat three times)</Text>
            <Text style={styles.body}>Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.</Text>
            <Text style={styles.subheader}>10. Optional Closing Prayer</Text>
            <Text style={styles.body}>Eternal God, in whom mercy is endless and the treasury of compassion — inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.</Text>
            </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    Header:{
        fontSize:20,
        fontWeight:"bold",
        marginLeft:'3%'
    },
    body:{
        marginLeft:'3%',
        marginTop:'1%'
    },
    subheader:{
        fontWeight:"bold",
        marginLeft:'3%',
        marginTop:'1%'
    }
})