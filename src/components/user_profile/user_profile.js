//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
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
    <Card className="card-estilo">
            <Col s={8} m={8} offset="s2 m2" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <div className="position-avatar">
                    <img src={avatar} alt="avatar" className="cicle responsive-img" />
                    <Row className="center-align">
                        <h5>Lucas S. Lima</h5>
                        <p className="grey darken-2 white-text">Desenvolvedor .Net JR</p>
                    </Row>
                </div>

                <Row className="center-align" style={{display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
                    <img src={csharp} alt="csharp" className="cicle responsive-img" width="40" height="40" />
                    <img src={visualstudio} alt="visualstudio" className="cicle responsive-img" width="40" height="40" />
                    <img src={dotnet} alt="dotnet" className="cicle responsive-img" width="40" height="40" />
                    <img src={docker} alt="docker" className="cicle responsive-img" width="40" height="40" />
                    <img src={git} alt="git" className="cicle responsive-img" width="40" height="40" />
                    <img src={sql} alt="sql" className="cicle responsive-img" width="40" height="40" />
                    <img src={linux} alt="linux" className="cicle responsive-img" width="40" height="40" />
                    <img src={react} alt="react" className="cicle responsive-img" width="40" height="40" />
                    <img src={html} alt="html" className="cicle responsive-img" width="40" height="40" />
                    <img src={css} alt="css" className="cicle responsive-img" width="40" height="40" />
                    <img src={javascript} alt="javascript" className="cicle responsive-img" width="40" height="40" />
                </Row>
            </Col>


    </Card>
);

export default UserProfile;