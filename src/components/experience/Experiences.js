//importando o React
import React from "react";

//importando os componentes necessários da lib-materialize
import {Row, Col, Card} from 'react-materialize';

//recebe os parâmetros passados para o componente na váriavel props
const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} alt="avatar" className="circle responsive-img"/>
                {props.name}
            </Col>

            <Col s={10} m={10}>
                <p><b>{props.title} em <span className="grey darken-2 white-text">{props.company}</span></b></p>
                <p>{props.description}</p>
            </Col>
        </Row>
    </Card>
);

export default Experience;