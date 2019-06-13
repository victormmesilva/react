import React, {Component} from 'react';
import Botao from './Botao';

export default class Botoes extends Component{

    render(){

        return(
            <div>
                <Botao label="Somar" value="+" funcao={this.props.operacao}/> 
                <Botao label="Subtrair" value="-" funcao={this.props.operacao}/> 
                <Botao label="Multiplicar" value="*" funcao={this.props.operacao}/> 
                <Botao label="Dividir" value="/" funcao={this.props.operacao}/> 
            </div>
        );

    }

}