import logo from './logo.svg';
import './App.css';
import {Button, Alert} from "react-bootstrap";
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Test(){
  return(<Alert dismissible variant='danger'>
    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
    <p>Change this and that and try again.</p>
  </Alert>)
}

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      alerts: [],
    }

    this.alert = this.alert.bind(this);
  }

  render(){

    return (

      <div className="App">

        {this.state.alerts}
        
        <Button variant='primary' onClick={this.alert}>Click</Button>
      </div>
    );

  }

  alert(){
    this.setState((prevState) => ({
      alerts: [...prevState.alerts, <Test />]
    }));
  }

}

export default App;
