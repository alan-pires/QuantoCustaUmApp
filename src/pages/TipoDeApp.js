import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import AppAndroid from '../images/appAndroid.png'
import AppIphone from '../images/appIphone.png'
import AppAndroidIphone from '../images/appAndroidIphone.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'

function TipoDeApp() {  

    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb

    
    function escolherOpcao(selec, valor){       
        setChoices({
           ...choices,
            tipoApp: selec
            })  
        setValorTotal(valorTotal+valor)     
              
    }

    return (
        <div className="tela">
            <h2>Qual tipo de aplicativo você precisa?</h2>
            <div className="opcoes">
                <Link to='/design'  onClick={() => escolherOpcao("Aplicativo Android", valores.aplicativoAndroid)} >
                    <Opcao imagem={AppAndroid} />
                      <p>Aplicativo Android</p>
                </Link>
                <Link to='/design'  onClick={() => escolherOpcao("Aplicativo Iphone", valores.aplicativoIphone)}>
                    <Opcao imagem={AppIphone} />
                    <p>Aplicativo Iphone</p>
                </Link>
                <Link to='/design'  onClick={() => escolherOpcao("App Android e Iphone", valores.aplicativoAndroidIphone)}>
                    <Opcao imagem={AppAndroidIphone} />
                    <p>App Android e Iphone</p>
                </Link>
                

            </div>
        </div>
    )
}

export default TipoDeApp
