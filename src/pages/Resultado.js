import React, {useContext} from 'react'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'


function Resultado() {
    const { choicesOb, valorTotalOb } = useContext(ChoicesContext);

    const [choices, setChoices] = choicesOb
    const [valorTotal, setValorTotal] = valorTotalOb


    return (
        <div className="tela">
           <p>Muito bem... Já terminamos!</p>
           <h3>O custo estimado do seu App é de R$ { valorTotal },00</h3>
           <div className="comecar">
               <h2>Crie seu projeto!</h2>
           </div>
        </div>
    )
}

export default Resultado
