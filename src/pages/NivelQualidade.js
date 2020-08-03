import React, { useContext } from 'react'
import Opcao from '../components/Opcao'
import Opcao1 from '../images/imagemOpcao11.png'
import Opcao2 from '../images/imagemOpcao21.png'
import Opcao3 from '../images/imagemOpcao31.png'
import '../global.css'
import { Link } from 'react-router-dom'
import { ChoicesContext } from '../context'


function NivelQualidade() {
    const { choicesOb, valoresOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valores, setValores] = valoresOb
    const [valorTotal, setValorTotal] = valorTotalOb


    function escolherOpcao(selec, valor) {
        setChoices({
            ...choices,
            nivelQualidade: selec
        })
        setValorTotal(valorTotal + valor)

    }

    return (
        <div className="tela">
            <h2>Que nível de qualidade você está procurando?</h2>
            <div className="opcoes" >
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Ótima Qualidade", valores.otimaQualidade)}>
                    <Opcao imagem={Opcao1} />
                    <p>Ótima qualidade</p>
                </Link>
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Bom custo benefício", valores.bomCustoBen)}>
                    <Opcao imagem={Opcao2} />
                    <p>Bom custo benefício</p>
                </Link>
                <Link to='/tipoDeApp' onClick={() => escolherOpcao("Qualidade mínima", valores.qualidadeMinima)}>
                    <Opcao imagem={Opcao3} />
                    <p>Qualidade mínima</p>
                </Link>


            </div>
        </div>
    )
}

export default NivelQualidade
