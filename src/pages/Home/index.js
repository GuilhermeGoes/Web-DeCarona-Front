import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css'

const Home = () => {
    return (
        <div>
            <Header />

            <div id="page-home">
                <main>
                    <h1>Cadastre uma corrida.</h1>
                    <Link to="/cadastro-corridas">
                        Cadastrar Corrida
                </Link>
                </main>
            </div>

            <Footer />
        </div>
    )
}

export default Home;