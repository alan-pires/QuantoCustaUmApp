import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import intWebSim from '../images/intWebSim.png'
import intWebNao from '../images/intWebNao.png'
import naoSei from '../images/naoSei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function IntegracaoWeb() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            integracaoWeb: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <h2>Seu aplicativo deve ser integrado à um website?</h2>
            <div className="opcoes">
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Sim", valores.intWebSim)}>
                    <Opcao imagem={intWebSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Não", valores.intWebNao)}>
                    <Opcao imagem={intWebNao} />
                    <p>Não</p>
                </Link>
                <Link to='/perfilComUsuario'  onClick={() => escolherOpcao("Ainda não sei", valores.outrosNaoSei)}>
                    <Opcao imagem={naoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default IntegracaoWeb
