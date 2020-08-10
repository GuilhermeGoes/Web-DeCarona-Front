import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Table, Form } from 'react-bootstrap';

import api from '../../../services/api';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';
import './motoristas.css';

class TableMotoristas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            motoristas: [],
            statusMotorista: {
                id: '',
                status: ''
            }
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

    handleChange = event => {
        let obj = JSON.parse(event.target.value)
        this.setState({ [event.target.name]: obj })
        
        console.log(this.state.statusMotorista.status)
    }

    updateStatus = event => {
        api.put(`motoristas/${this.state.statusMotorista.id}`, 
                { status: this.state.statusMotorista.status})
            .then(response => {
                console.log(response)  
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
                <div className="content">
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
                                        <tr onClick={this.updateStatus}>
                                            <td>{motorista.id}</td>
                                            <td>{motorista.nome}</td>
                                            <td>
                                                <Moment format="DD/MM/YYYY">
                                                    {motorista.nascimento}
                                                </Moment>
                                            </td>
                                            <td>{motorista.cpf}</td>
                                            <td>{motorista.modeloCarro}</td>
                                            <td>
                                                <Form.Control 
                                                    as="select"
                                                    className="select-status"
                                                    name="statusMotorista"
                                                    key={motorista.id}  
                                                    onChange={this.handleChange}>
                                                    <option value={JSON.stringify({id: motorista.id, status: motorista.status})}>{motorista.status}</option>
                                                    <option value={JSON.stringify({id: motorista.id, status: 'Ativo'})}>Ativo</option>
                                                    <option value={JSON.stringify({id: motorista.id, status: 'Inativo'})}>Inativo</option>
                                                </Form.Control>
                                            </td>
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