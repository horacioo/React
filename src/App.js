
import Login from './Componentes/Login/Login';
import ListaBlocos from './Componentes/SAE/Listablocos/ListaBlocos'
import Menu from './Componentes/ComponentesGenericos/Menu/menu'
import Home from './Componentes/ComponentesGenericos/home/home'
import Paciente from './Componentes/SAE/Paciente/Paciente'
import Configuracoes from './Componentes/SAE/Configuracoes/Configuracoes';


import { useState } from 'react'
import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import FormularioPrincipal from './Componentes/SAE/Form/FormularioPrincipal';

function App() {

  const auth = window.sessionStorage.getItem('auth');

  return (
    <div className="App" >


      { (typeof(auth)==="object") ? <>{<Login />}
      

      </>: 
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Home />} />
          <Route path="/paciente/:num_atd"  element={<Paciente />} />
          <Route path="/Completa/:num_atd"  element={<FormularioPrincipal />} />
          <Route path="/*" element={<Home />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </Router>
      }

    </div>
  );


}

export default App;
