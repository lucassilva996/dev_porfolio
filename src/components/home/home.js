//importando o React
import React from "react";
//importando os components necessários da lib react-materialize
import {Row, Col, Card} from 'react-materialize';
//importando o UserProfile
import UserProfile from '../user_profile/user_profile'
//importando as experiencias
import Experience from '../experience/Experiences'
//importando o avatar da empresa 1
import company_avatar1 from '../../images/company1.png';
//importando o avatar da empresa 2
import company_avatar2 from '../../images/company2.png';
//importando o avatar da empresa 3
import company_avatar3 from '../../images/company3.png';
//importando o avatar da empresa 4
import company_avatar4 from '../../images/company4.png';
//importando o avatar da empresa 5
import company_avatar5 from '../../images/company5.png';
//importando o avatar da empresa 6
import company_avatar6 from '../../images/company6.png';
//importando o avatar da empresa 7
import company_avatar7 from '../../images/company7.png';
//importando o avatar da empresa 8
import company_avatar8 from '../../images/company8.png';


const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile/>
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle"> Sobre Mim</h5>
            <Card>
                <div>
                    <p><b>Perfil</b></p>
                    <p>"Sou dedicado, prestativo, colaborativo e gosto de trabalhar em equipe. Atualmente trabalho como desenvolvedor jr, porém atuei durante alguns anos na área de suporte tecnico. Sou um profissional que busca estar sempre antenado e atualizado, procuro sempre ler artigos sobre novidades e implementações de novas tecnologias mesmo não sendo as que utilizo em meu trabalho. Procuro sempre me aprimorar no que trabalho, diariamente procuro me dedicar pelo menos 30 minutos para estudar as tecnologias que uso em meu trabalho e assim minimizar gaps de conhecimento que tenho"</p>
                    <br/>
                    <p><b>Escolaridade</b></p>
                    <p>Curso Superior - Analise e Desenvolvimento de Sistemas - Universidade Cruzeiro do Sul - Ago/2015 - Jun/2019</p>
                    <br/>
                    <p>Curso Técnico - Técnico em Informática com Enfâse em Desenvolvimento de Sistemas - Etec de Itaquera - Jun/2013 - Dez/2014</p>
                    <br/>
                    <p><b>Conhecimentos</b></p>
                    <p>Back-End: C#, Asp.NET MVC, .Net Core</p>
                    <p>Front-End: Html, CSS, JS, ReactJS</p>
                    <p>Banco de Dados - SQL</p>
                    <p>Arquitetura de Software - MVC, WebApi</p>
                    <br/>
                    <p><b>Cursos</b></p>
                    <p>Arquitetura de Sistemas Avançado - Digital Innovation One - Jan 2020</p>
                    <p>Bootcamp: De férias com .Net 2020 - Digital Innovation One - Jan 2020</p>
                    <p>Fundamentos de Arquitetura de Sistemas - Digital Innovation One - Jan 2020</p>
                    <p>Git e Controle de Versões - Digital Innovation One - Jan 2020</p>
                    <p>GitHub e Comandos Essenciais para Trabalhar em Equipe - Digital Innovation One - Jan 2020</p>
                    <p>Projetos Ageis com SCRUM - Digital Innovation One - Jan 2020</p>
                    <p>1939 - Uma visão completa do ASP.NET MVC - Balta.io - Nov 2019</p>
                    <p>ASP NET MVC com SQL - Udemy - Nov 2019</p>
                    <p>1962 - Introdução ao C# e Imersão ao .NET Framework - Balta.io - Out 2019</p>
                    <p>7181 - Começando com Angular - Balta.io - Out 2019</p>
                    <p>DevOps Foundation - Estabilis University - Set 2019</p>
                    <p>Interfces Gráficas com C#7 e WinForms 2019 - Udemy - Ago 2019</p>
                </div>
            </Card>
            <h5 className="subtitle">Experiencias</h5>
            {/*Passando os parâmetros title, company, description e avatar para o component Experience*/}
            <Experience title="Desenvolvedor Jr - Out/2020 a Atual"
                       company="Tata Consultancy Services"
                       description = "Atuo no Projeto do Itaú Consórcios realizando as seguintes atividades: Desenvolvimento de Web-Api's utilizando Asp.Net Core; Desenvolvimento de projetos de testes unitários utilizando MSUnit; Criação de Testes de Performance com JMeter; Criação de Collections de Testes de Integração utilizando o Postman; Desenvolvimento de Class Libraries para suprimir algumas necessidades dos projetos; Criação e configuração de esteira CI/CD para Build e Deploy das aplicações; Versionamento de Código com GitLab; Visualização de logs para massa de dados via Splunk"
                       avatar = {company_avatar1}
            />
            <Experience title="Desenvolvedor Jr - Ago/2020 à Out/2020"
                       company="Iamit"
                       description = "Auxilio no desenvolvimento de sistemas e aplicações web; Manutenção, correção e melhorias nos sistemas; Implantações de sistemas; Stack utilizada - ASP.NET Core MVC, ASP.NET Core WebApi, Authorization (Bearer), WebServices (WSDL e Rest), SQL Server e T-SQL. Blazor Server e WebAssembly"
                       avatar = {company_avatar2}
            />
            <Experience title="Analista de Infraestrutura - Out/2019 à Out/2020"
                       company="RSComputer"
                       description = "Administração de servidores Linux e Windows; Suporte aos usuários dando auxilio à ferramentas pertinentes ao setor; Manutenção Periódica e Preventiva de máquinas; Administração de Active Directory; Gestão de TI – Inventário, Suporte ao Sistema Interno de Gerenciamento de Documentos"
                       avatar = {company_avatar3}
            />
            <Experience title="Analista de Suporte Jr - Ago/2018 à Set/2019"
                       company="MicroPower"
                       description = "Suporte Operacional; Disponibilização e testes em QA de Treinamentos e-learnings scormizados. Criação e estruturação de treinamentos (Presenciais, Vídeos e Avaliações) distribuídos em catálogos por categorias ou trilhas de aprendizado; Consulta na base de dados para extração de relatórios básicos no SQL Server; Suporte e operação aos utilizadores do sistema Performa (telefone/e-mail);"
                       avatar = {company_avatar4}
            />
            <Experience title="Analista de Suporte - Abr/2017 à Ago/2018"
                       company="Duk Informática"
                       description = "Fui estagiário de Abril de 2017 à Dezembro de 2017 onde realizava as seguintes atividades: Administração de servidores Linux e Windows; Suporte a Empresas de Contabilidade dando auxilio à ferramentas do governo e pertinentes ao setor; Manutenção Periódica e Preventiva de máquinas; Em Janeiro de 2018 fui efetivado e passei a realizar também as seguintes atividades: Administração de Active Directory; Gestão de TI – Inventário; Relatórios de Utilização; Controles de Acesso; Controle de Pacotes Implantação de Servidores e Softwares; Gerenciamento de Backups em Nuvem à nível de bloco(CloudBerry); ShadowCopy; Backups em Fitas Dat e Lto."
                       avatar = {company_avatar5}
            />
            <Experience title="Estagio - Set/2016 à Abr/2017"
                       company="Tivit / NeoBpo"
                       description = "Prestar suporte presencial aos colaboradores da Empresa atuando na manutenção de computadores, sistemas e atuação básica na instalação de bases Avaya e Ip­Phone; Fazer direcionamento de chamados quando não está no nosso âmbito de atuação; Contato constante com as áreas relacionadas de atuação: Telecom e Redes; Atuação em chamados críticos de grande impacto junto com as equipes de apoio relacionadas"
                       avatar = {company_avatar6}
            />
            <Experience title="Estagio - Nov/2015 à Fev/2016"
                       company="Drogaria Sinete"
                       description = "Rotinas de Backup; Lançamento de notas no sistema; Instalação de Softwares; Manutenção de Hardware; Configuração de Redes; Suporte ao usuário."
                       avatar = {company_avatar7}
            />
            <Experience title="Estagio - Fev/2015 à Mai/2015"
                       company="Sitel do Brasil"
                       description = "Prestar suporte técnico para computadores e notebooks DELL através de ferramentas e treinamento disponibilizados pela empresa; Atendimento via telefone e acesso remoto."
                       avatar = {company_avatar8}
            />

        </Col>
    </Row>
);

export default Home;