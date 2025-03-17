import React, { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import './global.css';
import Time from './componentes/Time';

function App() {

  const times = [
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
    (
      nome: '',
      corPrimaria: '',
      corSecundaria: ''
    )
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={aoNovoColaboradorAdicionado} /> 
      <Time nome="Programação"/>
      <Time nome="Front-end"/>
      <Time nome="Data Science"/>
      <header className="App-header">
        <p>Bem-vindo ao React!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;