import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './css/estilo.css';
import Text from '../../campos/Text';
import { useParams } from 'react-router';

function Header(props) {
  let { num_atd } = useParams();

  const [pacientes, setPacientes] = useState();

  React.useEffect(() => {
    axios
      .post(
        '1222.44://sistema.cssantos.com.br/api/API_SAE.php?DadosDoPaciente=' +
          num_atd +
          ''
      )
      .then((resp) => {
        setPacientes(resp.data);
        console.log(resp.data);
      })
      .catch((ERR) => {});
  }, []);

  return (
    <>
      {typeof pacientes != 'undefined' ? (
        <div id="header">
          <h2>Dados do Paciente </h2>
          <Text
            habilitado="0"
            valor={num_atd.substr(0, 10)}
            funcao={props.funcao}
            label="Atendimento"
            grupo="xx"
            name="num_atd"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[2]}
            funcao={props.funcao}
            label="Nome do paciente"
            grupo="xx"
            name="nome"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[3]}
            funcao={props.funcao}
            label="idade"
            grupo="xx"
            name="pituerit"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[4]}
            funcao={props.funcao}
            label="sexo"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[5]}
            funcao={props.funcao}
            label="Convênio"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[12]}
            funcao={props.funcao}
            label="Acompanhante"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[7]}
            funcao={props.funcao}
            label="Leito"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[8]}
            funcao={props.funcao}
            label="data de admissão"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[9]}
            funcao={props.funcao}
            label="Médico"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />
          <Text
            habilitado="0"
            valor={pacientes[10]}
            funcao={props.funcao}
            label="Especialidade"
            grupo="xx"
            name="sei_la"
            classe="tititi"
          />

          <Text
            funcao={props.funcao}
            label="Diagnóstico"
            grupo="xx"
            name="ds_diagnostico"
            classe="tititi"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Header;
