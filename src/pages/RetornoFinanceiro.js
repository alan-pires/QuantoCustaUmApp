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

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           tipoRetornoFinanc: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("App Gratis Com Publicidade")} >
                    <Opcao imagem={appGratisComPublicidade} />
                      <p>App Gratis Com Publicidade</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Aplicativo Pago")}>
                    <Opcao imagem={appPago} />
                    <p>Aplicativo Pago</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Compras no App")}>
                    <Opcao imagem={comprasNoApp} />
                    <p>Compras no App</p>
                </Link>
                <Link to='/sistemaLogin'  onClick={() => escolherOpcao("Outros / não sei")}>
                    <Opcao imagem={outros} />
                    <p>Outros / não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default RetornoFinanceiro
