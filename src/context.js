import React, {useState} from 'react'

export const ChoicesContext = React.createContext();

export const ChoicesProvider = props => {
    const [choices, setChoices] = useState({
        tipoApp: "",
        nivelQualidade: "",
        design: "",
        tipoRetornoFinanc: "",
        sistemaLogin: "",
        integracaoWeb: "",
        perfilUsuario: "",
        painelAdm: "",
        idiomas: "",
        estagioProjeto: "",
        valor: 0
    })

    const [valores, setValores] = useState({
        otimaQualidade: 500,
        bomCustoBen: 350,
        qualidadeMinima: 200,
        aplicativoAndroid: 300,
        aplicativoIphone: 500,
        aplicativoAndroidIphone: 700,
        
    })


    return (
        <ChoicesContext.Provider value={[choices, setChoices]}>
            {props.children}
        </ChoicesContext.Provider>  
    )
}

