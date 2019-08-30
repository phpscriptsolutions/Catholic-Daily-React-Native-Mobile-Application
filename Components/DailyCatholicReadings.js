import React,{Component} from 'react';
import {Text,View,ScrollView,Alert,Button,ActivityIndicator,Image} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Fragment,} from 'react-native/Libraries/NewAppScreen';
import AppHeader from './AppHeader';
import Dialog, { DialogContent } from 'react-native-modal';
export default class DailyMassReadings extends React.Component
{

    constructor()
    {
        super();

    
    this.state = {
        ReadingList:[],
        FirstReading:'',
        Psalm:'',
        SecondReading:'',
        Gospel:'',
        Date:'',
        Readings:[],
         FirstReadingText:[],
         PsalmReadingText:[],
         SecondReadingText:[],
         GospelReadingText:[],
         FirstReadingBody:'',
         PsalmReadingBody:'',
         SecondReadingBody:'',
         GospelReadingBody:'',
         NetworkState:false,
         Loading:true,
         Error:''
      }

      this.handleOnChange=this.handleOnChange.bind(this);
    }


handleOnChange(e)
{
    
    this.setState({[e.target.name]:e.target.value})
    this.fetchTodayReadings(e.target.value)
    this.fetchReadingText();
}

async fetchReadingText(e)
{
    
    var References=[];
    References=this.state.SecondReading!==''?[this.state.FirstReading,
        this.state.SecondReading,this.state.Psalm,
        this.state.Gospel]:
        [this.state.FirstReading,this.state.Psalm,
        this.state.Gospel]
    await fetch('https://www.ewtn.com/se/readings/readingsservice.svc/books',
    {
        method:'POST',
        headers:{'Content-Type':'application/json',
                 'Accept':'application/json'},
                 body:JSON.stringify({References:References})
    }).then(res=>(res.json()))
    .then((success)=>
    {
        
        this.setState({Readings:success})
      //  alert(this.state.Readings.length)
    })
    .catch((error)=>{
       this.setState({Error:error})
    })
    if(this.state.Error!=='')
    {
        Alert.alert('Network Error','Internet Network Connection Not Detected');
        return;
    }
      

    this.state.Readings.length===3?
        this.setState({
            FirstReadingText:this.state.Readings[0].Chapters[0].Verses,
            PsalmReadingText:this.state.Readings[1].Chapters[0].Verses,
            SecondReadingText:'',
            GospelReadingText:this.state.Readings[2].Chapters[0].Verses
           
        }):
        this.setState({
            FirstReadingText:this.state.Readings[0].Chapters[0].Verses,
            PsalmReadingText:this.state.Readings[2].Chapters[0].Verses,
            SecondReadingText:this.state.Readings[1].Chapters[0].Verses,
            GospelReadingText:this.state.Readings[3].Chapters[0].Verses
           
        })

            var FirstReadingText='';
            var Psalm='';
            var SecondReadingText='';
            var GospelReadingText='';


                 this.state.FirstReadingText.map(e=>{
                    FirstReadingText=FirstReadingText+e.Text

                 })

                 this.state.PsalmReadingText.map(e=>{
                    Psalm=Psalm+e.Text

                 })

                  this.state.SecondReadingText.length>0?
                 this.state.SecondReadingText.map(e=>
                 {
                     
                     SecondReadingText=SecondReadingText+e.Text
                    
                }):SecondReadingText=''

                 this.state.GospelReadingText.map(e=>
                  {
        
                      GospelReadingText=GospelReadingText+e.Text
                     
                 })
              
                this.setState({FirstReadingBody:FirstReadingText})
                this.setState({PsalmReadingBody:Psalm})
                this.setState({SecondReadingBody:SecondReadingText})
                this.setState({GospelReadingBody:GospelReadingText})

}

async fetchTodayReadings(e)
{
    NetInfo.fetch().then(state=>{
        this.setState({NetworkState:state.isConnected});
         
     })
     
  
    
    await fetch('https://www.ewtn.com/se/readings/readingsservice.svc/day/'+e+'/en')
    .then((response)=>response.json())
    .catch((err)=>{
        this.setState({Error:err});
     return;
    })
    .then((success)=>this.setState({ReadingList:success}))
    .catch((err)=>{
        this.setState({Error:err});
     return;
    });
    this.state.Error!==''?
    '':
    this.state.ReadingList.ReadingGroups[0].Readings.length===4?

         this.setState({FirstReading:this.state.ReadingList.ReadingGroups[0].Readings[0].Citations[0].Reference,
                     Psalm:this.state.ReadingList.ReadingGroups[0].Readings[1].Citations[0].Reference,
                 SecondReading:  this.state.ReadingList.ReadingGroups[0].Readings[2].Type==='Reading 2'?
        this.state.ReadingList.ReadingGroups[0].Readings[2].Citations[0].Reference:'',
                Gospel:this.state.ReadingList.ReadingGroups[0].Readings[3].Citations[0].Reference})
                :  this.setState({FirstReading:this.state.ReadingList.ReadingGroups[0].Readings[0].Citations[0].Reference,
                            Psalm:this.state.ReadingList.ReadingGroups[0].Readings[1].Citations[0].Reference,
                            Gospel:this.state.ReadingList.ReadingGroups[0].Readings[2].Citations[0].Reference,
                        SecondReading:''})
                        this.fetchReadingText(e);
}

