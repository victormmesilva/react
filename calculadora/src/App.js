import React, {Component} from 'react';
import './App.css';
import Inputs from './Inputs';
import Botoes from './Botoes';
import Resultado from './Resultado';

export default class App extends Component {

  constructor(){
    super();

    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.setOperacao = this.setOperacao.bind(this);

    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);
    this.multiplicar = this.multiplicar.bind(this);
    this.dividir = this.dividir.bind(this);

    this.state = {
      num1: 0,
      num2: 0,
      operacao: '',
      resultado: 0,
      mostrarInputs: false
    }
  }

  async setNum1(event){
    await this.setState({num1: event.target.value});
    this.calcular();
  }

  async setNum2(event){
    await this.setState({num2: event.target.value});
    this.calcular();
  } 

  async setOperacao(event){
    await this.setState({operacao: event.target.value});
    this.calcular();
  }

  somar = () => this.setState({resultado:Number(this.state.num1) + Number(this.state.num2)});
  subtrair = () => this.setState({resultado: Number(this.state.num1) - Number(this.state.num2)});
  multiplicar = () => this.setState({resultado: Number(this.state.num1) * Number(this.state.num2)});
  dividir = () => this.setState({resultado: Number(this.state.num1) / Number(this.state.num2)});

  calcular(){        
    if(!this.state.mostrarInputs) this.setState({mostrarInputs: true});

    switch(this.state.operacao){
      case '+':  
        this.somar();
        break;
      case '-': 
        this.subtrair();
        break;
      case '*': 
        this.multiplicar();
        break;
      case '/': 
        this.dividir();
        break;
      default:
        break;
    }
  }

  render(){
    return(
      <div className="App">             
          {this.state.mostrarInputs ? <Inputs setNum1={this.setNum1} setNum2={this.setNum2}  num1={this.state.num1} num2={this.state.num2}/> : null}
          <Botoes operacao={this.setOperacao}/>
          <Resultado resultado={this.state.resultado}/>
      </div>
    );
  }
}
