import React,{Component} from 'react';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import indisponivel from '../img/img-indisponivel.png';

export default class TabelaColaboradores extends Component{
    
    render(){
        return(
            <Table className="p-0 m-0">
                <tbody>
                    {
                        this.props.lstColaboradores.map(
                            colaborador => {
                                return(
                                    <tr key={colaborador.nome} className="m-0 p-0" >
                                        <td className="d-flex justify-content-center m-0 p-0">
                                            {(colaborador.foto) ? <Image src={colaborador.foto} width={118} height={118} rounded /> : <Image src={indisponivel} width={118} height={118} rounded /> }
                                        </td>

                                        <td>
                                            <h2 className="mt-0 mb-1">{colaborador.nome}</h2>
                                            <h3>{colaborador.email}</h3>
                                            <h4>{colaborador.telefone}</h4>
                                        </td>
                                        
                                        <td>
                                            <Button variant="light" size="lg" block onClick={() => this.props.editarColaborador(colaborador)}>Editar</Button>
                                            <Button variant="light" size="lg" block onClick={() => this.props.deletarColaborador(colaborador._id)}>Apagar</Button>
                                        </td>
                                    </tr>
                                );
                            }
                        )
                    }
                </tbody>
            </Table>
        );
    }
}