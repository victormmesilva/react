import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Rodape extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg" className="justify-content-center" >
                <h6>Victor Matheus de Moraes e Silva</h6>
            </Navbar>     
        );
    }
}