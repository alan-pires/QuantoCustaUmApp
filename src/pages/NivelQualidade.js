import React, {useContext} from 'react'
import Opcao from '../components/Opcao'
import Opcao1 from '../images/imagemOpcao11.png'
import Opcao2 from '../images/imagemOpcao21.png'
import Opcao3 from '../images/imagemOpcao31.png'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'


function NivelQualidade() {
    const [choices, setChoices] = useContext(ChoicesContext)

    function escolherOpcao(selec){       
        setChoices({
           ...choices,
            nivelQualidade: selec
            })            
    }

    return (
        <div className="tela">
            <div className="opcoes" >
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Ótima Qualidade")}>
                    <Opcao imagem={Opcao1}  />
                    <p>Ótima qualidade</p>
                </Link>
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Bom custo benefício")}>
                    <Opcao imagem={Opcao2} />
                    <p>Bom custo benefício</p>
                </Link>
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Qualidade mínima")}>
                    <Opcao imagem={Opcao3} />
                    <p>Qualidade mínima</p>
                </Link>
                

            </div>
        </div>
    )
}

export default NivelQualidade
