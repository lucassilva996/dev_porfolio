//importantando o react
import React from 'react';
//importando o ReactDOM para injetar o <APP/> na tag <div id="root"></div> do index.html
import ReactDOM from 'react-dom';
//importando o componente APP
import App from './App';
//importando a lib de rotas
import { BrowserRouter } from 'react-router-dom'
//importando o css
import './index.css';
import Main from './main';
import Header from './components/header/header';

//renderizando o componente APP(com seus sub componentes e etc) em <div id ="root"></div> do index.html
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