 componentDidMount()
{
 
    
    if(!this.state.NetworkState)
    {
        var date=new Date().getFullYear()+'-'+ parseInt(new Date().getMonth()+1)+'-'+new Date().getDate().toString();
        this.setState({Date:date})
         this.fetchTodayReadings(date)
    }
  
  
}
    render()
    {
        
        return(
            

            <View>
                
                
                 {this.state.NetworkState?
            <ScrollView>
 
            <AppHeader title='Daily Mass Readings' color={this.state.ReadingList.Color} />
                <Text style={{marginLeft:'2%'}}>Date: {this.state.Date}</Text>
                <Text style={{marginLeft:'2%'}}>Title:{this.state.ReadingList.Title}</Text>
                <Text style={{marginLeft:'2%'}}>First Reading: {this.state.FirstReading}</Text>
                <Text style={{marginLeft:'2%'}}>Responsorial Psalm: {this.state.Psalm}</Text>
                <Text style={{marginLeft:'2%'}}>{this.state.SecondReading!==''?
                'Second Reading: '+ this.state.SecondReading:''}</Text>
                <Text style={{marginLeft:'2%'}}>Gospel : {this.state.Gospel}</Text>
                <Text style={{borderBottomColor: 'black',borderBottomWidth: 1,}}></Text>
                <Text style={{margin:'4%'}}>First Reading:{this.state.FirstReading} </Text>
                <ScrollView contentContainerStyle={{flexGrow:1}}>
                <Text style={{marginLeft:'4%',marginTop:'1%'}}>{this.state.FirstReadingBody}</Text>
                <Text style={{margin:'4%',color:'red'}}>Responsiorial Psalm:{this.state.Psalm}</Text>
                <Text style={{marginLeft:'4%',marginTop:'1%'}}>{this.state.PsalmReadingBody}</Text>
                <Text style={{marginLeft:'2%'}}>{this.state.SecondReading!==''?
                'Second Reading: '+ this.state.SecondReading:''}</Text>
                <Text>{this.state.SecondReadingBody}</Text>
                <Text style={{marginLeft:'4%'}}>Gospel : {this.state.Gospel}</Text>
                <Text style={{marginLeft:'4%',marginTop:'4%'}}>{this.state.GospelReadingBody}</Text>
                <Text style={{marginLeft:'2%',fontStyle:"italic"}}>{this.state.GospelReadingBody!==''?'The gospel of the Lord...praise be to you Lord Jesus Christ!':''}</Text>
                </ScrollView>
            </ScrollView>
            :
                 <Text style={{marginLeft:'4%',marginTop:'60%'}}>
                     Internet Network Not Detected!
                      Kindly Switch On Your Mobile Internet Network 
                or Connect to a Wifi network!
                 </Text>
             
                 }
           
           </View>
             
       
             
             
        );
    }

}
