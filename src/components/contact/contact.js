//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import {Row, Col, Card} from 'react-materialize';
//importando o component UserProfile
import UserProfile from '../user_profile/user_profile'
//importando o icone do github
import github from '../../images/github.png';
//importando o icone do linkedin
import linkedin from '../../images/linkedin.png';
//importando o icone do whatsapp
import whatsapp from '../../images/whatsapp.png';

const Contact = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile/>
        </Col>
        <Col m={8} s={12}>
             <h5>Contato</h5>
            <Card>
                
                <p>Seguem abaixo os meus contatos: </p>
                <br/>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996" target="_blank" rel="noreferrer"><img src={github} alt="github"className="cicle responsive-img" width="120" height="120"/></a>
                </Row>
                <Row className ="center-align">
                    <a href="https://www.linkedin.com/in/lucassilva996/" target="_blank" rel="noreferrer"><img src={linkedin}  alt="linkedin" className="cicle responsive-img" width="120" height="120"/></a>
                </Row>
                <Row className ="center-align">
                    <a href="https://wa.me/5511990055881" target="_blank" rel="noreferrer"><img src={whatsapp} alt="whatsapp" className="cicle responsive-img" width="120" height="120"/></a>
                </Row>  
            </Card>
        </Col>
    </Row>
);

export default Contact