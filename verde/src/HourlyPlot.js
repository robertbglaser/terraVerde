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
          {"time":1577223960,"precipIntensity":0,"precipProbability":0},
          {"time":1577224020,"precipIntensity":0,"precipProbability":0},
          {"time":1577224080,"precipIntensity":0,"precipProbability":0},
          {"time":1577224140,"precipIntensity":0,"precipProbability":0},
          {"time":1577224200,"precipIntensity":0,"precipProbability":0},
          {"time":1577224260,"precipIntensity":0,"precipProbability":0},
          {"time":1577224320,"precipIntensity":0,"precipProbability":0},
          {"time":1577224380,"precipIntensity":0,"precipProbability":0},
          {"time":1577224440,"precipIntensity":0,"precipProbability":0},
          {"time":1577224500,"precipIntensity":0,"precipProbability":0},
          {"time":1577224560,"precipIntensity":0,"precipProbability":0},
          {"time":1577224620,"precipIntensity":0,"precipProbability":0},
          {"time":1577224680,"precipIntensity":0,"precipProbability":0},
          {"time":1577224740,"precipIntensity":0,"precipProbability":0},
          {"time":1577224800,"precipIntensity":0,"precipProbability":0},
          {"time":1577224860,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.01,"precipType":"rain"},
          {"time":1577224920,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.01,"precipType":"rain"},
          {"time":1577224980,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577225040,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577225100,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.03,"precipType":"rain"},
          {"time":1577225160,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.03,"precipType":"rain"},
          {"time":1577225220,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.04,"precipType":"rain"},
          {"time":1577225280,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.04,"precipType":"rain"},
          {"time":1577225340,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.04,"precipType":"rain"},
          {"time":1577225400,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.04,"precipType":"rain"},
          {"time":1577225460,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.04,"precipType":"rain"},
          {"time":1577225520,"precipIntensity":0,"precipProbability":0},
          {"time":1577225580,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.03,"precipType":"rain"},
          {"time":1577225640,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.03,"precipType":"rain"},
          {"time":1577225700,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.03,"precipType":"rain"},
          {"time":1577225760,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577225820,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577225880,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577225940,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577226000,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577226060,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.02,"precipType":"rain"},
          {"time":1577226120,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.01,"precipType":"rain"},
          {"time":1577226180,"precipIntensity":0.003,"precipIntensityError":0.001,"precipProbability":0.01,"precipType":"rain"},
          {"time":1577226240,"precipIntensity":0,"precipProbability":0},
          {"time":1577226300,"precipIntensity":0,"precipProbability":0},
          {"time":1577226360,"precipIntensity":0,"precipProbability":0},
          {"time":1577226420,"precipIntensity":0,"precipProbability":0},
          {"time":1577226480,"precipIntensity":0,"precipProbability":0},
          {"time":1577226540,"precipIntensity":0,"precipProbability":0},
          {"time":1577226600,"precipIntensity":0,"precipProbability":0},
          {"time":1577226660,"precipIntensity":0,"precipProbability":0},
          {"time":1577226720,"precipIntensity":0,"precipProbability":0},
          {"time":1577226840,"precipIntensity":0,"precipProbability":0},
          {"time":1577226900,"precipIntensity":0,"precipProbability":0},
          {"time":1577226960,"precipIntensity":0,"precipProbability":0},
          {"time":1577227020,"precipIntensity":0,"precipProbability":0},
          {"time":1577227080,"precipIntensity":0,"precipProbability":0},
          {"time":1577227140,"precipIntensity":0,"precipProbability":0},
          {"time":1577227200,"precipIntensity":0,"precipProbability":0},
          {"time":1577227260,"precipIntensity":0,"precipProbability":0},
          {"time":1577227320,"precipIntensity":0,"precipProbability":0},
          {"time":1577227440,"precipIntensity":0.002,"precipIntensityError":0,"precipProbability":0.03,"precipType":"rain"}
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
