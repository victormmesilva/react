import React, {Component} from 'react';

export default class Botao extends Component{

    render(){
        return <button onClick={this.props.funcao} value={this.props.value}>{this.props.label}</button>
    }

}