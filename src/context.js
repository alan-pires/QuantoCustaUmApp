import React, {useState} from 'react'

export const ChoicesContext = React.createContext();

export const ChoicesProvider = props => {
    const [choices, setChoices] = useState({
        nivelQualidade: "",
        tipoApp: "",
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
        interfaceSimples: 200,
        interfacePersonalizada: 400,
        interfaceWeb: 320,
        semDesign: 0,
        appGratisComPublic: 350,
        aplicativoPago: 400,
        comprasDentroDoApp: 600,
        outrosNaoSei:0,
        comRedesSociaisEmail: 200,
        apenasEmail: 100,
        semLogin: 0,
        intWebSim: 450,
        intWebNao: 0,
        perfilUsuarioSim: 350,
        perfilUsuarioNao: 0,
        painelAdmSim: 700,
        painelAdmNao: 0,
        umaLingua: 0,
        bilingue: 400,
        multilingue: 800,
        apenasProjeto: 800,
        esbocoPreparado: 500,
        appEmDesenvolvimento: 350,
        appPronto: 200        
    })

    const [valorTotal, setValorTotal] = useState(0)


    return (
        <ChoicesContext.Provider value={{
           choicesOb: [choices, setChoices],
           valoresOb: [valores, setValores],
           valorTotalOb: [valorTotal, setValorTotal]
         } }>
            {props.children}
        </ChoicesContext.Provider>  
    )
}

