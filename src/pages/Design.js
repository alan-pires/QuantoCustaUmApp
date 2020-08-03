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
    
    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb


    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            design: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }


    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Simples", valores.interfaceSimples)} >
                    <Opcao imagem={InterfaceSimples} />
                      <p>Interface Simples</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Personalizada", valores.interfacePersonalizada)}>
                    <Opcao imagem={InterfacePersonalizada} />
                    <p>Interface Personalizada</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Interface Web", valores.interfaceWeb)}>
                    <Opcao imagem={InterfaceWeb} />
                    <p>Interface Web</p>
                </Link>
                <Link to='/retornoFinanceiro'  onClick={() => escolherOpcao("Sem design", valores.semDesign)}>
                    <Opcao imagem={semDesign} />
                    <p>Sem design</p>
                </Link>
                

            </div>
        </div>
    )
}

export default Design
