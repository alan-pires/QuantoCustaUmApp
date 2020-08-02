import React from 'react';
import Opcao from '../components/Opcao'
import App from '../images/app1.jpg'
import '../global.css'
import {Link} from 'react-router-dom'


export default function Inicio() {
    return (
        <div className="tela">
            <Opcao imagem={App} />
            <h2>Quanto custa criar um aplicativo?</h2>
            <p>Calcule rapidamente o custo para poder criar seu APP respondendo a estas simples perguntas.</p>
            <Link to="/nivelQualidade">
            <div className="comecar"><p>COMEÇAR</p></div>
            </Link>
        </div>
    )
}