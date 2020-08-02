import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import umaLingua from '../images/umaLingua.png'
import bilingue from '../images/bilingue.png'
import multilingue from '../images/multilingue.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function Idiomas() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           idiomas: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("Uma língua")}>
                    <Opcao imagem={umaLingua} />
                    <p>Uma única língua</p>
                </Link>
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("bilingue")}>
                    <Opcao imagem={bilingue} />
                    <p>Bilíngue</p>
                </Link>
                <Link to='/estagioProjeto'  onClick={() => escolherOpcao("multilingue")}>
                    <Opcao imagem={multilingue} />
                    <p>Multilíngue</p>
                </Link>
                

            </div>
        </div>
    )
}

export default Idiomas