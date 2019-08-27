import React,{Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import {Fragment,} from 'react-native/Libraries/NewAppScreen';
import AppHeader from './AppHeader';
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
         GospelReadingBody:''
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
        alert(error.message);
    })
      

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

                // for(var a=0;a<this.state.PsalmReadingText;a++)
                // {
                //     Psalm=Psalm+this.state.PsalmReadingText[a].Text
                // }
                // for(var a=0;a<this.state.PsalmReadingText;a++)
                // {
                //     Psalm=Psalm+this.state.PsalmReadingText[a].Text
                // }
            
                // // this.state.SecondReadingText.length>0?
                // // this.state.SecondReadingText.map(e=>
                // // {
                // //     return(
                // //     SecondReadingText=SecondReadingText+e.Text
                // //     )
                // // }):SecondReadingText=''

                // for(var a=0;a<this.state.GospelReadingText;a++)
                // {
                //     GospelReadingText=GospelReadingText+this.state.PsalmReadingText[a].Text
                //     alert(GospelReadingText);
                // }
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
    
    await fetch('https://www.ewtn.com/se/readings/readingsservice.svc/day/'+e+'/en')
    .then((response)=>response.json())
    .then((success)=>this.setState({ReadingList:success}))
    .catch((err)=>{
        alert(err);
    });

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
    var date=new Date().getFullYear()+'-'+ parseInt(new Date().getMonth()+1)+'-'+new Date().getDate().toString();
   this.setState({Date:date})
    this.fetchTodayReadings(date)
  
}
    render()
    {
        return(
            
            <ScrollView>
                <AppHeader title='Daily Mass Readings' />
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
                <Text style={{margin:'4%'}}>{this.state.FirstReadingBody}</Text>
                <Text style={{margin:'4%',color:'red'}}>Responsiorial Psalm:{this.state.Psalm}</Text>
                <Text style={{margin:'4%'}}>{this.state.PsalmReadingBody}</Text>
                <Text style={{marginLeft:'2%'}}>{this.state.SecondReading!==''?
                'Second Reading: '+ this.state.SecondReading:''}</Text>
                <Text>{this.state.SecondReadingBody}</Text>
                <Text style={{marginLeft:'2%'}}>Gospel : {this.state.Gospel}</Text>
                <Text style={{margin:'4%'}}>{this.state.GospelReadingBody}</Text>
                <Text style={{marginLeft:'2%',fontStyle:"italic"}}>{this.state.GospelReadingBody!==''?'The gospel of the Lord...praise be to you Lord Jesus Christ!':''}</Text>
                </ScrollView>
            </ScrollView>
           
        )
    }

}
