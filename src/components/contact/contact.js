//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import {Row, Col, Card, CardImage} from 'react-materialize';
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
             <h5> Contato</h5>
            <Card>
                
                <p>Seguem abaixo os meus contatos: </p>
                <br/>
            
                <row>
                    <a href="https://github.com/lucassilva996" target="_blank"><img src={github} className="cicle responsive-img" width="120" height="120"/></a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </row>
                <row>
                    <a href="https://www.linkedin.com/in/lucassilva996/" target="_blank"><img src={linkedin} className="cicle responsive-img" width="120" height="120"/></a>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </row>
                <row>
                    <a href="https://wa.me/5511990055881" target="_blank"><img src={whatsapp} className="cicle responsive-img" width="120" height="120"/></a>
                </row>  
            
            </Card>
        </Col>
    </Row>
);

export default Contact