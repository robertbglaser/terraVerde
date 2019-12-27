import React, { Component } from 'react'

export class drawChart extends Component {
    render() {
        drawBarChart(data) {
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
          }
    
          return (
            <div ref="canvas">
                
            </div>
                
            
        )     
        }; 
        
}

export default drawChart
