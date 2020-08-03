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

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            estagioProjeto: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <h2>Em que estágio se encontra o seu projeto?</h2>
            <div className="opcoes" >
                <Link to='/resultado' onClick={() => escolherOpcao("É apenas um projeto", valores.apenasProjeto)}>
                    <Opcao imagem={apenasProjeto} />
                    <p>É apenas um projeto</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("Esboço já preparado", valores.esbocoPreparado)}>
                    <Opcao imagem={esbocoPreparado} />
                    <p>Esboço já preparado</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("Aplicativo em desenvolvimento", valores.appEmDesenvolvimento)}>
                    <Opcao imagem={emDesenvolvimento} />
                    <p>Aplicativo em desenvolvimento</p>
                </Link>
                <Link to='/resultado'  onClick={() => escolherOpcao("App já está pronto", valores.appPronto)}>
                    <Opcao imagem={jaPronto} />
                    <p>App já está pronto</p>
                </Link>

            </div>
        </div>
    )
}

export default EstagioProjeto