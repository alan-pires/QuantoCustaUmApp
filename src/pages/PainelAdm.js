import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import painelAdmSim from '../images/painelAdmSim.png'
import painelAdmNao from '../images/painelAdmNao.png'
import painelAdmNaoSei from '../images/painelAdmNaosei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function PainelAdm() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            painelAdm: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/idiomas'  onClick={() => escolherOpcao("Sim", valores.painelAdmSim)}>
                    <Opcao imagem={painelAdmSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/idiomas'  onClick={() => escolherOpcao("Não", valores.painelAdmNao)}>
                    <Opcao imagem={painelAdmNao} />
                    <p>Não</p>
                </Link>
                <Link to='/idiomas'  onClick={() => escolherOpcao("Ainda não sei", valores.outrosNaoSei)}>
                    <Opcao imagem={painelAdmNaoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default PainelAdm