import React, { Component } from 'react';
import * as d3 from 'd3'; 
import convertToCelsius from './convertToCelsius';
import convertToKelvin from './convertToKelvin';
//import drawChart from './drawChart'


class HourlyPlot extends Component {


drawChart(data){
    console.log("drawBarChart")
    const canvasHeight = 400
          const canvasWidth = 600
          const scale = 20
          const svgCanvas = d3.select(this.refs.canvas)
          .append('svg')
          .attr('width', canvasWidth)
          .attr('height', canvasHeight)
          .style('border', '1px solid black')
          svgCanvas.selectAll('rect')
          .data(data).enter()
          .append('rect')
          .attr('width', 40)
          .attr('height', (datapoint) => datapoint * scale)
          .attr('fill', 'purple')
          .attr('x', (datapoint, iteration) => iteration * 45)
          .attr('y', (datapoint) => canvasHeight - datapoint * scale)
          svgCanvas.selectAll('text')
          .data(data).enter()
              .append('text')
              .attr('x', (dataPoint, i) => i * 45 + 10)
              .attr('y', (dataPoint, i) => canvasHeight - dataPoint * scale - 10)
              .text(dataPoint => dataPoint)
      //  svgCanvas.append('g')
          //  .attr("class", "y axis")
          //.call("yAxis") 

  };  
    
    render() { 

      console.log("in hourly")
       var scale = this.props.scale;
       console.log("** Scale = ",this.props.responseData);
       
    //    var temperature = [];
        const tempReading = []
   //     temperature = this.props.responseData;
        
       // var tempReading = temperature.map((temp) => { 
       //     return temp.temperature
     // }); 
     // var timeofReadingUTC = temperature.map((temp) => { 
       // return temp.time
     // }); 

      console.log(" before scale," )
        if (this.props.scale !== "f"){ 
          console.log("scale ne f")
          switch (scale) {
            case "c":
              convertToCelsius(tempReading)
            break;
            case "k":
              convertToKelvin(tempReading)
              break;
            default:
              break;
          }
        }
          
   //   console.log(timeofReadingUTC)
      
      

        return ( 
        <div ref="canvas">
          
        </div> 



        )
    }   
}
export default HourlyPlot;