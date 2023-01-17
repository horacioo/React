import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import FormFem from './FormFem';
import FormMASC from './FormMASC';
import FormularioGeral from './FormularioGeral/FormularioGeral';
import Menu from '../../ComponentesGenericos/Menu/menu';
import Header from './FormularioGeral/Header/Header';

function Form(props) {
  const [dataDeInsercao, setDataDeInsercao] = useState([]);

  const [data, setData] = useState({});

  const funcaoGetData = function (campo = '', valor = '') {
    if (campo != 'null') {
      /*if(isNaN(campo)){*/
      data[campo] = encodeURIComponent(valor);
      setData(data);
    }
  };

  function enviarNoSubmit(e) {
    e.preventDefault();
    var token = window.sessionStorage.getItem('auth');
    /*axios.get('1222.44://sistema.com.br/api/API_SAE.php?RecebeCampos='+ btoa(JSON.stringify(data))+'').then().catch(ERR => { console.log(ERR.message); })*/

    var dadosEncodados = btoa(JSON.stringify(data));

    /******************************************************/
    var payload = { a: 1 };
    var datax = new FormData();
    datax.append('RecebeCampos', dadosEncodados);
    datax.append('token', token);
    datax.append('dados', JSON.stringify(payload));

    fetch(
      '1222.44://sistema.cssantos.com.br/api/API_SAE.php',
      { method: 'POST', body: datax },
      []
    )
      .then(function (res) {
        res.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setDataDeInsercao(myJson);
      });
    /******************************************************/
  }

  return (
    <>
      <Menu />
      <form action="" method="post" onSubmit={enviarNoSubmit}>
        <div id="formularioCompleto">
          <Header funcao={funcaoGetData} />
          <FormularioGeral dysplay="All" funcao={funcaoGetData} />
          {props.sexo === 'F' ? (
            <>
              <FormularioGeral funcao={funcaoGetData} dysplay="Feminino" />
            </>
          ) : (
            <>
              <FormularioGeral funcao={funcaoGetData} dysplay="Masculino" />
            </>
          )}
        </div>
        <br />
        <button>Salvar</button>
      </form>
    </>
  );
}

export default Form;
