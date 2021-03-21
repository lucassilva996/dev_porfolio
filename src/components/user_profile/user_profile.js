//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import {Row, Col, Card} from 'react-materialize';
//importando a foto do usuário
import avatar from '../../images/avatar.jpg';
//importando os badges das tecnologias
import csharp from '../../images/csharp.ico';
import visualstudio from '../../images/visualstudio.ico';
import dotnet from '../../images/dotnet.ico';
import docker from '../../images/docker.ico';
import git from '../../images/git.ico';
import sql from '../../images/sql.ico';
import linux from '../../images/linux.ico';
import react from '../../images/react.ico';
import html from '../../images/html.ico';
import css from '../../images/css.ico';
import javascript from '../../images/javascript.ico';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="cicle responsive-img"/>
            </Col>
        </Row>
        <Row className="center-align">
            <h5>Lucas S. Lima</h5>
            <p className="grey darken-2 white-text">Desenvolvedor .Net JR</p>
        </Row>
        <Row className ="center-align">
            <img src={csharp} className="cicle responsive-img" width="40" height="40"/>
            <img src={visualstudio} className="cicle responsive-img" width="40" height="40"/>
            <img src={dotnet} className="cicle responsive-img" width="40" height="40"/>
            <img src={docker} className="cicle responsive-img" width="40" height="40"/>
            <img src={git} className="cicle responsive-img" width="40" height="40"/>
            <img src={sql} className="cicle responsive-img" width="40" height="40"/>
            <img src={linux} className="cicle responsive-img" width="40" height="40"/>
            <img src={react} className="cicle responsive-img" width="40" height="40"/>
            <img src={html} className="cicle responsive-img" width="40" height="40"/>
            <img src={css} className="cicle responsive-img" width="40" height="40"/>
            <img src={javascript} className="cicle responsive-img" width="40" height="40"/>
        </Row>
    </Card>
);

export default UserProfile;