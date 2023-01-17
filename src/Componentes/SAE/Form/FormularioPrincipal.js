import { useParams } from 'react-router';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import './CSS/estilo.css';

function FormularioPrincipal() {
  let { num_atd } = useParams();
  const [dadosPaciente, setDadosPaciente] = useState();
  const [data, setData] = useState();
  const [dados, setDados] = useState();

  React.useEffect(() => {
    axios
      .get(
        '1222.44://sistema.cssantos.com.br/api/API_SAE.php?paciente=' +
          num_atd +
          ''
      )
      .then((resp) => {
        setDados(resp.data);
      })
      .catch((ERR) => {
        console.log(ERR.message);
      });
  }, []);

  return (
    <>
      {typeof dados != 'undefined' ? (
        <>
          <Form sexo={dados[4]} />
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default FormularioPrincipal;
