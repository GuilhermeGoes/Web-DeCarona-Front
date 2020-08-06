import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table';

import api from '../../../services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';

class TablePassageiros extends Component {
    constructor (props) {
        super(props)
        
        this.state = {
            passageiros: []
        }
    }

    componentDidMount() {
        api.get('passageiros')
            .then(response => {
                console.log(response)
                this.setState({ passageiros: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }
    
    render() {
        const { passageiros } = this.state

        return (
            <div>
                <Header />
                <div>
                    <div id="cabecalho">
                        <h2>Passageiros</h2>
                        <Link className="btn-add" to="/cadastro-passageiros">
                            + Novo passageiro
                    </Link>
                    </div>

                    <div id="table-page">
                        <Table striped hover id="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Nascimento</th>
                                    <th>CPF</th>
                                    <th>Sexo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {passageiros.map(passageiro => {
                                    return (
                                        <tr>
                                            <td>{passageiro.id}</td>
                                            <td>{passageiro.nome}</td>
                                            <td>
                                                <Moment format="DD/MM/YYYY">
                                                    {passageiro.nascimento}
                                                </Moment>
                                            </td>
                                            <td>{passageiro.cpf}</td>
                                            <td>{passageiro.sexo}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default TablePassageiros;