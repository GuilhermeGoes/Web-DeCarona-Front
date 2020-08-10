import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import api from '../../../services/api';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';

class CadCorridas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_motorista: '',
            id_passageiro: '',
            valor: '',
            motoristas: [],
            passageiros: []
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        api.post('corridas', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })

        alert('Corrida adicionada com sucesso!')
        this.props.history.push('/table-corridas')
        window.location.reload(false);
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
        const { valor, motoristas, passageiros } = this.state
        return (
            <div>
                <Header />
                <div id="form-page">
                    <h2>Corrida</h2>
                    <div className="form-box">
                        <Form className="form" onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label>Motorista</Form.Label>
                                <Form.Control
                                    as='select'
                                    name="id_motorista"
                                    onChange={this.changeHandler}
                                    required>
                                    <option></option>
                                    {motoristas.filter(motorista => motorista.status === 'Ativo').map(fMotorista => {
                                        return (
                                            <option 
                                                key={fMotorista.id}
                                                value={fMotorista.id}>
                                                    {fMotorista.nome}
                                            </option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Passageiro</Form.Label>
                                <Form.Control
                                    as='select'
                                    name="id_passageiro"
                                    onChange={this.changeHandler}
                                    required>
                                    <option></option>
                                    {passageiros.map(passageiro => {
                                        return (
                                            <option 
                                                key={passageiro.id}
                                                value={passageiro.id}>
                                                    {passageiro.nome}
                                            </option>
                                        )
                                    })}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Valor</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    step="any"
                                    name="valor"
                                    value={valor}
                                    onChange={this.changeHandler}
                                    required />
                            </Form.Group>

                            <button
                                type="submit"
                                className="btn-cadastro">
                                Cadastrar Corrida
                            </button>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CadCorridas;