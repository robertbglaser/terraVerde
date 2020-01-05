/* eslint-disable no-undef */
import React, { Component} from 'react';
//import HourlyPlot from './BarChart';
//import * as moment from 'moment';
//import timezone from'moment-timezone';
//import convertUTC from './ConvertUTC'
import { ConvertUTC } from './ConvertUTC';
//import { convertToCelsicus } from './convertToCelsius';
//import convertToKelvin from './convertToKelvin'
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
import BarChart from './BarChart'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lat: '',
      long: '',
      tempData: [],
      scale:"",
      timeZoneOffset: "",
      timeZone:"",
      convertedTime:[],
      chartData:{
          

      }
    }
  }


  handleLat = (e) => {
    this.setState({lat: e.target.value});
}

handleLong = (e) => {
  this.setState({long: e.target.value});
}

handleSelectScale = (e) => {
  this.setState({scale:e.target.value});
}



getData = (e) => {

  console.log("get data")

  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  
  // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
 /* const apiKey = "cba9500dd43a57aee89b557b69431f52/";
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
      .then(data => console.log(data))
   //   .then(data => this.setState({ tempData: data}));  */
      


}

componentDidMount = () => {
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
  
  var hourlyTemp =[51.86, 52.06, 51.53, 50.97, 49.97, 49.05, 47.92, 47.67, 47.81]
  var hourlyTime = [1577221200, 1577224800, 1577228400, 1577232000, 1577235600,1577239200, 1577242800, 1577246400,1577250000]
 // var dailyTemp =[]
 // var dailyTime = []
 // var timeZone = '';
 // var offset = '';

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

 var pstTime = ConvertUTC(hourlyTime, 'America/Los_Angeles');
 console.log("pst = ",pstTime)
 this.setState({convertedTime: pstTime});

 // the assumption here. The default temperature scale is Fahrenheit
 /* var chartHoulyData = [];
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
} */
this.setState({chartData:{ 
  labels: pstTime,
  datasets: [
    {
        label: 'temps',
        data:hourlyTemp,
        backgroundColor:[
            'rgba(255, 99, 132, 0.6)',
            'rgba(54,162, 235, 0.6)',
            'rgba(255,206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153,102, 255, 0.6)',
            'rgba(255,159, 64, 0.6)',
            'rgba(255,99, 132, 0.6)',

        ],
    }
]
} 
})
} //end of function




  render() {


  
   
    return (
      <div className="container">
        <h1>Terra Verde code test for Robert Glaser</h1>
            <Form>
              <FormGroup row>  
                <Label>Enter your Latitude here</Label> {'\u00A0'}
                <Input type="text" name="lat" value={this.state.lat} onChange={this.handleLat}/> 
                </FormGroup>
      
            <br/>
              <FormGroup row> 
                <Label>Enter your longitude here</Label> {'\u00A0'}
                <Input type="text" name='long' value={this.state.long} onChange={this.handleLong} className="offset-sm-1"/>
              </FormGroup>
           
            <br/>
            <FormGroup row> 
                <Label>Please enter your preferred Tempauture Scale</Label> {'\u00A0'}
                <Input type="select" value={this.state.scale} onChange={this.handleSelectScale}>
                  <option value=''> Select one</option>
                  <option value='c' >Celsisus</option>
                  <option value='f' >Fahrenheit</option>
                  <option value='k' >Kelvin</option>
              </Input>
           </FormGroup>
            <br/>
          <ButtonGroup>
            <Button type="submit" color="default" onClick={this.getData}>Get Forcast</Button>
          </ButtonGroup>
          <BarChart/>

            </Form>
            </div>
    )
  }
}

export default App
