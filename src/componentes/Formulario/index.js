import React, { useState } from 'react';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import Botao from '../Botao';

const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
];

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido', nome, cargo, imagem);
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2 className="titulo-formulario">Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time"
                    itens={times} 
                />
                <Botao>
                    Criar Card
                    <img
                        src="./imagens/Add.png" 
                        alt="Ícone de adicionar" 
                    />
                </Botao>
            </form>
        </section>
    );
};

export default Formulario;