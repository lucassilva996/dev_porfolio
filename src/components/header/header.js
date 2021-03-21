//importando o React
import React from "react";

//importando os components necessários da lib react-materialize
import {Navbar, NavItem, Row} from 'react-materialize';

const Header = () => (
    <Row>
        <Navbar className ="grey darken-2">
            <NavItem href="/">Inicio</NavItem>
            <NavItem href="/contact">Contato</NavItem>
        </Navbar>
    </Row>
);

export default Header;
