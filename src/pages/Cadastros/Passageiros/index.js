import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap';
import api from '../../../services/api';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../styles.css';

class CadPassageiros extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            nascimento: '',
            cpf: '',
            sexo: ''
        }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    submitHandler = event => {
        event.preventDefault()
        console.log(this.state)
        api.post('passageiros', this.state)
            .then(response => {
              console.log(response)  
            })
            .catch(error => {
                console.log(error)
            })
        }

    render() {
        const { nome, nascimento, cpf, sexo} = this.state
        return (
            <div>
                <Header />
                <div id="form-page">
                    <h2>Passageiro</h2>
                    <div className="form-box">
                        <Form className="form" onSubmit={this.submitHandler}>
                            <Form.Group>
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={nome}
                                    onChange={this.changeHandler}
                                    required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Data de Nascimento</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="nascimento"
                                    value={nascimento}
                                    onChange={this.changeHandler}
                                    required />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>CPF</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="cpf"
                                    maxLength="11"
                                    value={cpf}
                                    onChange={this.changeHandler}
                                    required />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Sexo</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="sexo"
                                        value={sexo}
                                        onChange={this.changeHandler}
                                        required>
                                        <option></option>
                                        <option required>Masculino</option>
                                        <option required>Feminino</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <button
                                type="submit"
                                className="btn-cadastro">
                                Cadastrar Passageiro
                            </button>
                        </Form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default CadPassageiros;