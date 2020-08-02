import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import InterfaceSimples from '../images/interfaceSimples.png'
import InterfacePersonalizada from '../images/interfacePersonalizada.png'
import InterfaceWeb from '../images/interfaceWeb.png'
import semDesign from '../images/semDesign.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function Design() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           design: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Simples")} >
                    <Opcao imagem={InterfaceSimples} />
                      <p>Interface Simples</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Personalizada")}>
                    <Opcao imagem={InterfacePersonalizada} />
                    <p>Interface Personalizada</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Web")}>
                    <Opcao imagem={InterfaceWeb} />
                    <p>Interface Web</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Sem design")}>
                    <Opcao imagem={semDesign} />
                    <p>Sem design</p>
                </Link>
                

            </div>
        </div>
    )
}

export default Design
