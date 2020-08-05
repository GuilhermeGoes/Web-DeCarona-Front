import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import TableCorridas from './pages/Consultas/Corridas';
import TableMotoristas from './pages/Consultas/Motoristas';
import TablePassageiros from './pages/Consultas/Passageiros';
import CadCorridas from './pages/Cadastros/Corridas';
import CadMotoristas from './pages/Cadastros/Motoristas';
import CadPassageiros from './pages/Cadastros/Passageiros';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={TableCorridas} path="/table-corridas" />
            <Route component={TableMotoristas} path="/table-motoristas" />
            <Route component={TablePassageiros} path="/table-passageiros" />
            <Route component={CadCorridas} path="/cadastro-corridas" />
            <Route component={CadMotoristas} path="/cadastro-motoristas" />
            <Route component={CadPassageiros} path="/cadastro-passageiros" />
        </BrowserRouter>
    );
}

export default Routes;