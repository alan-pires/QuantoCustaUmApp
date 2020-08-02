import React from 'react'
import '../global.css'

function Opcao({imagem}) {
    return (
        <div className="opcao">
            <img src={imagem} />
        </div>
    )
}

export default Opcao
