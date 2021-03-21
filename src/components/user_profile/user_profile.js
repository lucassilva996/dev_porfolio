//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import {Row, Col, Card} from 'react-materialize';
//importando a foto do usuário
import avatar from '../../images/avatar.jpg';

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
    </Card>
);

export default UserProfile;