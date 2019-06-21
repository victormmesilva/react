import React,{Component} from 'react';
import './App.css';
import TabelaColaboradores from './components/tabelaColaboradores';
import Rodape from './components/rodape';
import Cabecalho from './components/cabecalho';
import CadastroColaborador from './components/cadastro-colaborador';
import ColaboradorServices from './services/colaborador-services';
import axios from 'axios';

export default class App extends Component{  
  
  constructor(){
    super();

    this.setListaColaboradores = this.setListaColaboradores.bind(this);
    this.setFiltro = this.setFiltro.bind(this);
    this.filtrar = this.filtrar.bind(this);
    this.filtrarPorInicial = this.filtrarPorInicial.bind(this);
    this.deletarColaborador = this.deletarColaborador.bind(this);
    this.editarColaborador = this.editarColaborador.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setFoto = this.setFoto.bind(this);

    this.state = {
      lstColaboradores: [],
      filtro: '',
      id: '',
      nome: '',
      email: '',
      telefone: '',
      foto: '',
      emEdicao: false
    }
  }
  
  componentDidMount = () => this.loadColaboradores();
  setFiltro = (filtro) => this.setState({filtro: filtro});
  setListaColaboradores = lista => this.setState({lstColaboradores: lista});
  setId = pId => (pId) ? this.setState({id: pId.target.value}) : this.setState({id: ''});
  setNome = pNome => (pNome) ? this.setState({nome: pNome.target.value}) : this.setState({nome: ''});
  setEmail = pEmail => (pEmail) ? this.setState({email: pEmail.target.value}) : this.setState({email: ''});
  setTelefone = pTelefone => (pTelefone) ? this.setState({telefone: pTelefone.target.value}) : this.setState({telefone: ''});
  setFoto = pFoto => (pFoto) ? this.setState({foto: pFoto.target.value}) : this.setState({foto: ''});
  setEmEdicao = bool => this.setState({emEdicao: bool});
  
  deletarColaborador = async colaboradorID => {
    axios.delete(`http://localhost:3001/api/colaboradores/${colaboradorID}`)
    .then(() => this.loadColaboradores());
  }

  editarColaborador = pColaborador => {
    this.setState({
      id: pColaborador._id,
      nome: pColaborador.nome,
      email: pColaborador.email,
      telefone: pColaborador.telefone,
      foto: pColaborador.foto,
      emEdicao: true      
    });    
  }

  loadColaboradores = async () => {
    return fetch(`http://localhost:3001/api/colaboradores/`)
    .then( response => {
      return response.json().then( colaboradores => {
         this.setState({lstColaboradores: colaboradores});
      })
      .catch(error => {
        console.log(error);
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
    const filtro = event.target.value;
    await this.loadColaboradores();

    if(this.state.filtro === filtro){
      this.setState({filtro: ''});
      return;
    }else{
      this.setState({filtro: filtro}, 
        () => 
          this.setState({lstColaboradores: this.state.lstColaboradores.filter(colaborador => (colaborador.nome[0] === this.state.filtro))})
      );
    }
  }

  render(){ 
    return (
      <div className="container">
        
        <Cabecalho filtrar={this.filtrar} filtrarPorInicial={this.filtrarPorInicial} numResultados={this.state.lstColaboradores.length}/>
        <CadastroColaborador id={this.state.id} nome={this.state.nome} email={this.state.email} telefone={this.state.telefone} foto={this.state.foto} setId={this.setId} setNome={this.setNome} setEmail={this.setEmail} setTelefone={this.setTelefone} setFoto={this.setFoto} loadColaboradores={this.loadColaboradores} emEdicao={this.state.emEdicao} setEmEdicao={this.setEmEdicao}/>
        <TabelaColaboradores lstColaboradores={this.state.lstColaboradores} deletarColaborador={this.deletarColaborador} editarColaborador={this.editarColaborador}/>
        <Rodape />   
        
      </div>
    );
  }
}
