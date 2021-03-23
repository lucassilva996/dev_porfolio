//importando o React
import React from "react";

//importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row } from 'react-materialize';
import { Link } from 'react-router-dom'

const Header = () => (
    <Row>
        <Navbar className="grey darken-2">
            <Link to="/" style={{ color: "#000" }}>
                <NavItem>
                    Inicio
                </NavItem>
            </Link>
            <Link to="/projects" style={{ color: "#000" }}>
                <NavItem >
                    Projetos
                </NavItem>
            </Link>
            <Link to="/contact" style={{ color: "#000" }}>
                <NavItem >
                    Contato
                </NavItem>
            </Link>
        </Navbar>
    </Row>
);

export default Header;
