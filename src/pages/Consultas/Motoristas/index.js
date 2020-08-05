import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import QueryTable from '../../../components/QueryTable';
import api from '../../../services/api';

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
            this.setState({motoristas: response.data})
        })
        .catch (error => {
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

                    <QueryTable />
                    
                </div>
                <Footer />
            </div>
        )
    }
}

export default TableMotoristas;