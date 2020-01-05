import React, { Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

class App extends Component {
  constructor(props){
    super(props)
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

  
 
  render () { 
  return (
    <div className="container">
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


           
            </Form>
            </div>
    )
  }
}

export default App;
