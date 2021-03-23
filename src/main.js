//importando o React
import React from "react";
//importando o component Home
import Home from "./components/home/home";
//importando o component Contact
import Contact from "./components/contact/contact"
//importando o componente projects
import Projects from "./components/projects/projects";
//importando os components necessários da lib react-materialize
import { Container } from 'react-materialize';
//importando o component <Switch/> e <Route/> da nossa Lib de Rotas
import {Route, Switch} from 'react-router-dom'


const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/projects' component={Projects}/>
            </Switch>
        </Container>
    </main>
);

export default Main;
