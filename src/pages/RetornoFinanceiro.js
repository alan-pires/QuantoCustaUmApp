import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import appGratisComPublicidade from '../images/appGratisComPublicidade.png'
import appPago from '../images/appPago.png'
import comprasNoApp from '../images/comprasNoApp.png'
import outros from '../images/outros.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function RetornoFinanceiro() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb


    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            tipoRetornoFinanc: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }
    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("App Gratis Com Publicidade", valores.appGratisComPublic)} >
                    <Opcao imagem={appGratisComPublicidade} />
                      <p>App Gratis Com Publicidade</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Aplicativo Pago", valores.aplicativoPago)}>
                    <Opcao imagem={appPago} />
                    <p>Aplicativo Pago</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Compras no App", valores.comprasDentroDoApp)}>
                    <Opcao imagem={comprasNoApp} />
                    <p>Compras no App</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Outros / não sei", valores.outrosNaoSei)}>
                    <Opcao imagem={outros} />
                    <p>Outros / não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default RetornoFinanceiro
