import React,{Component} from 'react';
import './App.css';
import TabelaColaboradores from './components/tabelaColaboradores';
import Rodape from './components/rodape';
import Cabecalho from './components/cabecalho';


export default class App extends Component{  
  
  constructor(){
    super();

    this.setListaColaboradores = this.setListaColaboradores.bind(this);
    this.setFiltro = this.setFiltro.bind(this);
    this.filtrar = this.filtrar.bind(this);
    this.filtrarPorInicial = this.filtrarPorInicial.bind(this);
    
    this.state = {
      lstColaboradores: [],
      filtro: ''
    }
  }

  componentDidMount(){
    this.loadColaboradores();
  }
  
  loadColaboradores = async () => {
    //return fetch(`http://private-ba46ed-softtrainee.apiary-mock.com/colaboradores`)
    return fetch(`http://localhost:3001/api/colaboradores/`)
    .then( response => {
      return response.json().then( colaboradores => {
         this.setState({lstColaboradores: colaboradores});
      })
      .catch(error => {
        console.log("ERRO");
      })
    })
    .catch(() => console.log("ERRO"))    
  }

  filtrar(event){
    if(event.target.value){      
      this.setState({filtro: event.target.value}, () => {
        this.setState({lstColaboradores: 
            this.state.lstColaboradores.filter(colaborador => {
              return (colaborador.nome.includes(this.state.filtro) || colaborador.celular.includes(this.state.filtro) || colaborador.email.includes(this.state.filtro));
            }
          )
        });
      })
    }else{
      this.loadColaboradores();
    }
  }

  async filtrarPorInicial(event){
    if(this.state.filtro === event.target.value){
      this.loadColaboradores();
    }else{
      this.setState({filtro: event.target.value}, () => {
        this.setState({lstColaboradores: this.state.lstColaboradores.filter(colaborador => (colaborador.nome[0] === this.state.filtro))});
        }
      );
    }
  }

  setFiltro = filtro => this.setState({filtro: filtro});
  setListaColaboradores = lista => this.setState({lstColaboradores: lista});
  

  render(){ 
    return (
      <div className="container">
        
        <Cabecalho filtrar={this.filtrar} filtrarPorInicial={this.filtrarPorInicial} numResultados={this.state.lstColaboradores.length}/>

        <TabelaColaboradores lstColaboradores={this.state.lstColaboradores}/>
        
        <Rodape />   
      </div>
    );
  }
}
