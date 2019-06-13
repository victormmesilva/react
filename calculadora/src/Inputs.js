import React, {Component} from 'react';
import Input from './Input.js';

export default class Inputs extends Component{

    constructor(props){   
        super();
    }   
  
    render(){
  
      return(
          <div>
              <Input label="Num 1: " id="num1" type="number" name="num1" value={this.props.num1} onChange={this.props.setNum1}/>
              <Input label="Num 2: " id="num2" type="number" name="num2" value={this.props.num2} onChange={this.props.setNum2}/>
          </div>
      );
  
    }
  }