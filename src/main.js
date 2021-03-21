//importando o React
import React from "react";
//importando o component Home
import Home from "./components/home/home";
//importando o component Contact
import Contact from "./components/contact/contact"
//importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';
//importando o component <Switch/> e <Route/> da nossa Lib de Rotas
import {Route} from 'react-router-dom'

const Main = () => (
    <main>
        <Container>
            <switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
            </switch>
        </Container>
    </main>
);

export default Main;