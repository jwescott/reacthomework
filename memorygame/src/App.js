import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Grid  from "./component/Grid"

import basketball from "./basketball.json"

class App extends Component  {
  state={
    basketball
  }


  render(){
console.log(this.state.basketball)
      return <Grid basketball={this.state.basketball} />
  }
  
}

export default App;
