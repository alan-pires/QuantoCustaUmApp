import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import umaLingua from '../images/umaLingua.png'
import bilingue from '../images/bilingue.png'
import multilingue from '../images/multilingue.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function Idiomas() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            idiomas: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }
    return (
        <div className="tela">
            <h2>Quantas línguas você deseja que seu aplicativo tenha?</h2>
            <div className="opcoes">
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("Uma língua", valores.umaLingua)}>
                    <Opcao imagem={umaLingua} />
                    <p>Uma única língua</p>
                </Link>
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("bilingue", valores.bilingue)}>
                    <Opcao imagem={bilingue} />
                    <p>Bilíngue</p>
                </Link>
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("multilingue", valores.multilingue)}>
                    <Opcao imagem={multilingue} />
                    <p>Multilíngue</p>
                </Link>
                

            </div>
        </div>
    )
}

export default Idiomas