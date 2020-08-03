import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import loginComRedesSociaisEmail from '../images/loginComRedesSociaisEmail.png'
import loginComEmail from '../images/loginComEmail.png'
import semLogin from '../images/semLogin.png'
import naoSei from '../images/naoSei.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function SistemaLogin() {

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            sistemaLogin: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <h2>O seu apicativo precisa de um sistema de login?</h2>
            <div className="opcoes">
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Login Com Redes Sociais e Email", valores.comRedesSociaisEmail)} >
                    <Opcao imagem={loginComRedesSociaisEmail} />
                      <p>Login Com Redes Sociais e Email</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Login com Email", valores.apenasEmail)}>
                    <Opcao imagem={loginComEmail} />
                    <p>Login com Email</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Sem Login", valores.semLogin)}>
                    <Opcao imagem={semLogin} />
                    <p>Sem Login</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Ainda não sei", valores.intWebSim)}>
                    <Opcao imagem={naoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default SistemaLogin
