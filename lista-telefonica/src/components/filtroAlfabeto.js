import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
const alfabeto =  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default class FiltroAlfabeto extends Component{
    
    render(){
        return(
            <div className="d-flex justify-content-end">
                {
                    alfabeto.map(letra => {
                        return <Button key={letra} variant="secondary" className="mr-1" onClick={this.props.filtrarPorInicial} value={letra}>{letra}</Button>
                    })
                }
            </div>
        );
    }

}