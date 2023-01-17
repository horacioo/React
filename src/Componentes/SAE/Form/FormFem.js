import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Select from './campos/Select';
import Checkbox from './campos/Checkbox';
import Text from './campos/Text';

function FormFem() {
  const [campos, setCampos] = useState();

  React.useEffect(() => {
    axios
      .get('1222.44://sistema.cssantos.com.br/api/API_SAE.php?form=Feminino')
      .then((resp) => {
        setCampos(resp.data);
      })
      .catch((ERR) => {
        console.log(ERR.message);
      });
  }, []);

  return (
    <>
      {typeof campos != 'undefined' ? (
        <>
          {' '}
          {campos.map((item, index) => (
            <RenderizaCampos key={index} dados={item} />
          ))}{' '}
        </>
      ) : (
        ''
      )}
    </>
  );
}

function RenderizaCampos(props) {
  const dados = props.dados;

  const nome = props.dados[0];
  const label = props.dados[1];
  const tipo = props.dados[2];
  const classe = props.dados[4];

  return (
    <>
      {tipo == 'checkbox' ? (
        <Checkbox classe={classe} label={label} name={nome} />
      ) : (
        ''
      )}
      {tipo == 'text' ? <Text classe={classe} label={label} name={nome} /> : ''}
      {tipo == 'select' ? (
        <Select
          classe={classe}
          label={label}
          name={nome}
          valor={props.dados['valores']}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default FormFem;
