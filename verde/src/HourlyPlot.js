import React, { Component } from 'react'
//import * as d3 from 'd3'; 
//import convertToCelsius from './convertToCelsius';
//import convertToKelvin from './convertToKelvin';

class HourlyPlot extends Component {
  constructor(props){
    super(props)
    this.state ={
      hourlyData:[],
      tempData:[
          
      ],
    }
  }

    render() {
//     
    var scale = this.props.scale;
  //     console.log("** Scale = ", this.props.testData);
       
  //const { hourly } = this.state.testData;
   //console.log(hourly) 

  // const peopleArray = Object.keys(hourly).map(i => hourly[i])

  //  for (const item in temperature) {
   //   console.log(peopleArray)
 //   }
  // console.log("temp = ", Array.isArray(temperature))
   //   var tempReading = [];
   //   var timeofReadingUTC =[]
   
   /* var tempReading = temperature.map((temp) => { 
      return ( console.log(temp.hourly.data))
       // console.log(temp.data.temperature)
    }); 
    var timeofReadingUTC = this.props.testData.map((temp) => { 
      return(temp.hourly.data)
    }); 
    */

  //  console.log(tempReading, timeofReadingUTC)

    


      console.log(" before scale," )
        if (this.props.scale !== "f"){ 
          console.log("scale ne f")
          switch (scale) {
            case "c":
         //     convertToCelsius(tempReading)
            break;
            case "k":
          //    convertToKelvin(tempReading)
              break;
            default:
              break;
          }
        }
          
  //    console.log(timeofReadingUTC)
        return (
            <div>
                
            </div>
        )
    }
}

export default HourlyPlot
