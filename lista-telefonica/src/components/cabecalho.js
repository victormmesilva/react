import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import logo from '../img/logo.png';
import FiltroAlfabeto from './filtroAlfabeto';

export default class Cabecalho extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg" className="p-4 m-1">
                <Image width={80} height={80} src={logo} rounded/>
                <Navbar.Brand>
                    <h2>Lista de Colaboradores</h2>
                    <div className="d-flex align-items-end">
                        <FiltroAlfabeto filtrarPorInicial={this.props.filtrarPorInicial}/>

                        <Form inline>
                        <FormControl type="text" placeholder="Filtrar" onChange={this.props.filtrar}/>
                        </Form>
                    </div>
                    
                    <p>Resultados: {this.props.numResultados}</p>
                </Navbar.Brand>
            </Navbar>
        );
    }

}