import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Logo.png'
import './styles.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                <Link to="/">
                    <Image className="logo" src={logo} alt="DeCarona" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="margins"> 
                        <Link className="head-link" to="/table-corridas">
                            Corridas
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="margins">
                        <Link className="head-link" to="/table-motoristas">
                            Motoristas
                        </Link>
                    </Nav.Link>
                    <Nav.Link className="margins">
                        <Link className="head-link" to="/table-passageiros">
                            Passageiros
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;