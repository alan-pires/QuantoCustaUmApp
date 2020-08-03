import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import perfilUsuarioSim from '../images/perfilUsuarioSim.png'
import perfilUsuarioNao from '../images/perfilUsuarioNao.png'
import perfilUsuarioNaoSei from '../images/perfilUsuarioNaoSei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function PerfilComUsuario() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            perfilUsuario: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Sim", valores.perfilUsuarioSim)}>
                    <Opcao imagem={perfilUsuarioSim} />
                    <p>Sim</p>
                </Link>
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Não", valores.perfilUsuarioNao)}>
                    <Opcao imagem={perfilUsuarioNao} />
                    <p>Não</p>
                </Link>
                <Link to='/painelAdm'  onClick={() => escolherOpcao("Ainda não sei", valores.outrosNaoSei)}>
                    <Opcao imagem={perfilUsuarioNaoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default PerfilComUsuario