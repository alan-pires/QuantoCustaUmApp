import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import perfilUsuarioSim from '../images/perfilUsuarioSim.png'
import perfilUsuarioNao from '../images/perfilUsuarioNao.png'
import perfilUsuarioNaoSei from '../images/perfilUsuarioNaoSei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function PerfilComUsuario() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           perfilUsuario: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Sim")}>
                    <Opcao imagem={perfilUsuarioSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Não")}>
                    <Opcao imagem={perfilUsuarioNao} />
                    <p>Não</p>
                </Link>
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Ainda não sei")}>
                    <Opcao imagem={perfilUsuarioNaoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default PerfilComUsuario