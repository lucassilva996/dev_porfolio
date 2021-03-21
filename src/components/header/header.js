//importando o React
import React from "react";

//importando os components necessários da lib react-materialize
import {Navbar, NavItem, Row} from 'react-materialize';

import { Link } from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className ="grey darken-2">
            <Link style={{ color: '#000' }} to="/">Inicio</Link>
            <Link style={{ color: '#000' }} to="/contact">Contato</Link>
        </Navbar>
    </Row>
);

export default Header;
