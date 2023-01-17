import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './estilo.css';

function Configuracoes() {
  const [dados, setDados] = useState();

  React.useEffect(() => {
    axios
      .get('1222.44://sistema.cssantos.com.br/api/API_SAE.php?exames=1')
      .then((resp) => {
        setDados(resp.data);
      })
      .catch((ERR) => {
        console.log(ERR.message);
      });
  }, []);

  return (
    <>
      <div>Exames femininos</div>
      <div>Exames masculinos</div>
      <div>Exames RN</div>
    </>
  );
}

export default Configuracoes;
