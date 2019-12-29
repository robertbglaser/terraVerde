/* eslint-disable no-undef */
import React, { Component,Fragment } from 'react';
import HourlyPlot from './HourlyPlot';
import * as moment from 'moment';
import timezone from'moment-timezone';
//import convertUTC from './ConvertUTC'
import { ConvertUTC } from './ConvertUTC';
import { convertToCelsicus } from './convertToCelsius';
import convertToKelvin from './convertToKelvin'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: '',
      long: '',
      tempData: [],
      scale:"",
      timeZoneOffset: "",
      timeZone:""
    }
  }


  handleLat = (e) => {
    console.log("inside lat") 
    this.setState({lat: e.target.value});
}

handleLong = (e) => {
       console.log("inside long") 
  this.setState({long: e.target.value});
}

handleSelectScale = (e) => {
  console.log("inside scale") 
  this.setState({scale:e.target.value});
}



getData = (e) => {

  // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
  const apiKey = "cba9500dd43a57aee89b557b69431f52/";
  const url = "/forecast/";
  const millValleyLat = "37.878450,";
  const millValleyLong = "-122.525350"
  
  const uriString = url+apiKey+millValleyLat+millValleyLong;

  console.log(uriString)
  fetch(uriString)
  //.then(response => response.json())
  //.then(json => console.log(json))

      fetch(uriString, {mode: 'cors' })
      .then(res => res.json())
      .then(data => this.setState({ tempData: data}));
      


}

componentDidUpdate = () => {
  const hourly  = {...this.state.tempData}
    
    
    const peopleArray = {...hourly}
    const peopleArray2 = Object.entries(peopleArray);
  //  console.log("peopleArray2 = ", peopleArray2[5])
    const peopleArray3 = {...peopleArray2}
    const peopleArray4 = {...peopleArray3}
   // console.log("peopleArray4 = ", peopleArray4)
   // let peopleArray3 = Object.assign(peopleArray2[5])
   // let peopleArray4 = Object.entries(peopleArray3)

   //var x=  peopleArray2.map((i) => {
   //   return(console.log("4", peopleArray2))
   // })
    
    var hourlyTemp =[]
    var hourlyTime = []
    var dailyTemp =[]
    var dailyTime = []
    var timeZone = '';
    var offset = '';

   // timeZone = peopleArray4[2][1].timezone;
   // console.log("@@@@", peopleArray4)
      
  
    for(var m in peopleArray4){

      // console.log("****", peopleArray4[m][0])
    //  timeZone = peopleArray4[2][1];
    //  console.log("!!!!", timeZone)
    /*  this.setState({timeZone:timeZone})  */
    
      switch (peopleArray4[m][0]){
        case 'timezone':
            console.log("timezone found", peopleArray4[m][1])
           // for (var tz in peopleArray4[m][1].timezone){
              timeZone = peopleArray4[m][1]
             // this.setState({timeZone:timeZone})
              console.log(timeZone)
           // }  
          break;
        case 'hourly':
            for (var a in peopleArray4[m][1].data){
              hourlyTime.push(peopleArray4[m][1].data[a].time)
              hourlyTemp.push(peopleArray4[m][1].data[a].temperature)
            }  
          break;
        case 'daily':
          for (var b in peopleArray4[m][1].data){
                dailyTime.push(peopleArray4[m][1].data[b].time)
                dailyTemp.push(peopleArray4[m][1].data[b].temperatureHigh);
                
              }
          break;
          case 'offset':  
           offset = peopleArray4[m][1];
           
           break; 
        default:
          break;
              
      }; //end of switch 
    }  
    //moment.tz(1412144245453, 'America/Los_Angeles').format('MM/DD/YYYY h:mm a')
   // var timeUTC = 1577502000;
   // var convertedTime = moment.tz(timeUTC, timeZone).format('h:mm a');
   // console.log(convertedTime, timeZone);
  //  this.setState({timeZoneOffset:offset})
   var pstTime = ConvertUTC(hourlyTime, timeZone);

   // the assumption here. The default temperature scale is Fahrenheit
    var chartHoulyData = [];
   switch (this.state.scale){
    case "c":
      var hourlyTempConvertedToCelsius = convertToCelsicus(hourlyTemp)
      var chartHoulyData = hourlyTempConvertedToCelsius;
      break;
    
    case 'k':
      var hourlyTempConvertedToKelvin = convertToKelvin(hourlyTemp)
      var chartHoulyData = hourlyTempConvertedToKelvin;
      break
    default:
      chartHoulyData = hourlyTemp;


}
}



  render() {


  
     // end of fon -in loop
   // this.setState({timeZone: timezone});
        
      //   console.log(dailyTemp)
      
   // var tempReading = this.state.tempData.map((temp) => { 
     // return ( console.log(temp))
      // console.log(peopleArray)
  //  });

   
    return (
      <Fragment>
            <>    
            <label>Enter your Latitude here</label> 
            <input type="text" name="lat" value={this.state.lat} onChange={this.handleLat}/> 
            </>
            <br/>
            <>
            <label>Enter your longitude here</label> 
            <input type="text" name='long' value={this.state.long} onChange={this.handleLong}/>
            </>
            <>
            <br/>
            <label>Please enter your preferred Tempauture Scale</label> 
           <select value={this.state.scale} onChange={this.handleSelectScale}>
               <option value=''> Select one</option>
               <option value='c' >Celsisus</option>
               <option value='f' >Fahrenheit</option>
               <option value='k' >Kelvin</option>
           </select>
            </>
            <br/>

            <button type="submit" onClick={this.getData}>Get Forcast</button>
            <HourlyPlot testData = {this.state.tempData} scale={this.state.scale}/>

            </Fragment>
    )
  }
}

export default App
