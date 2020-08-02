import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import apenasProjeto from '../images/apenasProjeto.png'
import esbocoPreparado from '../images/esbocoPreparado.png'
import emDesenvolvimento from '../images/emDesenvolvimento.png'
import jaPronto from '../images/jaPronto.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function EstagioProjeto() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           estagioProjeto: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/resultado'  onClick={() => escolherOpcao("É apenas um projeto")}>
                    <Opcao imagem={apenasProjeto} />
                    <p>É apenas um projeto</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("Esboço já preparado")}>
                    <Opcao imagem={esbocoPreparado} />
                    <p>Esboço já preparado</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("Aplicativo em desenvolvimento")}>
                    <Opcao imagem={emDesenvolvimento} />
                    <p>Aplicativo em desenvolvimento</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("App já está pronto")}>
                    <Opcao imagem={jaPronto} />
                    <p>App já está pronto</p>
                </Link>

            </div>
        </div>
    )
}

export default EstagioProjeto