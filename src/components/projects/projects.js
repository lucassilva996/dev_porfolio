import React from "react";

import {Row, Col, Card} from 'react-materialize';
//importando o component UserProfile
import UserProfile from '../user_profile/user_profile'

//importando a imagem do projeto 1
import projeto1 from '../../images/projects/transacoesbancarias.png';

//importando a imagem do projeto 2
import projeto2 from '../../images/projects/cadastrodeseries.png';

//importando a imagem do projeto 3
import projeto3 from '../../images/projects/crud-api.png';

//importando a imagem do projeto 4
import projeto4 from '../../images/projects/react-http.png';

//importando a imagem do projeto 5
import projeto5 from '../../images/projects/tela-login-netflix.png';

//importando a imagem do projeto 6
import projeto6 from '../../images/projects/sistema-reservas.png';

//importando a imagem do projeto 7
import projeto7 from '../../images/projects/crud-firestore.png';

const Projects = () => (

        <Row>
            <Col m={3} s={12}>
                <UserProfile/>
            </Col>
            <Col m={8} s={12}>
             <h5>Projetos</h5>
             <b><p>Abaixo alguns projetos pessoais desenvolvidos com intuito de estudos: </p></b>
            <Card>
                <h5>Projeto Transações Bancarias</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/ProjetoTransacoesBancarias" target="_blank" rel="noreferrer"><img src={projeto1} alt="projeto1"className="cicle responsive-img" width="850" height="850" /></a>
                
                <b><p>Descrição:</p></b>
                <p>Essa aplicação console é um sistema que simula as transações bancarias, onde podemos realizar a consulta do saldo, deposito, transferências bancarias e inserir novas contas. Este sistema foi desenvolvido a nível didático dos paradigmas de orientação a objetos. Os dados salvos são armazenados apenas em tempo de execução em um List.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>C#</li>
                    <li>Orientação a objetos (Herança, Encapsulamento, Polimorfismo e Abstração)</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio</li>
                    <li>Faça um rebuild e coloque para executar.</li>
                </ol>
                
                </Row>
                </Card>
                <Card>
                <h5>Projeto Cadastro de Series</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/CadastroSeries" target="_blank" rel="noreferrer"><img src={projeto2} alt="projeto2"className="cicle responsive-img" width="850" height="850" /></a>
                
                <b><p>Descrição:</p></b>
                <p>Essa aplicação console é um sistema que faz o cadastro, exclusão, atualização e listagem de todas séries de tv. Este sistema foi desenvolvido a nível didático dos paradigmas de orientação a objetos. Os dados salvos são armazenados apenas em tempo de execução em um List. Foi implementado o design pattern Repository onde utilizamos uma interface repositorio entre onde separamos a camada de acesso aos dados e a camada de lógica da aplicação.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>C#</li>
                    <li>Orientação a objetos (Herança, Encapsulamento, Polimorfismo e Abstração)</li>
                    <li>Design Pattern Repository</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio</li>
                    <li>Faça um rebuild e coloque para executar.</li>
                </ol>
                </Row>
                </Card>
                <Card>
                <h5>Crud WebApi - Cadastro de Pessoas</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/CRUD-WebApi" target="_blank" rel="noreferrer"><img src={projeto3}  alt="projeto3" className="cicle responsive-img" width="850" height="850"/></a>
                <b><p>Descrição:</p></b>
                <p>Este sistema web é basicamente um cadastro simples de pessoas ao qual realiza todas as operações CRUD onde os dado são criados, atualizados, lidos e excluídos de uma base dados local Sqlite. Este sistema foi desenvolvido a nível didático a fim de aprimoramento de habilidades.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>C#</li>
                    <li>Asp.Net Core MVC 2</li>
                    <li>Razor Pages</li>
                    <li>Sqlite</li>
                </ul>
                <br/>
                <b><p>Pacotes utilizados</p></b>
                <ul>
                    <li>Microsoft.EntityFrameworkCore(5.0.1)</li>
                    <li>Microsoft.EntityFrameworkCore.Design(5.0.1)</li>
                    <li>Microsoft.EntityFrameworkCore.Sqlite(5.0.1)</li>
                    <li>Microsoft.EntityFrameworkCore.Tools(5.0.1)</li>
                    <li>Microsoft.VisualStudio.Web.CodeGeneration(5.0.1)</li>
                    <li>Microsoft.VisualStudio.Web.CodeGeneration.Design(5.0.1)</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio</li>
                    <li>Faça um rebuild e coloque para executar.</li>
                </ol>
                </Row>
                </Card>
                <Card>
                <h5>Consumo de API com ReactJS</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/reactjs-http" target="_blank" rel="noreferrer"><img src={projeto4}  alt="projeto3" className="cicle responsive-img" width="850" height="850"/></a>
                <b><p>Descrição:</p></b>
                <p>Exercicio prático de consumo de uma webapi utilizando reactJS (FetchAPI) - Api utilizada do site https://reqres.in/. Foi desenvolvido a nível didático a fim de aprimoramento de habilidades.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio Code</li>
                    <li>Abra a pasta do projeto no terminal e digite: npm install para baixar os pacotes necessários do projeto</li>
                    <li>Após finalizado o download dos pacotes, digite: npm start e o projeto ira iniciar no localhost:3000</li>
                </ol>
                </Row>
                </Card>
                <Card>
                <h5>Tela de Login Netflix</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/loginNetflix" target="_blank" rel="noreferrer"><img src={projeto5}  alt="projeto3" className="cicle responsive-img" width="850" height="850"/></a>
                <b><p>Descrição:</p></b>
                <p>Exercicio prático de criação de tela de login utlizando Html e CSS baseada na interface a Netflix. Foi desenvolvido a nível didático a fim de aprimoramento de habilidades.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Descompacte o arquivo zip e execute no navegador o arquivo Index.html</li>
                </ol>
                </Row>
                </Card>
                <Card>
                <h5>Crud WebApi - Cadastro de Reservas</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/Mvc_Reservas" target="_blank" rel="noreferrer"><img src={projeto6}  alt="projeto6" className="cicle responsive-img" width="850" height="850"/></a>
                <b><p>Descrição:</p></b>
                <p>Este sistema web é basicamente um cadastro simples de reservas de hotel onde aplicação MVC consome a WebAPI para realizar CRUD onde os dados são criados, atualizados, lidos e excluídos, os dados são usados apenas em memória de execução. Este sistema foi desenvolvido a nível didático a fim de aprimoramento de habilidades.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>C#</li>
                    <li>Asp.Net Core MVC 2</li>
                    <li>Asp.Net WebAPI</li>
                    <li>Razor Pages</li>
                </ul>
                <br/>
                <b><p>Pacotes utilizados</p></b>
                <ul>
                    <li>Microsoft.EntityFrameworkCore.SqlServer(3.0.0)</li>
                    <li>Microsoft.EntityFrameworkCore.Tools(3.0.0)</li>
                    <li>Microsoft.AspNetCore.JsonPatch(3.0.0)</li>
                    <li>Microsoft.Extensions.Logging.Debug(3.0.0)</li>
                    <li>Microsoft.VisualStudio.Web.CodeGeneration.Design(3.0.0)</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio</li>
                    <li>Faça um rebuild e coloque para executar.</li>
                </ol>
                </Row>
                </Card>
                <Card>
                <h5>Crud WebApi - Cadastro de Pessoas com Firestore</h5>
                <Row className ="center-align">
                    <a href="https://github.com/lucassilva996/Crud-FireStore" target="_blank" rel="noreferrer"><img src={projeto7}  alt="projeto7" className="cicle responsive-img" width="850" height="850"/></a>
                <b><p>Descrição:</p></b>
                <p>Este sistema web é basicamente um cadastro simples de pessoas onde aplicação realiza CRUD onde os dados são criados, atualizados, lidos e excluídos, os dados são armazenados no Google Cloud através do Firestore. Este sistema foi desenvolvido a nível didático a fim de aprimoramento de habilidades.</p>
                <br/>
                <b><p>Tecnologias Utilizadas</p></b>
                <ul>
                    <li>C#</li>
                    <li>Asp.Net Core MVC 2</li>
                    <li>Razor Pages</li>
                    <li>Google Firestore</li>
                </ul>
                <br/>
                <b><p>Pacotes utilizados</p></b>
                <ul>
                    <li>Google.Cloud.Firestore(2.4.0)</li>
                    <li>Microsoft.VisualStudio.Web.CodeGeneration.Design(3.1.5)</li>
                </ul>
                <br/>
                <b><p>Como executar</p></b>
                <ol>
                    <li>Faça o download ou clone este repositório;</li>
                    <li>Abra-o no Visual Studio</li>
                    <li>Faça um rebuild e coloque para executar.</li>
                </ol>
                </Row>
                </Card>
            </Col>
        </Row>

);



export default Projects;
