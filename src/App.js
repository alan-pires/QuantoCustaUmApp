import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Inicio from './pages/Inicio'
import NivelQualidade from './pages/NivelQualidade'
import TipoDeApp from './pages/TipoDeApp'
import Design from './pages/Design'
import RetornoFinanceiro from './pages/RetornoFinanceiro'
import SistemaLogin from './pages/SistemaLogin'
import IntegracaoWeb from './pages/IntegracaoWeb'
import PerfilComUsuario from './pages/PerfilComUsuario'
import PainelAdm from './pages/PainelAdm'
import Idiomas from './pages/Idiomas'
import EstagioProjeto from './pages/EstagioProjeto'
import Resultado from './pages/Resultado'


function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/nivelQualidade" component={NivelQualidade} />
        <Route exact path="/tipoDeApp" component={TipoDeApp} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/retornoFinanceiro" component={RetornoFinanceiro} />
        <Route exact path="/sistemaLogin" component={SistemaLogin} />
        <Route exact path="/integracaoWeb" component={IntegracaoWeb} />
        <Route exact path="/perfilComUsuario" component={PerfilComUsuario} />
        <Route exact path="/painelAdm" component={PainelAdm} />
        <Route exact path="/idiomas" component={Idiomas} />
        <Route exact path="/estagioProjeto" component={EstagioProjeto} />
        <Route exact path="/resultado" component={Resultado} />

      </Switch>
    </>
  );
}

export default App;
