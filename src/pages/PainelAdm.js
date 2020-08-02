import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import painelAdmSim from '../images/painelAdmSim.png'
import painelAdmNao from '../images/painelAdmNao.png'
import painelAdmNaoSei from '../images/painelAdmNaosei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function PainelAdm() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           painelAdm: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/idiomas'  onClick={() => escolherOpcao("Sim")}>
                    <Opcao imagem={painelAdmSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/idiomas'  onClick={() => escolherOpcao("Não")}>
                    <Opcao imagem={painelAdmNao} />
                    <p>Não</p>
                </Link>
                <Link to='/idiomas'  onClick={() => escolherOpcao("Ainda não sei")}>
                    <Opcao imagem={painelAdmNaoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default PainelAdm