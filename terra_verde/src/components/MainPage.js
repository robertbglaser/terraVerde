import React, { Component, Fragment } from 'react'
import HourlyPlot from './HourlyPlot';


class mainPage extends Component {
    constructor (props){
        super(props)
        this.state = {
            lat: '',
            long: '',
            responseData: [],    
            scale:"",
            timezone:''

        }
    }
    handleLat =(e) => {
        
        this.setState({lat:e.target.value});
    }

    handleLong = (e) => {
       
        this.setState({long:e.target.value});
    }

    handleSelectScale = (e) => {
        this.setState({scale:e.target.value});
    }


    getData = (e) => {
        console.log('inGetData ' )
      //  https://api.darksky.net/forecast/cba9500dd43a57aee89b557b69431f52/37.878450,-122.525350
        // https://api.darksky.net/forecast/[key]/[latitude],[longitude]
        const apiKey = "cba9500dd43a57aee89b557b69431f52/";
        const url = "/forecast/";
        const millValleyLat = "37.878450,";
        const millValleyLong = "-122.525350"
        
        const uriString = url+apiKey+millValleyLat+millValleyLong;
        console.log(uriString)
        
            fetch(uriString, {mode: 'cors' })
            .then(res => res.json())
         //   .then(data => this.setState({ responseData: data}))
            
         
    }
    
    render() {
        return (
            <Fragment>
                <form className="form-inline"> 
                <div className="form-group mb-2">   
                    <label>Enter your Latitude here</label> 
                    <input type="text" name="lat" value={this.state.lat} onChange={this.handleLat}/> 
            </div>
            <div className="form-group mb-2">
                <label>Enter your longitude here</label> 
                <input type="text" name="long" value={this.state.long} onChange={this.handleLong}/>
            </div>
            <div className="form-group mb-2">
                <label>Please enter your preferred Tempauture Scale</label> 
                <select value={this.state.scale} onChange={this.handleSelectScale}>
                    <option value=''> Select one</option>
                    <option value='c' >Celsisus</option>
                    <option value='f' >Fahrenheit</option>
                    <option value='k' >Kelvin</option>
                </select>
            </div>
            <br/>
            <div> 
                <button type="submit" onClick={this.getData}>Get Forcast</button>
            </div>
            </form>
            <HourlyPlot testData = {this.state.responseData} scale={this.state.scale}/>
            </Fragment>
        
        )
    }
}

export default mainPage
