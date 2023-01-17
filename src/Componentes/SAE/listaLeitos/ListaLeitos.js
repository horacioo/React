import { Link } from 'react-router-dom';
import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import './css/estilo.css';
function ListaLeitos(props) {
  const [Leitos, setLeitos] = useState();

  /*******************************************/
  /*******************************************/
  React.useEffect(
    () => {
      console.log('verificar novamente');
      axios
        .get(
          '1222.44://sistema.cssantos.com.br/api/API_SAE.php?codbloco=' +
            props.codBloc +
            ''
        )
        .then((resp) => {
          setLeitos(resp.data);
          console.log(resp.data);
        });
    },
    [
      props.codBloc,
    ] /**Essa informação de codBloc eu lancei aqui para dizer que é essa informação que deve ser "assistida" para que assim, a consulta possa ser realizada**/
  );

  /*******************************************/
  /*******************************************/
  return (
    <>
      {typeof Leitos !== 'undefined' && Leitos != null ? (
        <>
          <ul className="listaLeitos">
            {Leitos.map((item, index) => (
              <li
                className={item[5] == 1 ? 'SAENova' : 'SAEAntiga'}
                key={index}
              >
                {' '}
                <Link to={`/paciente/${item[0]}`}>
                  {' '}
                  {item[2]} - {item[0]}{' '}
                </Link>{' '}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
    </>
  );
  /*******************************************/
}

export default ListaLeitos;
