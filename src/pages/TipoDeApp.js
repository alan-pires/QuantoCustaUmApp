import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import AppAndroid from '../images/appAndroid.png'
import AppIphone from '../images/appIphone.png'
import AppAndroidIphone from '../images/appAndroidIphone.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function TipoDeApp() {

    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
           tipoApp: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes">
                <Link to='/design'  onClick={() => escolherOpcao("Aplicativo Android")} >
                    <Opcao imagem={AppAndroid} />
                      <p>Aplicativo Android</p>
                </Link>
                <Link to='/design'  onClick={() => escolherOpcao("Aplicativo Iphone")}>
                    <Opcao imagem={AppIphone} />
                    <p>Aplicativo Iphone</p>
                </Link>
                <Link to='/design'  onClick={() => escolherOpcao("App Android e Iphone")}>
                    <Opcao imagem={AppAndroidIphone} />
                    <p>App Android e Iphone</p>
                </Link>
                

            </div>
        </div>
    )
}

export default TipoDeApp
