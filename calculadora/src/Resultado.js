import React, {Component} from 'react';

export default class Resultado extends Component{

    render(){
        return(
            <div>
                <label>Resultado: </label>
                <label>{this.props.resultado}</label>
            </div>
        );
    }

}