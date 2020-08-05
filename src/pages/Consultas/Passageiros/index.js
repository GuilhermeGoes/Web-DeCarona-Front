import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import QueryTable from '../../../components/QueryTable';

import '../styles.css';

const TableCorridas = () => {
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
                
                <QueryTable />
            </div>
            <Footer />
        </div>
    )
}

export default TableCorridas;