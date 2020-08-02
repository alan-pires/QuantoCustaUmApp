import React, {useContext} from 'react'
import '../global.css'
import { Link } from 'react-router-dom'
import {ChoicesContext} from '../context'


function Resultado() {
    const [choices, setChoices] = useContext(ChoicesContext)
    console.log(choices)
   
    return (
        <div className="tela">
           <p>{ choices.nivelQualidade }</p>
        </div>
    )
}

export default Resultado
