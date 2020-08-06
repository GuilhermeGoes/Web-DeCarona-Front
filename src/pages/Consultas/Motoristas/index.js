import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import Table from 'react-bootstrap/Table';

import api from '../../../services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';

class TableMotoristas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            motoristas: []
        }
    }

    componentDidMount() {
        api.get('motoristas')
            .then(response => {
                console.log(response)
                this.setState({ motoristas: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { motoristas } = this.state

        return (
            <div>
                <Header />
                <div>
                    <div id="cabecalho">
                        <h2>Motoristas</h2>
                        <Link className="btn-add" to="/cadastro-motoristas">
                            + Novo Motorista
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
                                    <th>Modelo de Carro</th>
                                    <th>Status</th>
                                    <th>Sexo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {motoristas.map(motorista => {
                                    return (
                                        <tr>
                                            <td>{motorista.id}</td>
                                            <td>{motorista.nome}</td>
                                            <td>
                                                <Moment format="DD/MM/YYYY">
                                                    {motorista.nascimento}
                                                </Moment>
                                            </td>
                                            <td>{motorista.cpf}</td>
                                            <td>{motorista.modeloCarro}</td>
                                            <td>{motorista.status}</td>
                                            <td>{motorista.sexo}</td>
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

export default TableMotoristas;