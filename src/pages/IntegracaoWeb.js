import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import intWebSim from '../images/intWebSim.png'
import intWebNao from '../images/intWebNao.png'
import naoSei from '../images/naoSei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function IntegracaoWeb() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           integracaoWeb: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Sim")}>
                    <Opcao imagem={intWebSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Não")}>
                    <Opcao imagem={intWebNao} />
                    <p>Não</p>
                </Link>
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Ainda não sei")}>
                    <Opcao imagem={naoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default IntegracaoWeb
