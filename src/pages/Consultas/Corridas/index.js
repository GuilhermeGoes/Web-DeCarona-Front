import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import api from '../../../services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';
class TableCorridas extends Component {
    constructor (props) {
        super(props)

        this.state = {
            corridas: []
        }
    }

    refreshPage() {
        window.location.reload(false);
    }

    componentDidMount() {
        api.get('corridas')
            .then(response => {
                console.log(response)
                this.setState({ corridas: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { corridas } = this.state

        return (
            <div>
                <Header />
                <div>
                    <div id="cabecalho">
                        <h2>Corridas</h2>
                        <Link className="btn-add" to="/cadastro-corridas">
                            + Nova corrida
                    </Link>
                    </div>

                    <div id="table-page">
                        <Table striped hover id="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Motorista</th>
                                    <th>Passageiro</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {corridas.map(corrida => {
                                    return (
                                        <tr>
                                            <td>{corrida.id}</td>
                                            <td>{corrida.nome_motorista}</td>
                                            <td>{corrida.nome_passageiro}</td>
                                            <td>{corrida.valor}</td>
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

export default TableCorridas;