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

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           sistemaLogin: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Login Com Redes Sociais e Email")} >
                    <Opcao imagem={loginComRedesSociaisEmail} />
                      <p>Login Com Redes Sociais e Email</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Login com Email")}>
                    <Opcao imagem={loginComEmail} />
                    <p>Login com Email</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Sem Login")}>
                    <Opcao imagem={semLogin} />
                    <p>Sem Login</p>
                </Link>
                <Link to='/integracaoWeb'  onClick={() => escolherOpcao("Ainda não sei")}>
                    <Opcao imagem={naoSei} />
                    <p>Ainda não sei</p>
                </Link>
                

            </div>
        </div>
    )
}

export default SistemaLogin
